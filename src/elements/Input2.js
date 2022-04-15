import styled from "styled-components";
import React from "react";
import Text2 from "./Text2";

const Input2 = (props) => {
    const {
        margin, border, width, height, placeholder, type, multiLine, _onChange, _value, 
    } = props;

    if(multiLine){
        return (
            <Textarea
                placeholder={placeholder}
                rows={10}
                onChange={_onChange}
                value={_value}>
                
            </Textarea>
    )
    }
    else {
        return ( 
            <React.Fragment>
                <Inputs 
                    width={width}
                    placeholder={placeholder} 
                    type={type} 
                    onChange={_onChange} 
                    value={_value} >
                </Inputs>
            </React.Fragment>
            
        
        )
    }
}
Input2.defaultProps = {
    width: "100%",
    height: "2em",
    border: "1px solid #f8ac27",
    placeholder: '',
    type: "text",
    multiLine: false, 
    _onChange: () => {},

}

const Inputs = styled.input`
    width: ${(props)=> props.width};
    height: 2em;
    border: 1px solid #f8ac27;
    border-radius: 5px;
    placeholder: ${(props)=> props.placeholder};
    type: ${(props)=> props.type};
    display: block;
    multiLine: false;
    margin: 10px 0px;
`
const Textarea = styled.textarea`
    width: 100%;
    height: 220px;
    border: 1px solid #f8ac27;
    border-radius: 5px;
    label: ${(props)=> props.label};
    placeholder: ${(props)=> props.placeholder};
    type: ${(props)=> props.type};
    display: block;
    margin: 10px 0px;
    multiLine: true;
`
export default Input2;