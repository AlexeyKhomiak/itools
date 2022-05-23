import React from 'react';
import { getStringLengthSize, getStringLengthChar } from './strlen';
import s from './Form.module.css';
import { withTranslation } from 'react-i18next';

class StringLengthForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            resultSize: 0,
            resultChar: 0,
            resultCharFinal: 0,
            checkBoxAuto: true
        };
        this.handleChangeTxtArea = this.handleChangeTxtArea.bind(this);
        this.handleFormCalculate = this.handleFormCalculate.bind(this);
        this.handleChangeCheckBoxAuto = this.handleChangeCheckBoxAuto.bind(this);
    }

    handleChangeTxtArea(event) {
        let checkBoxAutoVal = this.state.checkBoxAuto;
        let lenSize = getStringLengthSize(event.target.value);
        let lenChar = getStringLengthChar(event.target.value);

        this.setState({
            value: event.target.value,
            resultSize: lenSize,
            resultChar: lenChar
        });        

        if (checkBoxAutoVal === true) {
            this.setState({ resultCharFinal: getStringLengthChar(event.target.value) });
        }
    }
    
    handleFormCalculate(event) {
        event.preventDefault();
        let checkBoxAutoVal = this.state.checkBoxAuto;
        let lenChar = getStringLengthChar(this.state.value);

        if (checkBoxAutoVal === false) {
            this.setState({ resultCharFinal: lenChar });
        }
    }

    handleChangeCheckBoxAuto(event) {
        let lenChar = getStringLengthChar(this.state.value);

        this.setState({
            [event.target.name]: event.target.checked,
            resultCharFinal: lenChar
        });
    }
    
    render() {
        return (
            <div className={ s.content }>
                <form onSubmit={this.handleFormCalculate}>
                    <textarea name="txtAreaGeneral" id="txtAreaGeneral" rows="8"
                        placeholder={this.props.t('StringLength.textarea')} value={this.state.value}
                        onChange={this.handleChangeTxtArea} />
                    <div className={s.resultSmall}>
                        UTF-8:&nbsp;
                        <strong> {this.state.resultSize} </strong> {this.props.t('units.byte')},
                        <strong> {this.state.resultChar} </strong> {this.props.t('units.char')}
                    </div>
                    <div>
                        <input type="checkbox" name="checkBoxAuto" id="checkBoxAuto"
                            onChange={this.handleChangeCheckBoxAuto} checked={this.state.checkBoxAuto}  />
                        <label htmlFor="checkBoxAuto">{this.props.t('StringLength.checkBoxAuto')}</label>
                        <br/>
                        <input type="submit" name="btnCount" id="btnCount" value={this.props.t('StringLength.btnCount')} />
                    </div>
                </form>                
                <br />
                <div className={s.result}>
                    {this.props.t('StringLength.result.char')}
                    <strong> {this.state.resultCharFinal} </strong>
                    {this.props.t('units.char')}
                </div >
            </div>
        );
    }
}

const Form = withTranslation()(StringLengthForm);

export default Form;