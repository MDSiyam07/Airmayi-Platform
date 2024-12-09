import CandidateList from "../components/CandidateList";
import CandidateDetails from "../components/CandidateDetails";
import Header from "../components/Header";

export default function RecruiterPage() {
    return (
        <><Header />
        <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
            <div style={{ flex: 1 }}>
                <CandidateList />
            </div>
            <div style={{ flex: 1 }}>
                <CandidateDetails />
            </div>
        </div>
        </>
    );
}