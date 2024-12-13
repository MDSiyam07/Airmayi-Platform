import Header from './components/Header';
import Footer from './components/Footer';
import { Button } from 'antd';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function Home() {
    const t = useTranslations('home');

    return (
        <><Header />
            <div className="home-container">
                <h1 className="header-title">{t('header')}</h1>
                <div className="button-group">
                    <Link href="/candidate">
                        <Button className="custom-button type--A" shape="round" icon={<UserOutlined />} size="large">
                            <span className='button__text'>{t('candidate_button')}</span>
                            <div class="button__drow1"></div>
                        </Button>
                    </Link>
                    <Link href="/recruiter">
                        <Button className="custom-button type--A" shape="round" icon={<TeamOutlined />} size="large">
                            <span className='button__text'>{t('recruiter_button')}</span>
                            <div class="button__drow1"></div>
                        </Button>
                    </Link>
                </div>
            </div>
        <Footer /></>
    )
}
