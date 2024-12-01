import React from 'react';
import styled from 'styled-components'
import { MDBRow, MDBCol } from 'mdbreact'

//componentes
import Card from './Card.jsx'

const ListHorizontalCardStyled = styled.div`
  text-align: center;
`

function ListHorizontalCard() {
    return (
        <ListHorizontalCardStyled>
            {window.innerWidth < 1000 ?
                <div className='container'>
                    <MDBRow className='mb-6 r mx-auto'>
                        <MDBCol md="6" lg="6">
                            <Card
                                title={'Patricia'}
                                img={'1.jpeg'}
                                texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka'}
                            />
                        </MDBCol>
                        <MDBCol md="6" lg="6">
                            <Card
                                title={'Laura'}
                                img={'2.jpeg'}
                                texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka'}
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-6 r mx-auto'>
                        <MDBCol md="6" lg="6">
                            <Card
                                title={'Angela'}
                                img={'3.jpg'}
                                texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka'}
                            />
                        </MDBCol>
                        <MDBCol md="6" lg="6">
                            <Card
                                title={'Karen'}
                                img={'4.jpeg'}
                                texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka'}
                            />
                        </MDBCol>
                    </MDBRow>
                </div>
                :
                <div className='container'>
                    <MDBRow className='mb-3 r mx-auto'>
                        <MDBCol md="3" lg="3">
                            <Card
                                title={'Patricia'}
                                img={'1.jpeg'}
                                texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka'}
                            />
                        </MDBCol>
                        <MDBCol md="3" lg="3">
                            <Card
                                title={'Laura'}
                                img={'2.jpeg'}
                                texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka'}
                            />
                        </MDBCol>
                        <MDBCol md="3" lg="3">
                            <Card
                                title={'Angela'}
                                img={'3.jpg'}
                                texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka'}
                            />
                        </MDBCol>
                        <MDBCol md="3" lg="3">
                            <Card
                                title={'Karen'}
                                img={'4.jpeg'}
                                texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka'}
                            />
                        </MDBCol>
                    </MDBRow>
                </div>
            }

        </ListHorizontalCardStyled>
    );
}


export default ListHorizontalCard;