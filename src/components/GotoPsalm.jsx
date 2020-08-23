import React, { useState } from "react";
import psalms from "../globalvars/psalms";


/*
    GotoPsalm
    ----------
    Loads Psalm Search Form by number
    TODO: Make it look more appealing
*/
function GotoPsalm(props) {

    const [searchingPsalm, setSearchingPsalm] = useState("15");
    const [filteredPsalms, setFilteredPsalms] = useState([...psalms]);
    function searchPsalmHandleChange(event) {
        const changedValue = event.target.value;
        setSearchingPsalm(changedValue);
        setFilteredPsalms(filterToNewArrayByString(psalms, changedValue));
    }
    function searchPsalmHandleClick(event) {
        event.preventDefault();
        const psalmRoute = ("/psalm/" + searchingPsalm);
        window.location.href = psalmRoute;
    }

    function filterToNewArrayByString(unfilteredArray, checkString) {
        let filteredArray = [];
        for(let i = 0; i < unfilteredArray.length; i++) {
            if(unfilteredArray[i].title.toLowerCase().includes(checkString.toLowerCase())) {
                filteredArray.push(unfilteredArray[i]);
            }else { //Check for verses
                for(let j = 0; j < unfilteredArray[i].verses.length; j++) {
                    if(unfilteredArray[i].verses[j].toLowerCase().includes(checkString.toLowerCase())) {
                        filteredArray.push(unfilteredArray[i]);
                        break;
                    }
                }
            }
        }

        return filteredArray;
    }

    return(
        <div className="container" style={{marginTop: "40px"}} key="ContainerKey">
            <form key="formKey">
            <div className="form-group" key="inputGroup">
                <h3>Search Psalm</h3>
                <input type="text" 
                    key="inputText"
                    name="searchInput"
                    className="form-control" 
                    onChange={searchPsalmHandleChange} 
                    value={searchingPsalm}
                />
            </div>
                <button type="submit" className="btn btn-primary" onClick={searchPsalmHandleClick}>Search</button>
            </form>

            <ul style={{marginTop: "40px"}}>
                {filteredPsalms.map(x => {
                    return (<li><a href={"/psalm/"+x.id}>{x.title}</a><a className="text-secondary">{" " + x.verses[0].substring(3, 24) + "..."}</a></li>);
                })}
            </ul>
        </div>
    );
}

export default GotoPsalm;