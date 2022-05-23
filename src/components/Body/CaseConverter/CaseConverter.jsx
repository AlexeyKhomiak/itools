import React from 'react';
import s from './CaseConverter.module.css';
import { useTranslation } from 'react-i18next';

const CaseConverter = () => {
    const { t } = useTranslation();
    return (
        <div className={s.content}>
            <div>
                <div>{t('CaseConverter.title')}</div>
                <div> In process...</div>
            </div>
        </div>
    );
}

export default CaseConverter;