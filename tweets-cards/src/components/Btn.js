import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Btn({ Click, btnLabel, btnType }) {
    const [hover, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(hover => hover=true);
    }
    const handleMouseLeave = () => {
        setIsHovered(hover => hover=false);
    }

    if (!btnType) {
        return (
            <button onClick={Click} style={{
                display: "block",
                margin: '0 auto',
                width: 196,
                padding: 14,
                fontFamily: 'Montserrat',
                fontWeight: 600,
                fontSize: 18,
                lineHeight: '1.22',
                textTransform: "uppercase",
                color: "#373737",
                borderRadius: 10,
                backgroundColor: "#EBD8FF",
                boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
                border: 'none',

                ...(hover && { backgroundColor: "#d1b5ee" }),
            }}>
                {btnLabel}
            </button>
        )
    } else {
        return (
            <button onClick={Click} style={{
                display: "block",
                margin: '0 auto',
                width: 196,
                padding: 14,
                fontFamily: 'Montserrat',
                fontWeight: 600,
                fontSize: 18,
                lineHeight: '1.22',
                textTransform: "uppercase",
                color: "#373737",
                borderRadius: 10,
                backgroundColor: "#5CD3A8",
                boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
                border: 'none',
                
                ...(hover && { backgroundColor: "#14a26e" }),
                }}
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseLeave}
            >
                {btnLabel}
            </button>
        )
    }
};

Btn.propTypes = {
    btnLabel: PropTypes.string,
    Click: PropTypes.func,
    btnType: PropTypes.bool,
}