// useEffect is a React Hook used to perform side effects in a component.

// Side effects mean:

// Fetching data from API

// Updating document title

// Running code after render

// Setting timers

import { useEffect , useState } from "react";

function Exampleffect(){
    useEffect( () =>{
        console.log("Running")
    } ,[]) 

    return(
        <h1>UseEffect Component Loaded</h1>
    )
}

export default Exampleffect

   

export function MyCounter(){
    const [count , setCount] = useState(0);
    
    useEffect(() => {
        console.log("Running")
    }, [count])
 

    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>
            Counter Increase
        </button>
        
        </>
    )

}