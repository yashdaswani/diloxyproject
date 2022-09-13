import { MoreVert, Search } from '@material-ui/icons'
import React from 'react'

const Middlecontnav = () => {
  return (
    <div className='Middlecontnav'>
      <div className='wrappermiddle d-flex justify-content-between' style={{width:"100%"}}>
        <div className='firstmiddle mx-3'>
      <div className='nameonlinecont'>
      <div className='name'>Joana Matiana</div>
      <div className='onlinestatus'></div>
      </div>

      <div className='values d-flex  flex-row'>
        <div className='blue jacket '>Blue Jackets</div>
        <div className='returning mx-2'>Returning</div>
        <div className='pending mx-2' >Pending</div>
      </div>
      </div>
      <div className='secondmiddle d-flex justify-content-center align-items-center flex-row'>
        <div className='assignto'>Assign to:</div>
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sales
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <Search/>
        <MoreVert/>
      </div>
      </div>
    </div>
  )
}

export default Middlecontnav
