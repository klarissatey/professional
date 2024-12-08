import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text, Input, Button, Progress } from '@chakra-ui/react';

function StudentForm() {
  const [signupStep, setSignupStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    major: '',
    age: '',
    interests: '',
    mentorshipNeeded: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContinueClick = () => {
    if (signupStep < 6) {
      // Move to the next step
      setSignupStep(signupStep + 1);
    } else {
      // Store the form data and navigate to the next page
      localStorage.setItem('mentorMatchData', JSON.stringify(formData));
      navigate('/mentors');
    }
  };
  

  const renderSignupStep = () => {
    const steps = [
      { question: "What's your name?", name: 'name', progress: 16 },
      { question: 'What high school do you go to?', name: 'university', progress: 32 },
      { question: 'What major do you want to be?', name: 'major', progress: 48 },
      { question: 'How old are you?', name: 'age', progress: 64 },
      { question: 'What are your interests?', name: 'interests', progress: 80 },
      { question: 'What do you need mentorship in?', name: 'mentorshipNeeded', progress: 100 },
    ];

    const { question, name, progress } = steps[signupStep - 1];

    return (
      <Box>
        <Progress value={progress} height="16px" colorScheme="transparent" bg="transparent" borderRadius="full" boxShadow="md" mb={8}
          sx={{
            '& > div[role="progressbar"]': {
              backgroundColor: 'rgb(66, 112, 135)', 
            },
          }} />
        <Text fontSize="xl" color={'black'} mb={4}>{question}</Text>
        <Input 
          name={name} 
          color={'black'} 
          placeholder={"Type Here"}  
          mb={4} 
          onChange={handleInputChange} 
          value={formData[name]}  
        />
        <Button bg="rgb(66, 112, 135)" textColor="white" size="lg" onClick={handleContinueClick}>
          {signupStep === 6 ? 'Finish' : 'Continue'}
        </Button>
      </Box>
    );
  };

  return (
    <Box bg="rgb(66, 112, 135)" minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={8}>
      <Box textAlign="center" bg="white" p={8} borderRadius="md" maxW="600px" width="100%" mx="auto" boxShadow="lg" position="relative">
        {renderSignupStep()}
      </Box>
    </Box>
  );
}

export default StudentForm;
