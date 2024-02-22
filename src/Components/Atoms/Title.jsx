import React from "react";
import './Title.css'

function Title ({className, value}){
    return (
        <>
            <h1 className={className}> {value} </h1>
        </>
    );
}

export default Title;