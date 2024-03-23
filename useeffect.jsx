// what useEfect does ? 
import React, { useState } from "react";
import { useEffect } from "react";


function Use(){

    const [data,setData]=useState({})

    function Show(){
        return
    }

    return(
        <form onSubmit={Show()} action="">
            <div>
                <label htmlFor="" id="name">Name</label>
                <input type="text" id="name"/>
            </div>
            <div>
                <label htmlFor="">LastName</label>
                <input type="text" />

            </div>
            <div>
                <label htmlFor="">Age</label>
                <input type="Number" />

            </div>
            <div>
                <button type="submit" onClick={Show()}>Submit</button>
            </div>
        </form>
    )
}

export default Use;