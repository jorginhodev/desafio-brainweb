import PropTypes from "prop-types";
import * as S from "./styles";

const Button = ({ children, to, bgcolor }) => {
    return (
        <S.Button to={to} color={bgcolor}>
            {children}
        </S.Button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    bgcolor: PropTypes.string,
};

export default Button;
