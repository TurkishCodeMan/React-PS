import PropTypes from "prop-types";
import EyeIcon from "../EyeIcon";
import TextInput from "../TextInput";
import ProgressBar from "../ProgressBar";
import { useState } from "react";

function PasswordInput({
    htmlId,
    name,
    label,
    onChange,
    onBlur,
    placeholder,
    value,
    error,
    showVisibilityToggle,
    quality,
    minLength,
    maxLength,
    ...props
}) {
    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword() {
        return setShowPassword((prevState) => {
            return !prevState
        })
    }

    return (
        <TextInput
            htmlId={htmlId}
            name={name}
            label={label}
            placeholder={placeholder}
            type={showPassword ? 'text' : 'password'}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            maxLength={maxLength}
            error={error}
            required
            {...props}
        >
            {showVisibilityToggle &&
                <a
                    aria-label="toggle"
                    onClick={toggleShowPassword}
                    style={{ marginLeft: 5 }}
                >
                    <EyeIcon />
                </a>
            }

            {
                value.length > 0 && quality && <ProgressBar percent={quality} width={130} />
            }
        </TextInput>
    )
}

PasswordInput.propTypes = {
    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
    htmlId: PropTypes.string.isRequired,

    /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
    name: PropTypes.string.isRequired,

    /** Input label */
    label: PropTypes.string.isRequired,

    /** Function to call onChange */
    onChange: PropTypes.func.isRequired,

    /** Placeholder to display when empty */
    placeholder: PropTypes.string,

    /** Value */
    value: PropTypes.any,

    /** String to display when error occurs */
    error: PropTypes.string,

    /** Dislpay progressbar */
    quality: PropTypes.number,

    showVisibilityToggle: PropTypes.bool,

    maxLength: PropTypes.number,
    minLength: PropTypes.number
};

PasswordInput.defaultProps = {
    maxLength: 50,
    showVisibilityToggle: false,
    label: 'Password',
    name: "default"
}

export default PasswordInput;