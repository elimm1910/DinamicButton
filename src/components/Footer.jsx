import React from 'react';
import styled from 'styled-components'

const FooterStyled = styled.div`
text-align: center;
.contenedor{
    position:absolute;
    width: 100%;
    height: 80%;
    margin-top:-7%;
}
img{
    position: absolute;
    text-align: center;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: -2;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
  h1{
      margin-top:18% !important;
      text-align: center;
      font-size:45px !important;
      color:white;
  }
  .outline{
      color:white;
      background:rgb(236, 56, 191);
      border:none;
      -webkit-border-radius:28;
      -moz-border-radius:28;
      border-radius:28px;
      padding: 10px 32px;
      text-align: center;
      display:inline-block;
      font-size:24px;
      margin-top:3vw;
  }
  .outline:hover{
      background: white;
      color: rgb(236, 56, 191);
  }
  @media screen and (max-width:800px){
    h1{
      margin-top:25% !important;
      font-size:40px !important;
  }
}
@media screen and (max-width:700px){
    h1{
      margin-top:30% !important;
      font-size:35px !important;
  }
}
@media screen and (max-width:600px){
    h1{
      margin-top:35% !important;
      font-size:30px !important;
  }
}
@media screen and (max-width:500px){
    h1{
      margin-top:40% !important;
      font-size:25px !important;
  }
}
`

function Footer() {
    return (
        <FooterStyled>
            <div className='contenedor'>
                <img src="fondo3.jpg" alt='img' />
                <h1>Interested to work with us?</h1>
                <button color="info" className='outline'>Contactanos</button>
            </div>
        </FooterStyled>
    );
}


export default Footer;