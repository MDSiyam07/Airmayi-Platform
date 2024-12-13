'use client';

import { useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';

export default function AsyncIntlLoader({ locale, children }) {
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        async function fetchMessages() {
            try {
                const msgs = (await import(`../../messages/${locale}.json`)).default;
                setMessages(msgs);
            } catch (error) {
                console.error(`Failed to load messages for locale "${locale}"`, error);
            }
        }

        fetchMessages();
    }, [locale]);

    if (!messages) {
        return <div>Loading...</div>; // Vous pouvez personnaliser cet état de chargement.
    }

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
