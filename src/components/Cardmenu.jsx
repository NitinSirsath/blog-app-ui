import React from 'react'
import './cardmenu.css'

const Cardmenu = () => {
  return (
    <>
    <div className='container border_menu'>
    <nav class="navbar cardmenu_nav navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">All post(32)</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Articles</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Event</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link " href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Education
        </a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Job</a>
      </li>
    </ul>
  </div>
  <div>
  <button type="button" class="btn cardmenu_btn btn-secondary">Write a Post &#x21e9; </button>
  <button type="button" class="btn cardmenu_btn btn-primary"><img className='join_png' src="https://cdn-icons-png.flaticon.com/512/456/456249.png" style={{height:15}} alt="" />Join Group</button>

  </div>
</nav>
    </div>
    </>
  )
}

export default Cardmenu