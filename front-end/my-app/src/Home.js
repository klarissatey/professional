import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Flex, Heading, Button, Text, Input, Progress } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [signupStep, setSignupStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    major: '',
    age: '',
    interests: '',
    mentorshipNeeded: '',
  });
  const navigate = useNavigate();

  const handleStudentSignupClick = () => {
    setShowSignupForm(true);
    setSignupStep(1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContinueClick = () => {
    if (signupStep < 6) {
      setSignupStep(signupStep + 1);
    } else {
      localStorage.setItem('mentorMatchData', JSON.stringify(formData));
      navigate('/mentors');
    }
  };

  const renderSignupStep = () => {
    switch (signupStep) {
      case 1:
        return (
          <Box>
            <Progress value={16} height="16px" colorScheme="blue" borderRadius="full" boxShadow="md" mb={4} />
            <Text fontSize="xl" mb={4}>What's your name?</Text>
            <Input name="name" placeholder="Type Here" mb={4} onChange={handleInputChange} />
            <Button bg="rgb(66, 112, 135)" textColor="white" size="lg" onClick={handleContinueClick}>Continue &rsaquo;</Button>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Progress value={32} height="16px" colorScheme="blue" borderRadius="full" boxShadow="md" mb={4} />
            <Text fontSize="xl" mb={4}>What university do you go to?</Text>
            <Input name="university" placeholder="Type Here" mb={4} onChange={handleInputChange} />
            <Button bg="rgb(66, 112, 135)" textColor="white" size="lg" onClick={handleContinueClick}>Continue &rsaquo;</Button>
          </Box>
        );
      case 3:
        return (
          <Box>
            <Progress value={48} height="16px" colorScheme="blue" borderRadius="full" boxShadow="md" mb={4} />
            <Text fontSize="xl" mb={4}>What major are you?</Text>
            <Input name="major" placeholder="Type Here" mb={4} onChange={handleInputChange} />
            <Button bg="rgb(66, 112, 135)" textColor="white" size="lg" onClick={handleContinueClick}>Continue &rsaquo;</Button>
          </Box>
        );
      case 4:
        return (
          <Box>
            <Progress value={64} height="16px" colorScheme="blue" borderRadius="full" boxShadow="md" mb={4} />
            <Text fontSize="xl" mb={4}>How old are you?</Text>
            <Input name="age" placeholder="Type Here" mb={4} onChange={handleInputChange} />
            <Button bg="rgb(66, 112, 135)" textColor="white" size="lg" onClick={handleContinueClick}>Continue &rsaquo;</Button>
          </Box>
        );
      case 5:
        return (
          <Box>
            <Progress value={80} height="16px" colorScheme="blue" borderRadius="full" boxShadow="md" mb={4} />
            <Text fontSize="xl" mb={4}>What are your interests?</Text>
            <Input name="interests" placeholder="Type Here" mb={4} onChange={handleInputChange} />
            <Button bg="rgb(66, 112, 135)" textColor="white" size="lg" onClick={handleContinueClick}>Continue &rsaquo;</Button>
          </Box>
        );
      case 6:
        return (
          <Box>
            <Progress value={100} height="16px" colorScheme="blue" borderRadius="full" boxShadow="md" mb={4} />
            <Text fontSize="xl" mb={4}>What do you need mentorship in?</Text>
            <Input name="mentorshipNeeded" placeholder="Type Here" mb={4} onChange={handleInputChange} />
            <Button bg="rgb(66, 112, 135)" textColor="white" size="lg" onClick={handleContinueClick}>Finish &rsaquo;</Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box bg="rgb(66, 112, 135)" minHeight="100vh" p={4}>
      <Flex as="nav" className="navbar" alignItems="center" mb={8} p={4} bg="blue.800" color="white">
        <Link to="/">
          <Heading as="h1" size="lg" mr={8}>Pier</Heading>
        </Link>
        
        <Flex className="navbar-links" flex="1" justifyContent="center" gap={8}>
          <Link to="/about" fontSize="xl">About</Link>
          <Link to="/resources" fontSize="xl">Resources</Link>
          <Link to="/mentors" fontSize="xl">Mentors</Link>
          <Link to="/connect" fontSize="xl">Connect</Link>
          <Link to="/profile" fontSize="xl">Profile</Link>
        </Flex>
        
        <Flex gap={4} ml="auto">
          <Link to="/signup">
            <Button colorScheme="whiteAlpha" variant="solid">Sign Up</Button>
          </Link>
          <Link to="/signin">
            <Button colorScheme="whiteAlpha" variant="outline">Log In</Button>
          </Link>
        </Flex>
      </Flex>

      <Box height="2px" bg="white" width="100%" mb={8} />

      <Box textAlign="center" color="white" mb={8}>
        <Heading as="h2" size="xl" mb={4}>
          <FontAwesomeIcon icon={faAnchor} color="white" /> Anchor your future here.
        </Heading>
      </Box>

      <Box as="header" textAlign="center" className="header-content" p={8} bg="white" borderRadius="md" maxW="800px" mx="auto" boxShadow="lg">
        {showSignupForm ? renderSignupStep() : (
          <>
            <Text className="sub-heading" fontSize="lg" mb={4}>
              Whether you're ready to share your wisdom or seeking guidance for your college journey, join us in creating a community where dreams become reality.
            </Text>
            <Text className="call-to-action" fontSize="md" mb={6}>Click below to set sail!</Text>
            <Flex className="signup-buttons" justifyContent="center" gap={4}>
              <Button bg="rgb(66, 112, 135)" textColor="white" size="lg" onClick={handleStudentSignupClick}>Student Sign-Up</Button>
              <Link to="/mentor-signup">
                <Button bg="rgb(66, 112, 135)" textColor="white" size="lg">Mentor Sign-Up</Button>
              </Link>
            </Flex>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Home;
