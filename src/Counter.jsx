//useEffect models
import { useEffect, useState } from 'react'

//useEffect Ex:1 counter app
///*
const Counter = () => {
    const [count, setcount] = useState(0)

    useEffect(function () {

        //Eg for know mount,update,unmount
        console.log("Mounted")//Component when mounting it will be shown
        return (function () {
            console.log("Unmount")//when component unmounting this will be shown. another name is cleanup function
        })
    }, [count])//useEffect can take function() is a parameter then {}-function, []-dependency array [count]-when component updating it will be showing updating 
    //end Eg

    const handlecount = () => {
        setcount(count + 1)
    }
    return (
        <>
            <h1 className='head'>{count}</h1>
            <button onClick={handlecount} className='btn'>Add</button>
        </>
    )
}

export default Counter
//*/