import PropTypes from "prop-types"

function HelloWord({ message }) {
    return <div>{message}</div>
}

HelloWord.propTypes = {
    /** Message to display */
    message: PropTypes.string
};

HelloWord.defaultProps = {
    message: 'World'
}
export default HelloWord;