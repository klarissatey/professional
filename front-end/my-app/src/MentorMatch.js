import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';

const mentorsData = [
  { id: 1, name: 'Alice', university: 'NYU', major: 'Computer Science', age: 21, interests: ['AI', 'Web Development'], mentorshipNeeded: 'career guidance' },
  { id: 2, name: 'Bob', university: 'UCLA', major: 'Mathematics', age: 23, interests: ['Data Science', 'Statistics'], mentorshipNeeded: 'technical skills' },
  // Add more dummy mentor data as needed
];

function MentorMatch() {
  const [formData, setFormData] = useState({ university: '', major: '', age: '', interests: '', mentorshipNeeded: '' });
  const [matches, setMatches] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const findMatches = () => {
    const interestsArray = formData.interests.split(',').map(interest => interest.trim());

    const matchedMentors = mentorsData.filter(mentor => {
      let score = 0;
      if (mentor.university === formData.university) score++;
      if (mentor.major === formData.major) score++;
      if (Math.abs(mentor.age - parseInt(formData.age)) <= 2) score++;
      score += mentor.interests.filter(interest => interestsArray.includes(interest)).length;
      return score >= 3; // Match threshold can be adjusted
    });

    console.log('Matched Mentors:', matchedMentors); // Debugging line
    setMatches(matchedMentors);
  };

  return (
    <Box p={6} bg="#e9f5ff" borderRadius="10px" boxShadow="lg">
      <Flex direction="column" gap={6}>
        <Stack spacing={4}>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg="white"
            boxShadow="md"
            _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)', transition: '0.3s' }}
          >
            <Heading size="md" color="#333">Find Your Mentor</Heading>
            <Text color="#555">
              <input name="university" placeholder="University" onChange={handleChange} />
              <input name="major" placeholder="Major" onChange={handleChange} />
              <input name="age" type="number" placeholder="Age" onChange={handleChange} />
              <input name="interests" placeholder="Interests (comma separated)" onChange={handleChange} />
              <input name="mentorshipNeeded" placeholder="Mentorship Needed" onChange={handleChange} />
              <button onClick={findMatches} className="find-matches-button">Find Matches</button>
            </Text>
          </Box>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg="white"
            boxShadow="md"
            _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)', transition: '0.3s' }}
          >
            <Heading size="md" color="#333">Matches</Heading>
            <Text color="#555">
              {matches.length > 0 ? (
                matches.map((mentor) => (
                  <Box key={mentor.id} p={4} borderWidth="1px" borderRadius="md" bg="white" boxShadow="md" _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)', transition: '0.3s' }}>
                    <Heading size="md" color="#333">Name:</Heading>
                    <Text color="#555">{mentor.name}</Text>
                    <Heading size="md" color="#333">University:</Heading>
                    <Text color="#555">{mentor.university}</Text>
                    <Heading size="md" color="#333">Major:</Heading>
                    <Text color="#555">{mentor.major}</Text>
                    <Heading size="md" color="#333">Interests:</Heading>
                    <Text color="#555">{mentor.interests.join(', ')}</Text>
                    <Heading size="md" color="#333">Mentorship Needed:</Heading>
                    <Text color="#555">{mentor.mentorshipNeeded}</Text>
                  </Box>
                ))
              ) : (
                <Text color="#555">No matches found. Please adjust your search criteria.</Text>
              )}
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default MentorMatch;
