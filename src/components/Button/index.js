import PropTypes from "prop-types";
import * as S from "./styles";

const Button = ({ children, to }) => {
    return <S.Button to={to}>{children}</S.Button>;
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};

export default Button;
