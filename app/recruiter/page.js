import CandidateList from "../components/CandidateList";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RecruiterPage() {
    return (
        <><Header />
            <div className="candidate-list-container">
                <h3 className="candidate-list-title">Liste des candidats</h3>
                <CandidateList />
            </div>
        <Footer /></>
    );
}