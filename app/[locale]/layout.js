"use client"

import "../globals.css";
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales } from '@/navigation';
import { Provider } from 'react-redux';
import store from "@/redux/store";

export default async function RootLayout({ children, params: { locale } }) {
    console.log('Locale parameter received:', locale);
    if (!locales.includes(locale)) {
        console.error(`Invalid locale: ${locale}`);
        notFound();
    }
    
    // const messages = useMessages();
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
        console.log(`Messages loaded successfully for locale: ${locale}`, messages);
    } catch (error) {
        console.error(`Failed to load messages for locale "${locale}"`, error);
        throw error;
    }
    
    return (
      <html lang={locale}>
          {/* <Provider store={store}>{children}</Provider> */}
        <Provider store={store}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <body>{children}</body>
            </NextIntlClientProvider>
        </Provider>
      </html>
    );
}