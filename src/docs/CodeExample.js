import PropTypes from 'prop-types';
import { useEffect } from 'react';

import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'

function CodeExample(props) {
    useEffect(() => {
        hljs.registerLanguage('javascript', javascript);
        hljs.highlightBlock(CodeExample);
    }, [])

    return (
        <pre ref={ref => { CodeExample = ref }}>
            <code>
                {props.children}
            </code>
        </pre>
    )
}

CodeExample.propTypes = {
    children: PropTypes.string.isRequired
}

export default CodeExample;