import React from 'react';
import strLenChar from './strlen';
import s from './Form.module.css';
import { withTranslation, Trans } from 'react-i18next';

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
        //alert('Сочинение отправлено: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        const { t } = this.props;
        let resultChar = strLenChar(this.state.value);
        return (
            
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea name="Data" rows="8" cols="80" placeholder={t('StringLength.textarea')}
                            value={this.state.value} onChange={this.handleChange} />
                    <br />
                    <input type="submit" value={t('StringLength.btnCount')} />
                    
                </form>
                <br/>
                <div className={s.result}>
                    <Trans i18nKey="StringLength.result">
                        {{ resultChar }}
                    </Trans>
                </div >
                
            </div>
        );
    }
}

const Form = withTranslation()(StringLengthForm);

export default Form;