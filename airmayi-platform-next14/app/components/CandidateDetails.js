/***
 * Détails des candidats
 ***/

"use client";
import { useSelector } from 'react-redux';

const CandidateDetails = () => {
    // Récupérer l'ID du candidat sélectionné
    const selectedCandidateId = useSelector((state) => state.candidates.selectedCandidateId);
    // Trouver le candidat sélectionné dans la liste
    const candidate = useSelector((state) =>
        state.candidates.list.find((c) => c.id === selectedCandidateId)
    );

    // Si aucun candidat n'est sélectionné
    if (!candidate) {
        return <p>Aucun candidat sélectionné. Veuillez en sélectionner un dans la liste.</p>;
    }

    return (
        <div>
            <h2>Détails du Candidat</h2>
            <p>Nom : {candidate.name}</p>
            <p>Email : {candidate.email}</p>
            {/* Ajoutez d'autres détails si nécessaire */}
        </div>
    );
};

export default CandidateDetails;