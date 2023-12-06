'use client';
import React from 'react'

import HomeTitle from '@/components/pageComponents/hometitle';

//potentially having this component as position absolute

const Home = () => {

  return (
    <div className="h-[100vh] w-[100vw] relative">
      <div className="">
        <HomeTitle/>
      </div>
    </div>
  )
}

export default Home;