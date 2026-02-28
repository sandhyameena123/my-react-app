

import Counter ,{ CounterMessage} from "./components/Counter";
import UserList from "./components/UserList";
import UserCount ,{MyForm} from "./components/UserCount";
import Exampleffect, {MyCounter} from "./components/UseEffect";
import {My_Weather} from  "./weatherapp/Weather" ;

 function App() {
  return (
    <>
    < My_Weather />
    {/* <h1 className="text-4xl font-bold text-green-600">
       My React Vite App</h1>
         
      <Counter />
      <CounterMessage />

      <UserList />

      <UserCount />
       <MyForm />
       <Exampleffect />
       <MyCounter /> */}
    </>
  );
}

export default App;