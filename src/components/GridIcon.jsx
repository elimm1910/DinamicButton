import React from 'react';
import styled from 'styled-components'
import { MDBRow, MDBCol } from 'mdbreact'
// componentes
import Icon from './Icon.jsx'


const GridIconStyled = styled.div`
  margin-top:10vw;
  text-align: center;
`

function GridIcon() {
    return (
        <GridIconStyled>
            <div className='container mx-auto'>
                <MDBRow className='mb-3'>
                    <MDBCol md="4">
                        <Icon
                            title={'U/Ux'}
                            icon={'align-center'}
                            texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka bhxabjdjkcksa dajsdnnfksd ffhghhjhbkdxdfx bnhhfssaeeessee'}
                            color={'purple'}
                        />
                    </MDBCol>
                    <MDBCol md="4">
                        <Icon
                            title={'Icon'}
                            icon={'blog'}
                            texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka bhxabjdjkcksa dajsdnnfksd ffhghhjhbkdxdfx bnhhfssaeeessee'}
                            color={'green'}
                        />
                    </MDBCol>
                    <MDBCol md="4">
                        <Icon
                            title={'Motion'}
                            icon={'book-open'}
                            texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka bhxabjdjkcksa dajsdnnfksd ffhghhjhbkdxdfx bnhhfssaeeessee'}
                            color={'blue'}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='r'>
                    <MDBCol md="4">
                        <Icon
                            title={'Development'}
                            icon={'bug'}
                            texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka bhxabjdjkcksa dajsdnnfksd ffhghhjhbkdxdfx bnhhfssaeeessee'}
                            color={'red'}
                        />
                    </MDBCol>
                    <MDBCol md="4">
                        <Icon
                            title={'Branding'}
                            icon={'chalkboard-teacher'}
                            texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka bhxabjdjkcksa dajsdnnfksd ffhghhjhbkdxdfx bnhhfssaeeessee'}
                            color={'yellow'}
                        />
                    </MDBCol>
                    <MDBCol md="4">
                        <Icon
                            title={'Photografic'}
                            icon={'award'}
                            texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka bhxabjdjkcksa dajsdnnfksd ffhghhjhbkdxdfx bnhhfssaeeessee'}
                            color={'aqua'}
                        />
                    </MDBCol>
                </MDBRow>
            </div>
        </GridIconStyled>

    );
}


export default GridIcon;