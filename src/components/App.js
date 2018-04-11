import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './App.css';
import pic from './images/pretty.jpg';
import places from './destinations';
import guides from './guide'

function loopPlaces(){

  let placeArray = Object.values(places.places);
  console.log(placeArray);

      const placeList = placeArray.map((place,index) =>
      <li key={index}>{place}</li>

    );
  return placeList;
}

function grabGuides(){
  let guideArray = Object.values(guides.guides);
  console.log("guideArray",guideArray);
  const guideList = guideArray.map((guide,index) =>
  <div className="guide-item" key={index}><b>{guide.title}</b><br></br>${guide.price}<br></br><i>{guide.type}</i></div>

)
console.log(guideList)
return guideList
}


let placeList = loopPlaces();
let guideList = grabGuides();
 

// grabGuides();
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Westworld Travel" />
        <Body pic={pic} guideList = {guideList} />
        <Footer placeList = {placeList} />
        </div>

     );
  }
}


export default App;
