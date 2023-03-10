//State with Function
import React from "react";
import User4 from "./User4";
class Hello extends React.Component {

    constructor() {
        super();
        this.state={
            data:"Vrushali"
        }
    }
    apple()
    {
        this.setState({data:"Welcome"})
    }
    render()
    {
        return (
            <center>
                <div className="hello">
                    <h1>{this.state.data}</h1>
                    <button onClick={()=>this.apple()}>Update Data</button>
                </div>
            </center>

        );
    }
}
export default Hello;