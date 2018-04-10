import React from 'react';
// import places from './destinations';


function Footer(props){

    return (
        <div className="App-footer">
        <ul id="list-dest">
        {props.placeList}
        </ul>
        &copy; Wide World Travel
      </div>
    )

}

export default Footer;