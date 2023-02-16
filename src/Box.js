import React, {useState} from "react";

function Box() {
    const [data,setData]=useState(null)
    const [print,setPrint]=useState(false)
    function getData(value)
    {
        console.warn(value.target.value)
        setData(value.target.value)
        setPrint(false)
    }
    return (
        <div className="Box">
            {
                print?
                    <h1> {data} </h1>
                    :null
            }
            <input type="text" onChange={getData} />
            <button onClick={()=>setPrint(true)}>Print Data</button>
        </div>
    );
}

export default Box;