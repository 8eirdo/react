import { useState } from "react";
import { useEffect } from "react";

export default function Dirasas (){
    const [data,setData] = useState({})
    const [name,setName]=useState()  
    const [age,setAge]=useState()
    const [lastname,setLastname]=useState() 
    
    useEffect(()=>{

    },[data])
    const handleChange = (e) =>
    {`hello ${name} ${lastname} your age is ${age}`}

    return (
    <div>
        <form >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <br />
        <label htmlFor="lastname">LastName</label>
        <input type="text" id="lastname" />
        <label htmlFor="Age">age</label>
        <input type="number" id="Age" />
        <br />
            <button type="submit" onClick={handleChange}>Submit</button>
    </form>
    </div>
    );
}