import styled from "styled-components";

const Text = (props) => {
    const {children, lineHeight, fontWeight, color, fontSize, margin} = props;
    const styles = {
        fontWeight: fontWeight, 
        fontSize: fontSize,
        color: color,
        margin: margin,
        lineHeight: lineHeight,
    }
    return ( 
        <P {...styles}>{children}</P>
    )
}
Text.defaultProps = {
    children: null,
    fontWeight: "400", 
    color: "black",
    fontSize: "14px",
    margin: "0px",
    lineHeight: "1.5em",
}
const P = styled.p`
    font-weight: ${(props) => (props.fontWeight)};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    margin: ${(props) => props.margin};
    line-height: ${(props) => props.lineHeight};
`
export default Text;