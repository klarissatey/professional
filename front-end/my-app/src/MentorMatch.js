import React, { useState } from 'react';
import './MentorMatch.css';

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
    <div className="mentor-match-container">
      <h2>Find Your Mentor</h2>
      <input name="university" placeholder="University" onChange={handleChange} />
      <input name="major" placeholder="Major" onChange={handleChange} />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} />
      <input name="interests" placeholder="Interests (comma separated)" onChange={handleChange} />
      <input name="mentorshipNeeded" placeholder="Mentorship Needed" onChange={handleChange} />
      <button onClick={findMatches} className="find-matches-button">Find Matches</button>

      <div className="matches" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {matches.length > 0 ? (
          matches.map((mentor) => (
            <div key={mentor.id} className="match" style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '200px' }}>
              <p><strong>Name:</strong> {mentor.name}</p>
              <p><strong>University:</strong> {mentor.university}</p>
              <p><strong>Major:</strong> {mentor.major}</p>
              <p><strong>Interests:</strong> {mentor.interests.join(', ')}</p>
              <p><strong>Mentorship Needed:</strong> {mentor.mentorshipNeeded}</p>
            </div>
          ))
        ) : (
          <p>No matches found. Please adjust your search criteria.</p>
        )}
      </div>
    </div>
  );
}

export default MentorMatch;
