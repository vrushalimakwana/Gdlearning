import React from "react";

function App1() {
    const [status,setStatus]=React.useState(true)
    return (
        <div className="App1">
            {
                status? <h1><center>hello world!</center></h1>:null
            }
            <center>
                {/*h1>Hello World!</h1>*/}
                {/*<button onClick={()=>setStatus(false)}>Hide</button>*/}
                {/*<button onClick={()=>setStatus(true)}>Show</button>*/}
                <button onClick={()=>setStatus(!status)}>Toggle</button>

            </center>
        </div>
    );
}

export default App1;