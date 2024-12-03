import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Heading, Text, IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const mentorsData = [
  { id: 1, name: 'Alice', university: 'UT Austin', major: 'Computer Science', age: 22, interests: ['AI', 'Web Development'], mentorshipNeeded: 'career guidance' },
  { id: 2, name: 'Bob', university: 'UT Austin', major: 'Business', age: 24, interests: ['Consulting', 'Business Analytics'], mentorshipNeeded: 'Case Prep' },
  { id: 3, name: 'Charlie', university: 'Stanford', major: 'Computer Science', age: 21, interests: ['Machine Learning', 'Data Science'], mentorshipNeeded: 'career guidance' },
  { id: 4, name: 'Dana', university: 'UCLA', major: 'Mechanical Engineering', age: 23, interests: ['CAD', 'Product Design'], mentorshipNeeded: 'career guidance' },
  { id: 5, name: 'Eve', university: 'UC Berkeley', major: 'Mathematics', age: 25, interests: ['Statistics', 'Cryptography'], mentorshipNeeded: 'research guidance' },
];

function MentorMatch() {
  const [formData, setFormData] = useState({ university: '', major: '', age: '', interests: '', mentorshipNeeded: '' });
  const [matches, setMatches] = useState([]);
  const [starredMentors, setStarredMentors] = useState({});

  useEffect(() => {
    // Retrieve form data from localStorage
    const storedData = localStorage.getItem('mentorMatchData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
      findMatches(parsedData); // Find matches based on the retrieved data
    }
  }, []);

  const findMatches = (data) => {
    const interestsArray = data.interests.split(',').map(interest => interest.trim());

    const matchedMentors = mentorsData.map(mentor => {
      let score = 0;
      if (mentor.university === data.university) score++;
      if (mentor.major === data.major) score++;
      if (Math.abs(mentor.age - parseInt(data.age)) <= 2) score++;
      score += mentor.interests.filter(interest => interestsArray.includes(interest)).length;
      if (mentor.mentorshipNeeded === data.mentorshipNeeded) score++;
      const similarityScore = Math.min(Math.floor((score / 5) * 100), 100); // Calculate similarity score as a percentage
      return { ...mentor, similarityScore };
    }).filter(mentor => mentor.similarityScore >= 50); // Only include mentors with a similarity score >= 60

    setMatches(matchedMentors);
  };

  const toggleStarred = (id) => {
    setStarredMentors(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Box bg="rgb(66, 112, 135)" minHeight="100vh" p={8}>
      <Flex as="nav" className="navbar" alignItems="center" mb={8} p={4} bg="blue.800" color="white">
        <Heading as="h1" size="lg" mr={8}>Pier</Heading>
        <Flex className="navbar-links" flex="1" justifyContent="center" gap={8}>
          <Text as="span">About</Text>
          <Text as="span">Resources</Text>
          <Text as="span">Mentors</Text>
          <Text as="span">Connect</Text>
          <Text as="span">Profile</Text>
        </Flex>
        <Flex gap={4} ml="auto">
          <Button colorScheme="whiteAlpha" variant="solid">Sign Up</Button>
          <Button colorScheme="whiteAlpha" variant="outline">Log In</Button>
        </Flex>
      </Flex>

      <Box textAlign="center" color="white" mb={8}>
        <Heading as="h2" size="xl" mb={4}>MENTORS</Heading>
      </Box>

      <Box bg="white" p={8} borderRadius="md" maxW="1000px" mx="auto" boxShadow="lg">
        <Text fontSize="xl" mb={6}>Here are your <b>matches</b>:</Text>
        <Flex wrap="wrap" gap={8} justifyContent="center">
          {matches.length > 0 ? (
            matches.map((mentor) => (
              <Box key={mentor.id} p={6} border="1px solid #ccc" borderRadius="lg" bg="white" w="250px" boxShadow="md">
                <Flex mb={4} alignItems="center" justifyContent="space-between">
                  <Box borderRadius="full" bg="gray.200" h="50px" w="50px"></Box>
                  <Box>
                    <Text fontWeight="bold">{mentor.name}</Text>
                  </Box>
                  <IconButton
                    icon={<StarIcon color={starredMentors[mentor.id] ? 'yellow.400' : 'gray.300'} />}
                    variant="ghost"
                    onClick={() => toggleStarred(mentor.id)}
                    aria-label="Star Mentor"
                  />
                </Flex>
                <Box mb={4}>
                  <Text><b>University:</b> {mentor.university}</Text>
                  <Text><b>Major:</b> {mentor.major}</Text>
                  <Text><b>Age:</b> {mentor.age}</Text>
                  <Text><b>Interests:</b> {mentor.interests.join(', ')}</Text>
                  <Text><b>Mentorship Needed:</b> {mentor.mentorshipNeeded}</Text>
                </Box>
                <Flex justifyContent="space-between" alignItems="center">
                  <Box as="span" fontSize="lg" fontWeight="bold">Similarity Score:</Box>
                  <Box as="span" fontSize="lg" fontWeight="bold">{mentor.similarityScore}%</Box>
                </Flex>
              </Box>
            ))
          ) : (
            <Text fontSize="lg">No matches found. Please adjust your search criteria.</Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
}

export default MentorMatch;
