"use client";

import { useSelector } from 'react-redux';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

const CandidateDetailsPage = ({ params }) => {
    const { id } = params;
    const candidates = useSelector((state) => state.candidates.list);

    console.log('Candidats dans le store:', candidates); // Vérifie les candidats dans le store
    console.log('ID depuis l\'URL:', id); // Vérifie l'ID passé dans l'URL

    const candidate = candidates.find((c) => c.id === parseInt(id));

    if (!candidate) {
        return <p>Candidat introuvable.</p>;
    }

    return (
        <><Header />
        <div className="candidate-details-container">
            <h1 className="candidate-details-title">Détails du candidat</h1>
            <p><strong>Prénom :</strong> {candidate.firstName}</p>
            <p><strong>Nom :</strong> {candidate.name}</p>
            <p><strong>Email :</strong> {candidate.email}</p>
            <p><strong>Genre :</strong> {candidate.gender}</p>
            <p><strong>Téléphone :</strong> {candidate.phone}</p>
            <p><strong>Motivation :</strong> {candidate.motivation}</p>
            {candidate.resume && (
            <p>
                <strong>CV :</strong>
                <a href={URL.createObjectURL(candidate.resume)} download className="download-link">
                    Télécharger le CV
                </a>
            </p>
            )}
        </div>
            <Link href="/recruiter">
                    <p style={{ color: 'blue', textDecoration: 'underline' }}>Retour à la liste des candidats</p>
            </Link>
        <Footer /></>
    );
};

export default CandidateDetailsPage;