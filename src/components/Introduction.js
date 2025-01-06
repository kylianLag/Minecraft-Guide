import React from "react";

function Introduction(props){
    return(
        <section className="Introduction">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </section>
    );
}
export default Introduction;