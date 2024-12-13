/***
 * Détails des candidats
 ***/

"use client";
import { useSelector } from 'react-redux';

const CandidateDetails = () => {
    const selectedCandidateId = useSelector((state) => state.candidates.selectedCandidateId);
    const candidate = useSelector((state) =>
        state.candidates.list.find((c) => c.id === selectedCandidateId)
    );

    if (!candidate) {
        return <p>Aucun candidat sélectionné. Veuillez en sélectionner un dans la liste.</p>;
    }

    return (
        <div>
            <h2>Détails du Candidat</h2>
            <p><strong>Nom :</strong> {candidate.name}</p>
            <p><strong>Email :</strong> {candidate.email}</p>
        </div>
    );
};

export default CandidateDetails;