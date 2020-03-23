import React from "react";
import "./styles.css";
import MyComp from "./MyComp";

const name = {
    name: [
        "landon",
        "tyler",
        "kelly"
    ]
};

// JSX is what interprets javascript expressions & functions in the DOM
// JSX requires you to use camel case variables (more JS than HTML)
export default function App(props) {
    return (
        <div className="App">
            <p>Hello World { 3 + 3 }</p>
            <MyComp name="Kelly"/>
            <ListItem name="Kelly"/>
        </div>
    );
}


