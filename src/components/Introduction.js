import React from "react";

function Introduction(props){
    return(
        <section className="Introduction flex flex-col items-center py-6 shadow-2md mb-5">
            <h1 class = "font-minecraftia text-center font-black">{props.title}</h1>
            <p class = "mt-6">{props.content}</p>
        </section>
    );
}
export default Introduction;