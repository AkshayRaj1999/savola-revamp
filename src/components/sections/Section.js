import React from 'react'
import Banner from './banner/Banner'
import AboutUs from './about-us/AboutUs'
import Content from './content-presentation/Content'
import Principels from './principels/Principels'
import Share from './share/Share'
import RecentNews from './recent-news/RecentNews'
import Investment from './investment/Investment'
import Parallax from './parallax/Parallax'

function Section() {
  return (
    <>
    <Banner/>
    <AboutUs/>
    <Content/>
    <Principels/>
    <Investment/>
    <Share/>
    <RecentNews/>
    <Parallax/>
    </>
  )
}

export default Section