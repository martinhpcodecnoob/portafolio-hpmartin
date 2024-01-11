import {notFound} from 'next/navigation';
import { IBM_Plex_Mono } from "next/font/google";
const ibm = IBM_Plex_Mono({ subsets: ['cyrillic-ext'],weight:'600' });
import React from 'react';
import "./globals.css";
import { useTranslations } from 'next-intl'
import Header from '@/components/Header/Header';
import { Nav } from '@/InterfaceTS/nav';
import FooterD from '@/components/Footer/Footer';
import { Footerr } from '@/InterfaceTS/footer';
import { ThemeProvider } from "@/components/theme-provider"
import ModTheme from '@/components/Header/ModTheme';
import Stars from '@/components/Body/EffectStars/Stars';

// Can be imported from a shared config
const locales = ['en', 'es'];

export default function RootLayout({children, params: {locale}}:{children :React.ReactNode,params: {locale:string}}) {
    const t = useTranslations('nav')
    const t1 = useTranslations('footer')
    
    const Nav : Nav = {
        name:t('name'),
        proyects:t('proyects'),
        mystack:t('mystack'),
        aboutme:t('aboutme'),
        contactme:t('contactme'),
        languajeEN:t('languajeEN'),
        languajeES:t('languajeES')
    }
    const Footer : Footerr = {
        name:t1('name')
    }
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    return (
        <html lang={locale}>
            <body className={`${ibm.className}`}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    <Stars/>
                    <header className='top-0 z-50 sticky'>
                        <Header nav={Nav}/>
                    </header>
                    <div className='mx-auto min-h-[100vh] max-w-7xl px-2 sm:px-6 lg:px-8'>
                        {children}
                    </div>
                    <footer>
                        <FooterD footer={Footer}/>
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    );
}