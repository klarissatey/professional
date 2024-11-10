import React, { useState } from 'react';
import './MentorMatch.css'; // Ensure you have your CSS file for styling

const mentorsData = [
  { id: 1, name: 'Alice', year: 'Senior', location: 'New York', major: 'Computer Science', interests: ['AI', 'Web Development'] },
  { id: 2, name: 'Bob', year: 'Junior', location: 'Los Angeles', major: 'Mathematics', interests: ['Data Science', 'Statistics'] },
];

const menteesData = [
  { id: 1, name: 'Charlie', year: 'Junior', location: 'New York', major: 'Computer Science', interests: ['AI', 'Machine Learning'] },
  { id: 2, name: 'Diana', year: 'Sophomore', location: 'Los Angeles', major: 'Mathematics', interests: ['Statistics', 'Data Analysis'] },
];

function MentorMatch() {
  const [matches, setMatches] = useState([]);

  const findMatches = () => {
    const matched = menteesData.map(mentee => {
      const matchedMentors = mentorsData.filter(mentor =>
        mentor.year === mentee.year &&
        mentor.location === mentee.location &&
        mentor.major === mentee.major &&
        mentor.interests.some(interest => mentee.interests.includes(interest))
      );
      return { mentee, matchedMentors };
    });
    setMatches(matched);
  };

  return (
    <div className="mentor-match-container">
      <h2>Mentor Matching</h2>
      <button onClick={findMatches} className="find-matches-button">Find Matches</button>
      <div className="matches">
        {matches.map(({ mentee, matchedMentors }) => (
          <div key={mentee.id} className="match">
            <div className="mentee">
              <h3>Mentee: {mentee.name}</h3>
              <p>Year: {mentee.year}</p>
              <p>Location: {mentee.location}</p>
              <p>Major: {mentee.major}</p>
              <p>Interests: {mentee.interests.join(', ')}</p>
            </div>
            <div className="mentors">
              <h4>Matched Mentors:</h4>
              {matchedMentors.length > 0 ? (
                matchedMentors.map(mentor => (
                  <div key={mentor.id} className="mentor">
                    <p>Name: {mentor.name}</p>
                    <p>Year: {mentor.year}</p>
                    <p>Location: {mentor.location}</p>
                    <p>Major: {mentor.major}</p>
                    <p>Interests: {mentor.interests.join(', ')}</p>
                  </div>
                ))
              ) : (
                <p>No matches found.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MentorMatch; 