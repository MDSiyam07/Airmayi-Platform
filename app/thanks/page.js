import Link from 'next/link';

const ThankYouPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Merci pour votre candidature !</h1>
            <p>Nous avons bien reçu vos informations. Nous vous contacterons bientôt.</p>
            <p>Enfin.. ça c'est ce qu'on dit hahaha</p>
            <Link href="/">
                <p style={{ color: 'blue', textDecoration: 'underline' }}>Retour à l'accueil</p>
            </Link>
        </div>
    );
};

export default ThankYouPage;