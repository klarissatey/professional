import React from 'react';
import './Scholarships.css';
import image from './scholarshipPage.png';

function Scholarships() {
  const scholarships = [
    {
      id: 1,
      name: 'Scholarship 1',
      fundedBy: 'XYZ',
      criteria: [
        'Aimed at First Generation Students & Children of Immigrants',
        'Median Income: Under $60,000',
      ],
      worth: '$10,000',
      deadline: '25 Days',
    },
    {
      id: 2,
      name: 'Scholarship 2',
      fundedBy: 'XYZ',
      criteria: [
        'Aimed at First Generation Students & Children of Immigrants',
        'Median Income: Under $50,000',
      ],
      worth: '$4,000',
      deadline: '15 Days',
    },
    {
      id: 3,
      name: 'Scholarship 3',
      fundedBy: 'XYZ',
      criteria: [
        'Aimed at First Generation Students & Children of Immigrants',
        'Median Income: Under $40,000',
      ],
      worth: '$8,000',
      deadline: '20 Days',
    },
  ];

  return (
    <div className="scholarships-container">
      <div className="holder-for-title">
        <h1 className="scholarships-title">Scholarships</h1>
      </div>

      <div className="scholarships-content">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="scholarship-card">
            <h2 className="scholarship-name">{scholarship.name}</h2>

            <h2 className="scholarship-worth">Worth: {scholarship.worth}</h2>
            <p className="scholarship-funded">Funded by: {scholarship.fundedBy}</p>
            <h1 className="scholarship-number">{scholarship.id}</h1> 
            <img src={image} alt="image" className="image"/>
            {/* <div className="check-icon"> 
             <i class="bi bi-bookmark-check"></i>
            </div>
            <i class="bi bi-bookmark-check"></i>  */}
        
            <ul className="scholarship-criteria">
              {scholarship.criteria.map((criterion, index) => (
                <li key={index}>{criterion}</li>
              ))}
            </ul>
              <h2 className="scholarship-deadline">Deadline: {scholarship.deadline}</h2>
              <div className="button-holder">
              <button className="apply-button">Apply Now</button>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Scholarships;
