import React from 'react';

interface LanguageSwitcherProps {
  language: string;
  changeLanguage: (lang: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, changeLanguage }) => {
  return (
    <div className='language-switch'>
      {language === 'en' ? (
        <button onClick={() => changeLanguage('pt')}>
          PT
        </button>
      ) : (
        <button onClick={() => changeLanguage('en')}>
          EN
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
