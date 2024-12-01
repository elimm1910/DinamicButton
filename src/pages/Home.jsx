import React from 'react';
import styled from 'styled-components'
//componentes
import Loading from '../components/Loading.jsx'
import GridIcon from '../components/GridIcon.jsx'
import ListHorizontalCard from '../components/ListHorizontalCard.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
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
  );
}


export default Home;