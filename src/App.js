import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './App.css' 

const MapContainer = () => {
  const mapStyles = {
    height: '500px',
    width: '75%',
  };

  const defaultCenter = {
    address: 'Gabès,Tunisia',
    lat:33.862006192071,
    lng: 10.081802179097362,
  };

  return (
    <div align="center" className='all'>
        <h2 align="center">
          Welcome to Our Location
        </h2>

        <LoadScript googleMapsApiKey="AIzaSyCKDw9izIJrR3X4P2BBtw_x-mUfMzfsWD8" >
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={11}
            center={defaultCenter}
          ></GoogleMap>
        </LoadScript>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MapContainer />
    </div>
  );
}

export default App;
