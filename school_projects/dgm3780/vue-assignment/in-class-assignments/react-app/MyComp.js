import React from "react"

export default function MyFirstComponent(props) {

    console.log(props.listOfNames);
    const listOfNames = props.listOfNames.names.map((name) => {
            return <p>{name}</p>
    });
    return <div></div>;
}