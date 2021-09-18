import { useState } from "react";
import PasswordInput from "../PasswordInput";
import TextInput from "../TextInput";
import PropTypes, { func } from "prop-types";

function RegistrationForm({
    minPasswordLength = 8,
    onSubmit,
    confirmationMessage = 'Thanks For Registration !'
}) {
    const [state, setState] = useState({
        user: { email: '', password: '' },
        errors: {},
        submitted: false,
        loading: false
    });


    function onChange(e) {
        const user = state.user;
        user[e.target.name] = e.target.value;

        setState(prevState => {
            return {
                ...prevState,
                user
            }
        });
    }

    function onBlur(e) {
        return validate(state.user)
    }

    function passwordQuality(password) {
        if (!password) return null;
        if (password.length >= minPasswordLength) return 100;
        const percentOfMinLength = parseInt(password.length / minPasswordLength * 100, 10);
        return percentOfMinLength;
    }

    function validate({ email, password }) {
        const errors = {};
        if (email && email.length > 0) errors.email = 'Email required !';
        if (password && password.length < minPasswordLength) errors.password = `Password must be at least ${minPasswordLength} characters.`;
        setState(prevState => {
            return {
                ...prevState,
                errors
            }
        });

        const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
        return formIsValid;
    }

    async function onSubmitted() {
        setState(prevState => {
            return {
                ...prevState,
                loading: true,
            }
        })
        const { user } = state;
        const formIsValid = validate(user);
        if (formIsValid) {
            await onSubmit(user);
            setState(prevState => {
                return {
                    ...prevState,
                    submitted: true,
                }
            })
        }
        setState(prevState => {
            return {
                ...prevState,
                loading: false,
            }
        })
    }

    return (
        state.submitted
            ? <h2>{confirmationMessage}</h2>
            : <div>
                <TextInput
                    htmlId="registration-form-email"
                    name="email"
                    onChange={onChange}
                    label="Email"
                    onBlur={onBlur}
                    value={state.user.email}
                    error={state.errors.email}
                    required
                />

                <PasswordInput
                    htmlId="registration-form-password"
                    name="password"
                    value={state.user.password}
                    onChange={onChange}
                    onBlur={onBlur}
                    quality={passwordQuality(state.user.password)}
                    showVisibilityToggle
                    maxLength={50}
                    error={state.errors.password}
                />

                <input type="submit" value={state.loading ? `Loading....` : 'Register'} onClick={onSubmitted} />

            </div>



    )

}

RegistrationForm.propTypes = {
    /** Message displayed upon successfull */
    confirmationMessage: PropTypes.string,
    /** Called from submitted */
    onSubmit: PropTypes.func.isRequired,
    /** Min password length */
    minPasswordLength: PropTypes.number
}

export default RegistrationForm;