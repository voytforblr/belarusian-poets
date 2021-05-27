import React from 'react';
import Header from '../components/Header.js'
import About from '../components/About.js'
import WriteDay from '../components/WriterDay'
import AboutDevelopers from '../components/AboutDevelopers'
import { useTranslation } from 'react-i18next'
import "../../src/i18n"

export default function Home() {

    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <About />
            <WriteDay />
            <AboutDevelopers />
        </div>
    );
}
