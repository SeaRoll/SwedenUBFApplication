import React from "react";
import psalms from "../globalvars/psalms";

/*
    PSALM PAGE
    ----------
    Find the index by finding the psalm number
    then loads the psalm title and verses.
*/
function Psalm(props) {
    let indexOfPsalm = psalms.findIndex(function(obj){return obj.id == props.selectPsalm});

    if(typeof psalms[indexOfPsalm] == 'undefined') {
        window.location.href = "/psalm";
        return("back to search");
    }

    return(
        <div className="container">
        <h1 key={props.selectPsalm}>{psalms[indexOfPsalm].title}</h1>
        {psalms[indexOfPsalm].verses.map(function(x) { 
            return (
                <div>
                {(x.split('\n').map(function (x) {return <p style={{fontSize: props.paragraphSize}}>{x}</p>;}))}
                <br />
                <br />
                </div>
            );
        })}
        </div>
    );
}

export default Psalm;