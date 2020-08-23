import React, { useState } from "react";
// eslint-disable-next-line
import { Link, BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Tabbar from "./Tabbar";

import Psalm from "./Psalm";
import Home from "./Home";
import GotoPsalm from "./GotoPsalm";
import ListBible from "./bible/listBible";
import ListChapter from "./bible/listChapter";
import ShowVerse from "./bible/showVerse";

import bible2000 from "../globalvars/bible2000";

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
    const LoadChapter = ({ match, location }) => {
        const {
          params: { bibleId }
        } = match;
      
        return (<ListChapter bibleId={bibleId} bible2000={bible2000}/>);
    };
    const LoadVerses = ({ match, location }) => {
        const {
          params: { bibleId, chapterId}
        } = match;
      
        return (<ShowVerse paragraphSize={paragraphFontSize} bibleId={bibleId} chapterId={chapterId} bible2000={bible2000}/>);
    };

    // ----------- Application Router Renderer -------------------//
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bible" component={() => {return <ListBible bible2000={bible2000}/>;}} />
                    <Route exact path="/psalm" component={() => {return <GotoPsalm />;}} />
                    <Route exact path="/psalm/:psalmId" component={LoadPsalm} />
                    <Route exact path="/bible/:bibleId" component={LoadChapter} />
                    <Route exact path="/bible/:bibleId/:chapterId" component={LoadVerses} />
                </Switch>
                <Tabbar updateParagraph={updateParagraphFontSize} />
            </Router>
        </div>
    );
}

export default App;