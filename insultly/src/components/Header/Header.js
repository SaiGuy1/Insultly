import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import WalkThrough from '../WalkThrough/WalkThrough'

class Header extends Component {
  render() {
    return(
      <>
       {/* <WalkThrough /> */}
       <nav class="navbar-main navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img src="https://i.ibb.co/4120gzv/053-Cursing-emoji-swearing-swear-frown-emoticon-512.png" width="80" height="80" class="logo d-inline-block align-top" alt="" />
           Insultly
        </a>
      </nav>
      <nav class="navbar navbar-dark bg-dark">
      </nav>
      <nav class="navbar-secondary navbar-expand-lg navbar-light text-light bg-dark">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link text-white" href="#">Login</a>
            <a class="nav-item nav-link text-light" href="#">SignUp</a>
            <a class="nav-item nav-link text-light" href="#">Create Tasks</a>
          </div>
        </div>
      </nav>
      </>
    )
  }
}

export default Header;
