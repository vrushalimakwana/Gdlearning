function Student(props)
{
    console.log(props)
    return(
        <center>
            <div style={{backgroundColor:"lightblue",margin:10}}>
                <h1>Hello {props.name}</h1>
                {/*<h2>Email {props.email}</h2>*/}
            </div>
        </center>
    )
}
export default Student;