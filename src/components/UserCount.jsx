
import {useState} from "react";


export default function UserCount() {
  const totalUsers = 3;
  return <h2>Total Users: {totalUsers}</h2>;
}


export function MyForm(){
  const [name , setName] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    alert("Your name is: " + name);
  }


  return(

    <form onSubmit={handleForm}>
    <label>Name
    <input type="text" value={name} onChange={(e) => setName(e.target.value)  } />
    </label>
    <button type="submit">click</button>
    </form>
  
  )
}



// export function MyForm(){
//   const [name , setName] = useState("");

//   const handleForm = (event) => {
//     event.preventDefault();
//     alert("Your name is: " + name);
//   }


// }


