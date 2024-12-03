import React, { useState } from 'react';

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
    <div style={{ padding: '24px', backgroundColor: '#e9f5ff', borderRadius: '10px', boxShadow: 'lg' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ padding: '50px', border: '1px solid', borderRadius: '8px', backgroundColor: 'white', boxShadow: 'md' }}>
          <h2 style={{ color: '#333', marginBottom: '16px' }}>Find Your Mentor</h2>
          <div style={{ color: '#555' }}>
            <input name="university" placeholder="University" onChange={handleChange} />
            <input name="major" placeholder="Major" onChange={handleChange} />
            <input name="age" type="number" placeholder="Age" onChange={handleChange} />
            <input name="interests" placeholder="Interests (comma separated)" onChange={handleChange} />
            <input name="mentorshipNeeded" placeholder="Mentorship Needed" onChange={handleChange} />
            <button onClick={findMatches} className="find-matches-button">Find Matches</button>
          </div>
        </div>
        <div style={{ padding: '16px', border: '1px solid', borderRadius: '8px', backgroundColor: 'white', boxShadow: 'md' }}>
          <h2 style={{ color: '#333' }}>Matches</h2>
          <div style={{ color: '#555' }}>
            {matches.length > 0 ? (
              matches.map((mentor) => (
                <div key={mentor.id} style={{ padding: '16px', border: '1px solid', borderRadius: '8px', backgroundColor: 'white', boxShadow: 'md' }}>
                  <h3 style={{ color: '#333' }}>Name:</h3>
                  <p style={{ color: '#555' }}>{mentor.name}</p>
                  <h3 style={{ color: '#333' }}>University:</h3>
                  <p style={{ color: '#555' }}>{mentor.university}</p>
                  <h3 style={{ color: '#333' }}>Major:</h3>
                  <p style={{ color: '#555' }}>{mentor.major}</p>
                  <h3 style={{ color: '#333' }}>Interests:</h3>
                  <p style={{ color: '#555' }}>{mentor.interests.join(', ')}</p>
                  <h3 style={{ color: '#333' }}>Mentorship Needed:</h3>
                  <p style={{ color: '#555' }}>{mentor.mentorshipNeeded}</p>
                </div>
              ))
            ) : (
              <p style={{ color: '#555' }}>No matches found. Please adjust your search criteria.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorMatch;
