import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './App.css';
import pic from './images/pretty.jpg';
import places from './destinations.js';

function loopPlaces(){

  let placeArray = Object.values(places.places);
  console.log(placeArray);

      const placeList = placeArray.map((place,index) =>
      <li key={index}>{place}</li>
    );
      // console.log("currentPlace",currentPlace)

  

  // }
  console.log("placeList",placeList)
  return placeList;
}
  let placeList = loopPlaces();
 


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Wide World Travel" />
        <Body pic={pic} />
        <Footer placeList = {placeList} />
        </div>

     );
  }
}


export default App;
