import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Tabbar from "./Tabbar";

import Psalm from "./Psalm";
import Home from "./Home";
import GotoPsalm from "./GotoPsalm";

function App() {

    // ----------- Global state variables -------------------------//
    const [paragraphFontSize, setParagraphFontSize] = useState(22);
    function updateParagraphFontSize(incrementValue) {
        setParagraphFontSize(paragraphFontSize + incrementValue);
    }

    // ----------- Route Parameter Load content -------------------//
    const LoadPsalm = ({ match, location }) => {
        const {
          params: { psalmId }
        } = match;
      
        return (<Psalm paragraphSize={paragraphFontSize} selectPsalm={psalmId}/>);
    };

    // ----------- Application Router Renderer -------------------//
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/psalm" component={() => {return <GotoPsalm />;}} />
                    <Route exact path="/psalm/:psalmId" component={LoadPsalm} />
                </Switch>
                <Tabbar updateParagraph={updateParagraphFontSize} />
            </Router>
        </div>
    );
}

export default App;