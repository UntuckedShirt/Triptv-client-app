// using a Link component will replace any need for an anchor tag in the app
// when we usea Link tag we do not make use of href. We instead call to=
// when you click link you are not reloading appliatoin and no additional
// request are being made. When you make use of the Link tag you are not dunmping 
// components. This is a true SPA(Single PAge Applicaiton)

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Page1 = () => {
    return (
        <div> Page one
            <Link to="/page2"> Navigate to page two</Link>
        </div>
    )
}

// when the broswers receives that .html file itll take the curent html document
// and remove is from the screen and sdump all the JS code and data and variables from
// insdie your applicationg. Thats why anchor tags are not used insde the applicatoin
// using an anchor tag inside app and click on one you are making a brand 
// new request to some outside server to an html request
// we dont want to use a anchor tag in our react dom applications

const Page2 = () => {
    return (
        <div> 
            Page two
            <button> 
                Click me 
            </button>
            <Link to="/"> Navigate to page one</Link>
        </div>
    )
}

// this route property is used whterh or not to show the given route ocmponent on the screen
// the last prop on component given url the user is visitin itll give page 1 or page 2
// in a react router app different routes can be matched by the same URL
// the rule that we was to show an exact path would be extractedPath.contains(path
// that is not an exact code that react router internally runs but works 95% of the time
// to figure out whats going on the contains method will see if it contain extractedpAth
// in order o overide this behaivior we can optionally add on exact
// we we type a key into a jsx tag its equal to say ={true}
// when you add a prop name of exact it allows reac router to change
// everytime you list out justa property name 
// ---------------------------------------------------------------//

// React router has three different routers available for use
//the only diff between them is the part ofthe URL they are going to look at
// when decding wht content toshow on screen
// deploying with broswerrouter can be challenging but also easy becaue its most common
// Hash

const App = () => {
    return(
        <div> 
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Page1} />
                    <Route path="/page2" component={Page2} />
                </div>
            </BrowserRouter>
         </div>
    )
}

export default App;