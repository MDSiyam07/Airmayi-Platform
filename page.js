import Header from './components/Header';
import Footer from './components/Footer';
import { Button } from 'antd';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Home() {
    return (
        <><Header />
            <div className="home-container">
                <h1 className="header-title">Qui êtes-vous ?</h1>
                <div className="button-group">
                    <Link href="/candidate">
                        <Button className="custom-button type--A" shape="round" icon={<UserOutlined />} size="large">
                            <span className='button__text'>Je suis candidat</span>
                            <div class="button__drow1"></div>
                        </Button>
                    </Link>
                    <Link href="/recruiter">
                        <Button className="custom-button type--A" shape="round" icon={<TeamOutlined />} size="large">
                            <span className='button__text'>Je suis recruteur</span>
                            <div class="button__drow1"></div>
                        </Button>
                    </Link>
                </div>
            </div>
        <Footer /></>
    )
}
