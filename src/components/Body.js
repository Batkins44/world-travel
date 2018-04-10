import React from 'react';
// import prettyPicture from './images/pretty.png';


function Body(props){
    return (
        <div className="App-body">
        <img src={props.pic} className="main-pic" alt="pretty" />
      </div>
    )

}

export default Body;