import Page from "../Page";
import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

 export default function AversiMap() {
  let defaultProps = {
    center: {lat: 40.73, lng: -73.93}, 
    zoom: 12
 }

    return (
      <Page>
        <div style={{width: "100%", height: "100%", margin: "0px", padding: "0px", position: "absolute"}}>
        <GoogleMapReact 
          defaultCenter={defaultProps.center}
          center={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        />
</div>
        

        </Page>
    );
  
}