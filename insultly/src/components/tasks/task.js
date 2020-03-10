import React, { Component } from 'react';
import './task.css';
import { Button } from 'react-bootstrap'
import Maps from '../map/map'




class Task extends Component {


  render() {
    return(
      <>
      <div class="task card text-white bg-dark mt-3 ml-auto mr-4 mb-3" >
        <div class="card-header"><h1>Do Laundry</h1></div>
              {/*<div class="alert alert-danger alert-dismissible fade show " role="alert">
                <strong>Task Failed!!</strong> Your birth certificate is an apology letter from the condom factory.
              </div>*/}
        <div class="row">
            <div class="col-lg">
              <Maps />
            </div>
            <div class="col-lg-7">
              <div class="card-body">
                <h1 class="card-title">Time Left: 30s</h1>
                <p class="card-text"></p>
              </div>
          </div>
        </div>

        <div class="card-footer text-muted">
          Created: 2 days ago
        </div>
      </div>
      </>
    )
  }
}

export default Task;
