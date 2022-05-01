import React from 'react';
import s from './StringLength.module.css';
import Form from './Form/Form';
import { useTranslation } from 'react-i18next';

const StringLength = () => {
    const { t } = useTranslation();
    return (
        <div className={s.content}>
            <div>{t('StringLength.title')}</div>
            <Form />
        </div>
    );
}

export default StringLength;