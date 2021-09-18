import PropTypes from "prop-types";
import { useState } from "react";
import CodeExample from './CodeExample';

function Example(props) {
    const [showCode, setShowCode] = useState(false);
    const { code, description, name } = props.example;
    const ExampleComponent = require(`./examples/${props.componentName}/${name}`).default;

    function toggleCode(e) {
        e.preventDefault();
        setShowCode(() => !showCode)
    }

    return (
        <div className="example">
            {description && <h4>{description}</h4>}

            <ExampleComponent />

            <p>
                <a href="" onClick={toggleCode}>
                    {showCode ? "Hide" : "Show"} Code
                </a>
            </p>

            {showCode && <CodeExample>{code}</CodeExample>}
        </div>
    )
}

Example.propTypes = {
    example: PropTypes.object.isRequired,
    componentName: PropTypes.string.isRequired
}

export default Example