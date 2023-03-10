import React, {useState} from "react";
import Student from "./Student";

function App() {
    const [name,setName]=useState("Vrushali")
    return (
        <div className="App">
            <center>
                <h1>Props in React !</h1>
                <Student name={name}/>
                <button onClick={()=>{setName("Priti")}}>Update Name</button>
            </center>
        </div>
    );
}
export default App;