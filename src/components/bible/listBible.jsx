import React from "react";

function listBible(props) {
    return(
        <div className="container" style={{marginTop: "40px", marginBottom: "80px"}}>
            <h1>Bible</h1>
            <ul>
            {props.bible2000.map(x => {
                return (<li><a href={"/bible/" + x.id}>{x.title}</a></li>);
            })}
            </ul>
        </div>
    );
}

export default listBible;