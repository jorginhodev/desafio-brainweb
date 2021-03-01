import PropTypes from "prop-types";
import * as S from "./styles";

const Button = ({ children, to, bgcolor, onClick }) => {
    return (
        <S.Button to={to} color={bgcolor} onClick={onClick}>
            {children}
        </S.Button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    bgcolor: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
