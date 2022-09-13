import React from 'react'
import  NotificationImportant  from '../../../node_modules/@material-ui/icons/NotificationImportant'
import Chat from '../../../node_modules/@material-ui/icons/Chat'
import Apps from '../../../node_modules/@material-ui/icons/Apps'
import { Flag, Queue, ScreenLockRotationOutlined, Settings } from '@material-ui/icons'
const Navbar = () => {
  return (
   <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid" style={{display:"flex"}}>
    <a class="navbar-brand" href="#" style={{flex:"1"}}>Zoko</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mx-2">
            <Queue/>
          <a class="nav-link " aria-current="page" href="#" style={{display:"inline"}}>Queue</a>
        </li>
        <li class="nav-item mx-2" >
            <Chat />
          <a class="nav-link" href="#" style={{display:"inline"}}>Chat</a>
        </li>
        
        <li class="nav-item mx-2">
            <Apps/>
          <a class="nav-link " href="#"style={{display:"inline"}}>Apps</a>
        </li>
        <li class="nav-item mx-2">
           <ScreenLockRotationOutlined/>
          <a class="nav-link " href="#"style={{display:"inline"}}>Rules</a>
        </li>
        <li class="nav-item mx-2">
            <Flag/>
          <a class="nav-link " href="#"style={{display:"inline"}}>Flows</a>
        </li>
        <li class="nav-item mx-2">
            <Settings/>
          <a class="nav-link " href="#"style={{display:"inline"}}>Setting</a>
        </li>
      </ul>
      
        <div className='notification mx-4'>
            <NotificationImportant/>
        </div>
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Significant
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
