import React from 'react';
import { strLenSize, strLenChar } from './strlen';
import s from './Form.module.css';
import { withTranslation } from 'react-i18next';

class StringLengthForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        //alert(this.state.value);
        event.preventDefault();
    }

    render() {
        const { t } = this.props;
        let resultSize = strLenSize(this.state.value);
        let resultChar = strLenChar(this.state.value);
        //let Calculate = () => {
        //}

        return (
            <div className={ s.content }>
                <form onSubmit={this.handleSubmit}>
                    <textarea name="Data" rows="8" placeholder={t('StringLength.textarea')}
                        value={this.state.value} onChange={this.handleChange} />
                    {/*<br />*/}
                    {/*<input type="submit" value={t('StringLength.btnCount')} />*/}
                    {/*<br />*/}
                    {/*<button onClick={Calculate}>{t('StringLength.btnCount')}</button>*/}
                </form>
                <div className={s.resultSmall}>
                    UTF-8:&nbsp;
                    <strong> {resultSize} </strong> {t('units.byte')},
                    <strong> {resultChar} </strong> {t('units.char')}
                </div>
                <br />
                <div className={s.result}>
                    {t('StringLength.result.char')} <strong> {resultChar} </strong> {t('units.char')}
                </div >
            </div>
        );
    }
}

const Form = withTranslation()(StringLengthForm);

export default Form;