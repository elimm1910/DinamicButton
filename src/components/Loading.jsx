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
  .Container{
    width: 100%;
    height: 14rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .buttonContainer{
    height: 3rem;
  }
  .outline{
      color:rgb(50, 4, 59);
      background:white;
      border:none;
      -webkit-border-radius:28;
      -moz-border-radius:28;
      border-radius:28px;
      // padding: 10px 32px;
      width: 12rem;
      height: 3rem;
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

    window.addEventListener('scroll', (event) => {
      if (document.documentElement.scrollTop > heihtTop && (document.documentElement.scrollHeight - document.documentElement.scrollTop) > window.innerHeight) {
        className = 'flotante';
        boton.innerHTML = '<i class="fa fa-envelope" </i>';
        boton.style.transform = `translate(calc(50vw - 6rem), calc(100vh - 5rem - 14rem - 1.5rem))`;
      } else if ((document.documentElement.scrollHeight - document.documentElement.scrollTop) <= window.innerHeight) {
        boton.style.transform = `translate(calc(50vw - 6rem), calc(100vh - 5rem - 14rem - 1.5rem + 200px))`;
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
      <div className='Container'>
        <img src="fondo2.jpg" alt='img' />
        <h1>We are WebDeveloment!</h1>
        <p>A team of passionate developers</p>
        <div className='buttonContainer'>
          <button id="boton" color="info" className={`outline waves-effect ${clase}`}>Contactanos</button>
        </div>
      </div>
      <div style={{ height: "65vh" }}></div>
    </LoadingStyled>
  );
}

export default Loading;
