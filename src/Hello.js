import {useState} from "react";

function Hello(){
    const [data,setData]=useState(0)
    function updateData()
    {
        setData(data+1)
    }
    console.warn("______________");
    // let data="Vrushali Makwana";
    // function Apple()
    // {
    //     //function called
    //     data="welcome";
    //     alert(data);
    // }
    return (
        <div className="Hello">
            <center>
            <h1>{data}</h1>
            {/*<User/>*/}

            {/*    {Apple()}*/}
            {/*   <User3/>*/}
                <button onClick={updateData}>updateData</button>
            </center>
        </div>
    );
}

export default Hello;