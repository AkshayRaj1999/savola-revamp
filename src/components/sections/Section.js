import React from 'react'
import Banner from './banner/Banner'
import AboutUs from './about-us/AboutUs'
import Content from './content-presentation/Content'
import Principels from './principels/Principels'
import Share from './share/Share'
import RecentNews from './recent-news/RecentNews'

function Section() {
  return (
    <>
    <Banner/>
    <AboutUs/>
    <Content/>
    <Principels/>
    <Share/>
    <RecentNews/>
    </>
  )
}

export default Section