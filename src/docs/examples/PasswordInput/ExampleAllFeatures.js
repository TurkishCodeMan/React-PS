import PasswordInput from "ps-react/PasswordInput";
import { useState } from "react";

function ExampleAllFeatures(props) {
    const [pass, setPass] = useState('');

    function getQuality() {
        const length = pass.length;
        return length > 10 ? 100 : length * 10;
    }

    return (
        <div>
            <PasswordInput
                htmlId="pass-input-all-features"
                name="password"
                onChange={event => setPass(event.target.value)}
                value={pass}
                minLength={8}
                placeholder="Enter Pass"
                showVisibilityToggle
                quality={getQuality()}
                {...props}

            />
        </div>
    )
}

export default ExampleAllFeatures;