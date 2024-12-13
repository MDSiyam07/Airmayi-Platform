"use client";

import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import CandidateList from "../components/CandidateList";
import {useTranslations} from 'next-intl';

const RecruiterPage = () => {
    const t = useTranslations('recruiter');
    const candidates = useSelector((state) => state.candidates.list);

    return (
        <><Header />
            <div className="recruiter-page-container">
                <p className="form-title">{t('title_listpage')}</p>
                {candidates.length > 0 ? (
                    <div>
                <p className="info-message" style={{ fontStyle: 'italic', margin: '10px 0' }}>
                    {t('select_button')}
                </p>
                        <CandidateList />
                    </div>
                ) : (
                    <p className="no-candidates-message">
                        {t('submit_sentence')}
                        <Link href="/candidate">
                                <p style={{ color: 'blue', textDecoration: 'underline' }}>{t('access_message')}</p>
                        </Link>
                    </p>
                )}
            </div>
        <Footer /></>
    );
};

export default RecruiterPage;