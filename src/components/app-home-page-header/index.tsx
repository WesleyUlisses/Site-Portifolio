import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../language-switcher';
import AppLogo from '../app-logo'; // Importa o hook para usar as traduções
import './styles.css';


const AppHomePageHeader = () => {
    const { t, i18n } = useTranslation();
    const [showMenu, setShowMenu] = useState(false);
    const [language, setLanguage] = useState('en');

    const toggleMenu = () => setShowMenu(!showMenu);

    const changeLanguage = (lng: string) => {
        setLanguage(lng);
        i18n.changeLanguage(lng);
    };

    return (
        <nav>
            <Link to="/">
                <AppLogo />
            </Link>

            <div>
                <li className='items'>
                    <Link to="/">{t('home')}</Link>
                    <Link to="/partners">{t('exercises')}</Link>
                    <Link to="/resources">{t('materials')}</Link>
                    <Link to="/rules">{t('blog')}</Link>
                    <Link to="/rules">{t('about')}</Link>
                    <Link to="/rules">{t('contribute')}</Link>
                    <LanguageSwitcher language={language} changeLanguage={changeLanguage} />
                </li>
                <button className={`hamburger ${showMenu ? 'hamburger-in-menu' : ''}`} onClick={toggleMenu}>
                    &#9776;
                </button>
            </div>

            <div className={`nav-lateral ${showMenu ? 'open' : ''}`}>
                <Link to="/" onClick={toggleMenu}>{t('home')}</Link>
                <Link to="/partners" onClick={toggleMenu}>{t('exercises')}</Link>
                <Link to="/resources" onClick={toggleMenu}>{t('materials')}</Link>
                <Link to="/rules" onClick={toggleMenu}>{t('blog')}</Link>
                <Link to="/rules" onClick={toggleMenu}>{t('about')}</Link>
                <Link to="/rules" onClick={toggleMenu}>{t('contribute')}</Link>
                <div className='languageSwitcher'>
                    <LanguageSwitcher language={language} changeLanguage={changeLanguage} />
                </div>
            </div>


        </nav>
    );
};

export default AppHomePageHeader;
