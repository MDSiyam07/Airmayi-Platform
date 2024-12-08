import Header from './components/Header';
import Footer from './components/Footer';
import { Button } from 'antd';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Home() {
    return (
        <><Header />
            <div className="home-container">
                <h1>Qui êtes-vous ?</h1>
                <div className="button-group">
                    <Link href="/candidate">
                        <Button type="primary" icon={<UserOutlined />} size="large">
                        Je suis candidat
                        </Button>
                    </Link>
                    <Link href="/recruiter">
                        <Button type="primary" icon={<TeamOutlined />} size="large">
                        Je suis recruteur
                        </Button>
                    </Link>
                </div>
            </div>
        <Footer /></>
    )
}
