//State with Function
import React,{Component} from "react";
class Hello extends Component {

    constructor() {
        super();
        this.state={
            data:1
        }
    }
    apple()
    {
        this.setState({data:this.state.data+1})
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