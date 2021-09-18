import PropTypes from "prop-types"

function Navigation({ components }) {
    return (
        <ul className="navigation">
            {
                components.map(name => {
                    return (
                        <li key={name}>
                            <a href={`#${name}`}>{name}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

Navigation.propTypes = {
    components: PropTypes.array.isRequired
}

export default Navigation;