import React from 'react'
import LeftCont from './Leftcont/LeftCont'
import MiddleCont from './MiddleCont/MiddleCont'
import Navside from './NavSide/Navside'

const Home = () => {
  return (
    <div className='wrapper d-flex justify-content-center align-items-center'>
      <div className='leftcont' style={{width:"22vw"}}>
        <LeftCont/>
      </div>
      <div className='middlecont'style={{width:"70vw"}}>
        <MiddleCont/>
      </div>
      <div className='rightcont'style={{width:"2vw"}}>
        <Navside/>
      </div>
    </div>
  )
}

export default Home
