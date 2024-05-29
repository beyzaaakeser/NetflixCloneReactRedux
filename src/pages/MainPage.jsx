import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { useDispatch } from 'react-redux'
import { getPopular } from '../redux/actions/movieActions'

const MainPage = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPopular());
  },[])
  return (
    <div>
      <Hero/>

    </div>
  )
}

export default MainPage