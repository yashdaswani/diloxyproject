import { AccountCircle, Search } from '@material-ui/icons'
import React from 'react'
import "./Leftcont.css"
const LeftCont = () => {
  return (
    <div className='leftcont1'>
      <div >View AS</div>
      <div class="dropdown">
  <div class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    John Doe
  </div>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping"><Search/></span>
  <input type="text" class="form-control" placeholder="Search..." aria-label="Username" aria-describedby="addon-wrapping"/>
</div>

<div className='leftcontopt my-2'>
    <ul className='leftcontoptul' style={{display:"flex"}}>
        <li style={{flex:"0.3"}}>All</li>
        <li style={{flex:"0.5"}}>Unread</li>
        <li style={{flex:"0.5"}}>Unreplied</li>
    </ul>
<hr/>
</div>
<div class="accordion" id="accordionExample " >
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Team Messages
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
        <div className='accordion-body' style={{height:"4rem"}}>
       
        <div className="mssgsender">
         <AccountCircle/>
            <h5 className='mx-4'  style={{display:"inline"}}>Jesus</h5>
        </div>
        <div className='mssgtext mx-5'>
            <p>Hi,How are you?</p>
        </div>
       
      
      </div>
    </div>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
        <div className='accordion-body'  style={{height:"5rem"}}>
       
        <div className="mssgsender">
         <AccountCircle/>
            <h5 className='mx-4'  style={{display:"inline"}}>Jesus</h5>
        </div>
        <div className='mssgtext mx-5'>
            <p>Hi,How are you?</p>
        </div>
       
      
      </div>
    </div>
  </div>
  
  </div><div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Team Chats
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className='accordion-body'style={{height:"4rem"}}>
       
        <div className="mssgsender">
         <AccountCircle/>
            <h5 className='mx-4'  style={{display:"inline"}}>Jesus</h5>
        </div>
        <div className='mssgtext mx-5'>
            <p>Hi,How are you?</p>
        </div>
      </div>
    </div>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
        <div className='accordion-body'style={{height:"4rem"}}>
       
        <div className="mssgsender">
         <AccountCircle/>
            <h5 className='mx-4'  style={{display:"inline"}}>Jesus</h5>
        </div>
        <div className='mssgtext mx-5'>
            <p>Hi,How are you?</p>
        </div>
      </div>
    </div>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
        <div className='accordion-body'style={{height:"5rem"}}>
       
        <div className="mssgsender">
         <AccountCircle/>
            <h5 className='mx-4'  style={{display:"inline"}}>Jesus</h5>
        </div>
        <div className='mssgtext mx-5'>
            <p>Hi,How are you?</p>
        </div>
      </div>
    </div>
    
  </div>
  
  </div>
</div>
    
  )
}

export default LeftCont
