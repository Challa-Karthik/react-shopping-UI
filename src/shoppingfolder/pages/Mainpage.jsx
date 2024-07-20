

import React, {useState} from 'react'
import Banner from '../components/Banner'
import Collections from '../components/Collections'

import Footer from '../components/Footer'
import Header from '../components/Header'

import {Gents} from '../data'
import Womencollection from '../components/Womencollection'

const Mainpage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents)
  console.log(Gents)
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion = {gentsFashion} />
      <Womencollection />
      <Footer />
    </div>
  )
}

export default Mainpage
