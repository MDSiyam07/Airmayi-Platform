/***
 * Détails des candidats
 ***/

"use client";

import { useSelector } from 'react-redux';

const candidate = { id: 1, name: 'John Doe', email: 'john@example.com', resume: 'resume.pdf' };

const CandidateDetails = () => {
  return (
    <div>
      <h1>{candidate.name}</h1>
      <p>Email: {candidate.email}</p>
      <p>Resume: {candidate.resume}</p>
    </div>
  );
};

export default CandidateDetails;