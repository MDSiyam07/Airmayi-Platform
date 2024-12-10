import CandidateForm from "../components/CandidateForm";
import Header from "../components/Header";
import Footer from '../components/Footer';

const Candidate = () => {
    return (
        <><Header />
        <div className="candidate-form-container">
            <p className="form-title">Formulaire candidat</p>
            <CandidateForm />
        </div>
        <Footer /></>
    );
};
  
export default Candidate;