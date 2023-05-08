import PropTypes from 'prop-types';

export default function Btn({ Click, btnLabel, btnType }) {
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
                background: "#EBD8FF",
                boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
                border: 'none',
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
            }}>
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