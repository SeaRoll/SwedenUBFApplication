import React from "react";

function listChapter(props) {
    let indexOfBible = props.bible2000.findIndex(function(obj){return obj.id == props.bibleId});

    return(
        <div className="container" style={{marginTop: "40px", marginBottom: "80px"}}>
            <h1>{props.bible2000[indexOfBible].title}</h1>
            <ul>
            {props.bible2000[indexOfBible].chapterText.map((x, index) => {
                return (<li><a href={"/bible/" + props.bible2000[indexOfBible].id + "/"+index}>{"Chapter " + (index+1)}</a></li>);
            })}
            </ul>
        </div>
    );
}

export default listChapter;