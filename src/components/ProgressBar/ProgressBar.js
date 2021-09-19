import PropTypes from "prop-types";
import { getWidthAsPercentOfTotalWidth } from "../../utils/percentUtils";
import React from "react";
function ProgressBar({ percent, width, height }) {

    function getColor(percent) {
        if (percent === 100) return 'green';
        return percent > 50 ? 'lightgreen' : 'red';
    }



    return (
        <div style={{ border: 'solid 1px lightgray', width: width }}>
            <div
                aria-label="width"
                style={{
                    width: getWidthAsPercentOfTotalWidth(percent, width),
                    height,
                    backgroundColor: getColor(percent)
                }}
            >
            </div>
        </div>
    )
}

ProgressBar.propTypes = {
    /** Percent of progress completed */
    percent: PropTypes.number.isRequired,

    /** Bar Width */
    width: PropTypes.number.isRequired,

    /** Bar Height */
    height: PropTypes.number
}

ProgressBar.defaultProps = {
    height: 5
}

export default ProgressBar;