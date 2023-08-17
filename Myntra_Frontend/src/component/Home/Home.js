import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Slideshow from '../Slideshow/SlideShow'
import TrendiestPicks from './TrendiestPicksCard'
import Footer from '../Footer/Footer'
import TrendingMusicComponent from '../music/TrendingMusicComponent '
import { useDispatch, useSelector } from 'react-redux'
import { getAdd } from '../../Redux/clothing/action'
function Home() {
  const dispatch = useDispatch()
            const AllProducts = useSelector((store) => store.products.AllProducts)
            useEffect(() => {
              dispatch(getAdd({ category: 'Mens' }))
          }, []);
  return (
    <div>
        <div className='App'>
        <Slideshow></Slideshow>
        </div>
        <div>
          <TrendiestPicks></TrendiestPicks>
        </div>
        <div>
          <Footer></Footer>
        </div>
        <div>
        <TrendingMusicComponent musicData={AllProducts} />
        </div>
    </div>
  )
}

export default Home