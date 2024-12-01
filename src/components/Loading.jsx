import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';

const LoadingStyled = styled.div`
  text-align: center;
  h1{
      margin-top:40px;
      font-size:50px;
      color:white;
      margin:10px;
  }
  p{
    color:white;
    font-size:24px;
    margin:10px;
  }
  img{
    position: absolute;
    text-align: center;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    top:0;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .outline{
      color:rgb(50, 4, 59);
      background:white;
      border:none;
      -webkit-border-radius:28;
      -moz-border-radius:28;
      border-radius:28px;
      padding: 10px 32px;
      text-align: center;
      display:inline-block;
      font-size:24px;
      margin: 4px 2px;
  }
  .outline:hover{
      background: rgb(236, 56, 191);
      color: white;
  }
  .normal{
      transition:0.5s;
  }
  .flotante{
      width:60px;
      height:60px;
      padding: 0px 0px;
      position:fixed;
      border-radius:100%;
      border:none;
      background:rgb(236, 56, 191);
      color:white;
      outline:none;
      margin-right:16px;
      margin-bottom:16px;
      transition:0.5s;
      z-index:100;
  }
  ${'' /* .footer{
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
      position:fixed;
      margin-bottom:16px;
      transition:0.5s;
  } */}
  ${'' /* .footer:hover{
      background: rgb(236, 56, 191);
      color: white;
  } */}
  .espacio{
      height:window.height();
  }
  @media screen and (max-width:800px){
    h1{
      margin-top:40px;
      font-size:45px;
  }
  p{
    font-size:20px;
  }
}
@media screen and (max-width:700px){
    h1{
      margin-top:35px;
      font-size:40px;
  }
  p{
    font-size:18px;
  }
}
@media screen and (max-width:600px){
    h1{
      margin-top:30px;
      font-size:40px;
  }
  p{
    font-size:16px;
  }
}
@media screen and (max-width:500px){
    h1{
      margin-top:30px;
      font-size:35px;
  }
  p{
    font-size:14px;
  }
}
  
`

function Loading() {
  const clase = useSelector((state) => state.className)
  const dispatch = useDispatch()
  useEffect(() => {
    let className = 'normal';
    var boton = document.getElementById('boton');
    let heihtTop = boton.offsetTop;
    let widthLeft = boton.offsetLeft;
    let marginright = 30;
    let marginBottom = 50;
    if (window.innerWidth < 600) {
      marginright = -10;
    }
    if (window.innerHeight < 600) {
      marginBottom = 30;
    }
    // if (window.innerHeight < 400) {
    //   marginBottom = 15;
    // }

    let heightBottom = window.innerHeight - heihtTop - boton.offsetHeight - marginBottom;
    let widthRight = window.innerWidth - widthLeft - boton.offsetWidth - marginright;
    window.addEventListener('scroll', (event) => {
      if (document.documentElement.scrollTop > heihtTop && (document.documentElement.scrollHeight - document.documentElement.scrollTop) > window.innerHeight) {
        className = 'flotante';
        boton.innerHTML = '<i class="fa fa-envelope" </i>';
        boton.style.transform = `translate(${widthRight}px, ${heightBottom}px)`;
      } else if ((document.documentElement.scrollHeight - document.documentElement.scrollTop) <= window.innerHeight) {
        boton.style.transform = `translate(${widthRight}px, ${heightBottom + 200}px)`;
      } else {
        className = 'normal';
        boton.innerHTML = "Contactanos";
        boton.style.transform = `translate(0px, 0px)`;
      }
      dispatch({
        type: "ACTUALIZAR_CLASE",
        className
      })
    })

  }, [])
  return (
    <LoadingStyled>
      <div>
        <div>
          <img src="fondo2.jpg" alt='img' />
          <h1>We are WebDeveloment!</h1>
          <p>A team of passionate developers from Cuba</p>
          <button id="boton" color="info" className={`outline waves-effect ${clase}`}>Contactanos</button>
          <div style={{ height: (window.innerHeight) * 0.65 }}></div>
        </div>
      </div>
    </LoadingStyled>
  );
}

export default Loading;
