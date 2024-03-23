import React from "react"
import { useState } from "react"

function Counter() {

    const [count, setcount] = useState(0)
    
    function discount() {
        setcount(count - 1);
        // ten()
        // tsbih()
        // dikr()
    }
    function plusCount() {
        setcount(count + 1);
        // ten()
        // tsbih()
        // dikr()
        
    }
    const [msg, setmsg] = useState("its tsbih time ...say hmdoullah/clikc on plus")
    
    function dikr() {
        if (count <= 32) {
            setmsg(` ٱلْحَمْدُ لِلَّٰهِ ${count + 1}`)
            
        } else if (count <= 65) {
            setmsg(` أسْتَغْفِرُ ٱللَّٰهَ ${count - 32}` )

        } else if (count <=98) {
            setmsg(` ٱللَّٰهُ أكبر ${count - 65}`)

        } else if (count <= 99) {
            mya()
            setmsg("SNDID!! now say الشَّهَادَةُ and click plus if you wanna start again")
            setcount(0)
        } 
        // else if (count === 101) {
        //     mya() }
    }

    /*function tsbih(){
        if(count === 33)
        {document.addEventListener(`you said hmdoullah 33 times now say SubhanaLah`)}
        if (count === 66)
        {alert(`you said SubhanaLah 33 times now say Allaho Akbar 33 time `)}
        if(count === 99)
        {alert(`you said Allaho akbar 33 times now say shahada`)}
        
    }*/

    /*chatGbt
    let phase = 0; // 0 for الْحَمْدُ لِلَّٰهِ, 1 for أسْتَغْفِرُ ٱللَّٰهَ, 2 for ٱللَّٰهُ أكبر

function dikr() {
    if (count <= 32) {
        setmsg(`ٱلْحَمْدُ لِلَّٰهِ ${count + 1}`);
    } else if (count <= 65) {
        setmsg(`أسْتَغْفِرُ ٱللَّٰهَ ${count - 32}`);
    } else if (count <= 98) {
        setmsg(`ٱللَّٰهُ أكبر ${count - 65}`);
    } else if (count === 99) {
        mya();
        setmsg("SNDID!! now say الشَّهَادَةُ and click plus if you wanna start again");
        phase = 0;
        setcount(0); // Reset count to 0
    }

    if ((count + 1) % 33 === 0) {
        setcount(0); // Reset count to 0 after reaching 33
        phase = (phase + 1) % 3; // Update the phase
    }

    // Update message based on the current phase
    switch (phase) {
        case 0:
            setmsg(`ٱلْحَمْدُ لِلَّٰهِ ${count + 1}`);
            break;
        case 1:
            setmsg(`أسْتَغْفِرُ ٱللَّٰهَ ${count + 1 - 33}`);
            break;
        case 2:
            setmsg(`ٱللَّٰهُ أكبر ${count + 1 - 66}`);
            break;
        default:
            setmsg("Unknown phase");
            break;
    }
}
*/

    function mya() {
        if (count === 101 || count === -101) { setcount(0) }
    }

    function discount() {
        setcount(count - 1);
        // ten()
        // tsbih()
        dikr()
    }
    function plusCount() {
        setcount(count + 1);
        // ten()
        // tsbih()
        dikr()

    }
    /*
    function ten(){
        if (count === 10 || count === -10)
        {setcount(0)}
    }*/

    return (

        <>
            <button onClick={discount}>-</button>
            <span>{count}</span>
            <button onClick={plusCount}>+</button>
            <p>{msg} </p>

        </>
    )
}


export default Counter;