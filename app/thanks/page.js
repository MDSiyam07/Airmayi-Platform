import Link from 'next/link';

const ThankYouPage = () => {
    return (
        <div style={{ display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    margin: 0,
                    textAlign: 'center',
                    flexDirection: 'column', 
                }}>
            <h1>Merci pour votre candidature !</h1>
            <p>Nous avons bien reçu vos informations. Nous vous contacterons bientôt. &#128522;</p>
            <Link href="/">
                <p style={{ color: 'blue', textDecoration: 'underline' }}>Retour à l'accueil</p>
            </Link>
        </div>
    );
};

export default ThankYouPage;