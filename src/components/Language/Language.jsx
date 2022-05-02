import React from 'react';
import s from './Language.module.css';
import { useTranslation } from 'react-i18next';

//https://react.i18next.com/latest/using-with-hooks
//https://github.com/i18next/react-i18next/tree/master/example/react

function Language() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={s.lang}>
            <div>
                <button type="button" value="ua" onClick={() => changeLanguage('ua')}>
                    ua
                </button>
                <button type="button" onClick={() => changeLanguage('en')}>
                    en
                </button>
                <button type="button" onClick={() => changeLanguage('ru')}>
                    ru
                </button>
            </div>
        </div>
    );
}

export default Language;