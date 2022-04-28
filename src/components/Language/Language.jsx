import React from 'react';
import s from './Language.module.css';
import { useTranslation } from 'react-i18next';


//https://react.i18next.com/latest/using-with-hooks
//https://github.com/i18next/react-i18next/tree/master/example/react
// use hoc for class based components
//class LegacyWelcomeClass extends Component {
//    render() {
//        const { t } = this.props;
//        return <h2>{t('title')}</h2>;
//    }
//}
//const Welcome = withTranslation()(LegacyWelcomeClass);

// Component using the Trans component
//function MyComponent() {
//    return (
//        <Trans i18nKey="description.part1">
//            To get started, edit <code>src/App.js</code> and save to reload.
//        </Trans>
//    );
//}

// page uses the hook
function Language() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={s.lang}>
            <div>
                <button type="button" onClick={() => changeLanguage('ua')}>
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