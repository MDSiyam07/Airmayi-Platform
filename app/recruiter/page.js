"use client";

import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import CandidateList from "../components/CandidateList";

const RecruiterPage = () => {
    const candidates = useSelector((state) => state.candidates.list);

    return (
        <><Header />
            <div className="recruiter-page-container">
                <p className="form-title">Liste des candidats</p>
                {candidates.length > 0 ? (
                    <div>
                <p className="info-message" style={{ fontStyle: 'italic', margin: '10px 0' }}>
                    Sélectionnez un candidat pour voir ses informations.
                </p>
                        <CandidateList />
                    </div>
                ) : (
                    <p className="no-candidates-message">
                        Veuillez soumettre une candidature via le formulaire candidat pour voir la liste.
                        <Link href="/candidate">
                                <p style={{ color: 'blue', textDecoration: 'underline' }}>Accès au formulaire candidat</p>
                        </Link>
                    </p>
                )}
            </div>
        <Footer /></>
    );
};

export default RecruiterPage;