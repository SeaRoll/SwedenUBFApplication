import React from "react";

function showVerse(props) {
    let indexOfBible = props.bible2000.findIndex(function(obj){return obj.id == props.bibleId});
    let chapterId = Number(props.chapterId) + 1;

    return(
        <div className="container" style={{marginTop: "40px", marginBottom: "80px"}}>
            <h1>{props.bible2000[indexOfBible].title} {chapterId}</h1>
            <p style={{fontSize: props.paragraphSize}}>{props.bible2000[indexOfBible].chapterText[props.chapterId]}</p>
        </div>
    );
}

export default showVerse;