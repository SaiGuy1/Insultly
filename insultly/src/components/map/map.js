import React, { Component } from 'react';
import { Map, GoogleApiWrapper, withScriptjs, withGoogleMap, GoogleMap,Marker } from 'google-maps-react';
import './map.css';


const mapStyles = {
  width: '100%',
  height: '100%'
};


export class Maps extends Component {

        state = {
         showingInfoWindow: false,  //Hides or the shows the infoWindow
         activeMarker: {},          //Shows the active marker upon click
         selectedPlace: {},
         center: {lat: 37.78, lng: -122.44},
         zoom: 13.5,
          zoomControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,          //Shows the infoWindow to the selected place upon a marker
       };

      render(){
        return(
          <div class="mappy" style={{overflow: 'hidden'}}>
            <Map
              google={this.props.google}
              zoom={14}
              streetViewControl={false}
              streetViewControl={false}
              fullscreenControl={false}
              mapTypeControl={false}
              style={mapStyles}
              initialCenter={{
               lat: this.state.center.lat,
               lng: this.state.center.lng
              }}
            />
          </div>
          )
      }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQ_uZXf5Bpk1f82rsNW9FToHQoZTDoy2U'
})(Maps);
