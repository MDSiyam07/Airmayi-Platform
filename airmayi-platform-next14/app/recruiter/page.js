import CandidateList from "../components/CandidateList";
import CandidateDetails from "../components/CandidateDetails";
import Header from "../components/Header";

export default function RecruiterPage() {
    return (
        <><Header />
        <div style={{ padding: '20px' }}>
            <h1>Recruteur</h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div>
                <h2>Liste des Candidats</h2>
                <CandidateList />
                </div>
                <div>
                <h2>Détails du Candidat</h2>
                <CandidateDetails />
                </div>
            </div>
        </div>
        </>
    );
}