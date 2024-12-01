import React from 'react';
import styled from 'styled-components'
import { MDBCard } from 'mdbreact'

const CardStyled = styled.div`
  text-align: center;
  .efecto{
    position: relative;
    overflow: hidden;
  }
  .detalles{
    padding-top:5px;
    position: absolute;
    bottom: -50%;
    transition: 0.5s;
    width:100%
  }
  .img{
    position: relative;
    width:100%;
    height: 400px;
    transition: 3s;
  }
  .img:hover{
    transform: scale(1.5);
  }
  .img:hover ~ .detalles{
    bottom: 0px;
  }
`

function Card({ title, img, texto }) {
  return (
    <CardStyled>
      <div className='mb-4'>
        <MDBCard news className="efecto">
          <img className='img'
            src={img}
            alt="Publicacion"
          />
          <MDBCard className='detalles'>
            <div className="social-meta">
              <p>{title}</p>
              <p id='texto'>{texto}</p>
            </div>
          </MDBCard>
        </MDBCard>
      </div>
    </CardStyled>
  );
}


export default Card;