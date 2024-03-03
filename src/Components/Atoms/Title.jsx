import React from "react";
import './Title.css'

function Title ({className, value}){
    return (
        <div>
            <h1 className={className}> {value} </h1>
        </div>
    );
}

export default Title;