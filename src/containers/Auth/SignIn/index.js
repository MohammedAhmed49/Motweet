import React, { Component } from 'react';
import classes from '../Auth.module.css';
import Button from '../../../components/UI/Button';
import ErrorValidationLabel from '../../../components/UI/ErrorValidationLabel';
import { connect } from 'react-redux';
import { initSignin } from '../../../store/actions/actions';
import { Redirect } from 'react-router-dom';
import Spinner from '../../../components/UI/Spinner';

class SignIn extends Component {
    txtFieldState = {
        value: "",
        valid: true,
        typeMismatch: false,
        errMsg: ""
    };
    state={
        email: {
            ...this.txtFieldState,
            fieldName: 'Email',
            required: true,
            requiredTxt: "Email is required",
            formatErrorTxt: "Incorrect email format"
        },
        password: {
            ...this.txtFieldState,
            fieldName: 'Password',
            required: true,
            requiredTxt: "Password is required",
            formatErrorTxt: "Password must have at least 6 digits or characters"
        },
        allFieldsValid: false
    }

    getFormValues = formElements => {
        const elementsArr = Array.prototype.slice.call(formElements);
        const formValues = elementsArr.filter(element => element.name.length > 0).map(element => {
            const { typeMismatch } = element.validity;
            const { name, type, value } = element;
            return{
                name,
                type,
                typeMismatch,
                value,
                valid: element.checkValidity()
            }
        })
        .reduce((acc, currVal) => {
            const { value, valid, typeMismatch } = currVal;
            const {fieldName, requiredTxt, formatErrorTxt} = this.state[currVal.name];
            
            acc[currVal.name] = {
                value,
                valid,
                typeMismatch,fieldName,
                requiredTxt,
                formatErrorTxt
            };

            return acc;

        }, {});

        return formValues;
    }

    

    checkAllFieldsValid = (formValues) => {
        return !Object.keys(formValues).map(x => formValues[x]).some(field => !field.valid);
    }

    submitHandler = e => {
        e.preventDefault();
        const form = e.target;
        const formValues = this.getFormValues(form.elements);
        const allFieldsValid = this.checkAllFieldsValid(formValues);        
        this.setState({...formValues, allFieldsValid});
        if(allFieldsValid){
            this.props.initSignin(formValues.email.value, formValues.password.value);
        }
        
    }
    render() {
        const { email, password } = this.state;

        const emailError = email.valid ? '' : <ErrorValidationLabel txtLbl={email.typeMismatch ? email.formatErrorTxt : email.requiredTxt} />;

        const passwordError = password.valid ? '' : <ErrorValidationLabel txtLbl={password.requiredTxt} />;

        let redirect = null;
        
        let form = <>
                <h2 className={classes.title}>Log In</h2>
                <form
                className={classes.AuthForm}
                onSubmit={this.submitHandler}
                noValidate>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="E-Mail"
                        className={classes.input}
                        required
                    />
                    {emailError}
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        className={classes.input}
                        required
                    />
                    {passwordError}
                    <Button>Log In</Button>
                </form>
        </>

        if(this.props.idToken){
            redirect = <Redirect to="/" />
        }

        if(this.props.loading){
            form = <Spinner />
        }

        return (
            <div>
                {redirect}
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        loading: state.auth.loading,
        error: state.auth.error,
        idToken: state.auth.idToken,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        initSignin: (email, password) => { dispatch(initSignin(email, password)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
