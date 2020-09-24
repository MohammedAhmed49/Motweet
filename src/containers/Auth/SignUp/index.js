import React, { Component } from 'react';
import classes from '../Auth.module.css';
import Button from '../../../components/UI/Button';
import ErrorValidationLabel from '../../../components/UI/ErrorValidationLabel';
import { connect } from 'react-redux';
import { initSignup } from '../../../store/actions';

class SignUp extends Component {
    txtFieldState = {
        value: "",
        valid: true,
        typeMismatch: false,
        errMsg: ""
    };
    state={
        firstname: {
            ...this.txtFieldState,
            fieldName: 'First Name',
            required: true,
            requiredTxt: "First Name is required",
        },
        lastname: {
            ...this.txtFieldState,
            fieldName: 'Last Name',
            required: true,
            requiredTxt: "Last Name is required",
        },
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
            this.props.initSignup(formValues.firstname.value, formValues.lastname.value, formValues.email.value, formValues.password.value);
        }
        
    }
    render() {
        const { email, firstname, lastname, password } = this.state;

        const emailError = email.valid ? '' : <ErrorValidationLabel txtLbl={email.typeMismatch ? email.formatErrorTxt : email.requiredTxt} />;

        const fnameError = firstname.valid ? '' : <ErrorValidationLabel txtLbl={firstname.requiredTxt} />;
        
        const lnameError = lastname.valid ? '' : <ErrorValidationLabel txtLbl={lastname.requiredTxt} />;

        const passwordError = password.valid ? '' : <ErrorValidationLabel txtLbl={password.requiredTxt} />;

        return (
            <div>
                <h2 className={classes.title}>Sign Up</h2>
                <form
                className={classes.AuthForm}
                onSubmit={this.submitHandler}
                noValidate>
                    <input 
                        type="text" 
                        name="firstname" 
                        placeholder="First Name"
                        className={classes.input}
                        required
                    />

                    {fnameError}

                    <input 
                        type="text" 
                        name="lastname" 
                        placeholder="Last Name"
                        className={classes.input}
                        required
                    />

                    {lnameError}

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
                    <Button>Sign Up</Button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        initSignup: (firstName, lastName, email, password) => { dispatch(initSignup(firstName, lastName, email, password)) }
    }
}

export default connect(null, mapDispatchToProps)(SignUp);
