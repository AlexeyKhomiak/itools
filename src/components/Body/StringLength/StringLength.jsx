import React from 'react';
import s from './StringLength.module.css';
import { useTranslation} from 'react-i18next';

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({ extended: false });


const StringLength = () => {
    const { t } = useTranslation();
    return (
        <div className={s.content}>
            <div>
                <div>{t('StringLength.title')}</div>

                <form method="post">
                    <textarea name="Data" rows="8" cols="80" placeholder={t('StringLength.textarea')} />
                    <br/>
                    <input type="submit" value={t('StringLength.btnCount') } />
                </form>
            </div>
            <div className={s.result}>
                test
            </div>
        </div>
    );
}

export default StringLength;