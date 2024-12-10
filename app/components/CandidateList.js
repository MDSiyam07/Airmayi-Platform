/***
 * Liste des candidats
 ***/

"use client";
import { useSelector, useDispatch } from 'react-redux';
import { selectCandidate } from '@/redux/store';
import { useRouter } from 'next/navigation';

const CandidateList = () => {
    const candidates = useSelector((state) => state.candidates.list);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSelect = (id) => {
        dispatch(selectCandidate(id)); // Sélectionner un candidat
        router.push(`/candidate/${id}`);
    };

    return (
        <ul>
            {candidates.map((candidate) => (
                <div
                    key={candidate.id}
                    style={{ cursor: 'pointer' }} // Rendre les éléments cliquables
                    onClick={() => handleSelect(candidate.id)} // Déclencher la sélection
                    className="candidate-item"
                >
                    {candidate.name} - {candidate.email}
                </div>
            ))}
        </ul>
    );
};
  
export default CandidateList;
// const candidates = [
//   { id: 1, name: 'John Doe', email: 'john@example.com' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
// ];

// const CandidateList = () => {
//   return (
//     <ul>
//       {candidates.map((candidate) => (
//         <li key={candidate.id}>
//           {candidate.name} - {candidate.email}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default CandidateList;