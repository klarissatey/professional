import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Heading, Text, IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

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
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          <svg className="navbar-logo" width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="83" height="83" fill="url(#pattern0_161_1489)"/>
            <defs>
            <pattern id="pattern0_161_1489" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_161_1489" transform="scale(0.0111111)"/>
            </pattern>
            <image id="image0_161_1489" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu0lEQVR4nO3cT2sTQRzG8VHUWt+AUi+lUHpVAh6tfSEKfQ16VK8JggX/1BbUt2FuXhQ8ebFQejClliYtHmrxT6n28JXF36FIsu6um8nM5PnAQmgnv915WJLZCTPOiYiIiMiQAReAZeAA+AasA6vAfJ+2N+x/69b2C/AUmBz2dUaPP8EN8ga4AlwF3ua0Wx11P4IGnAYOyffLjjw/slqj7k/sQRehoP/zo6OolX+eaNwBk8AT+2Irax94rC/DkoBp4L6NQAY5sDbTZevLX4DLwLs+Ib9XwDUDJoAm0LMjez1R93lExpyNSU+lVscL0tIFWsA5FxrS1HKhIU27LjSkaceFhjQ1XWhISzfYL8MiBvUq9jrBCS0gFHQ+BR1ZQOiOzqegIwsI3dH5FHRkAaE7Ot9YB01ausE+GZKmlgsNadp1oSFRLjQkyoWGRLnQkKYdFxrS1HShIS3dYMfRRRTpYYznCo6C9kRBe6KgPVHQnihoTxS0JwraEwXtiYL2xFYshfJk2HOpytaJAA3gHtAGPtn66kN73a7xXO1+9e3cjWjWrIiI1Lfyf8VW/meLzV9kn4U11m9YzX07Yqz/HNjLfl23+e6zde5l8QG4A8xVqDln713LGT2sRVy//C84wPcCQ6pt4CWwCFwDLgLn7bhkf1u0NlnbsmKr36sybPta4cLHXa/KHf1o1FcdoWbVPSseAkejvvoI/AQeAGdKB30i8CngLtAZwgVuArft2Iywfseymaoc8ICtGRZs58Ps8beqPatx/eR+cVZ/HnhmbUKtv2U7OC542e8OmAFuAUvAK2AD+GwfNcc2dv0IvLaO3wRmS9SftfcsW42O1Tz2UP/I+rJhfVuyvs5UDkxEpEaa68inuQ4017FdYSiluQ7pS3MdnmiuY8g014HmOtBcRxGa6xARERERERERcWPrN0p7Uld3PGpVAAAAAElFTkSuQmCC"/>
            </defs>
          </svg>
          <span>Pier</span>
        </Link>
        <div className="navbar-items-container">
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/resources">Resources</Link>
          <Link className="navbar-item" to="/mentors">Mentors</Link>
          <Link className="navbar-item" to="/connect">Connect</Link>
          <Link className="navbar-item" to="/profile">Profile</Link>
        </div>
        <div className="navbar-item auth-buttons">
          <button className="navbar-item button-signup" type="button" to="/signup">Sign Up</button>
          <button className="navbar-item button-login" type="button" to="/signin">Log In</button>
        </div>
      </nav>

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
