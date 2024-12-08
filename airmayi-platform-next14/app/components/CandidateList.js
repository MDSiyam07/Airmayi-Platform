/***
 * Liste des candidats
 ***/

"use client";

const candidates = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const CandidateList = () => {
  return (
    <ul>
      {candidates.map((candidate) => (
        <li key={candidate.id}>
          {candidate.name} - {candidate.email}
        </li>
      ))}
    </ul>
  );
};

export default CandidateList;