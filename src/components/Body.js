import React from 'react';
import guides from './guide'
// import prettyPicture from './images/pretty.png';


function Body(props){
    return (
        <div id="App-body">
        <img src={props.pic} className="main-pic" alt="pretty" />
        <h2>Available Guides</h2>
        <div id="guide-list">
        {props.guideList}
        </div>

      </div>
    )

}

export default Body;