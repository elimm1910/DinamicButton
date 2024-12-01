import React from 'react';
import styled from 'styled-components'
//componentes
import Loading from './Loading.jsx'
import GridIcon from './GridIcon.jsx'
import ListHorizontalCard from './ListHorizontalCard.jsx'
import Footer from './Footer.jsx'

const HomeStyled = styled.div`
  ${'' /* background:blue; */}
`

function Home() {
  return (
    <HomeStyled>
      <div>
        <div className='mb-5'>
          <Loading />
        </div>
        <div className='mb-5 mx-auto'>
          <GridIcon />
        </div>
        <div className='mx-auto'>
          <ListHorizontalCard />
        </div>
        <div className='mx-auto'>
          <Footer />
        </div>
      </div>
    </HomeStyled>
  );
}


export default Home;