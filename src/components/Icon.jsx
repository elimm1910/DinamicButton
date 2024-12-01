import React from 'react';
import { MDBIcon } from 'mdbreact'
import styled from 'styled-components'

const IconStyled = styled.div`
  text-align: center;
.cardd{
    width:200px;
}
`

const IconContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => !['baseColor'].includes(prop),
})`
    width:50px;
    height:50px;
    border-radius: 100%;
    font-size:24px;
    background: linear-gradient(45deg, ${props => props.baseColor ? props.baseColor : "blue"}, #ffffff);
    display: flex;
    align-items: center;
    justify-content: center;
}
`


function Icon({title, icon, texto, color}) {
    return (
        <IconStyled>
            <div className='cardd mx-auto'>
                <IconContainer baseColor={color} className='icon-container2 mx-auto'>
                    <MDBIcon icon={icon} className='icon'/>
                </IconContainer>
                <h3>{title}</h3>
                <p>{texto}</p>
            </div>
        </IconStyled>
    );
}


export default Icon;