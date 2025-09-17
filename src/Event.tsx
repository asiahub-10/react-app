function Event(){
    // function handelClick(){
    //     alert("Hello")
    // }
    const handelClick = () => {
        alert("Hello");
    }
    return (
        <>
            <h1>Event</h1>
            {/* <button onClick={() => alert("Hello")}>Click</button> */}
            <button onClick={handelClick}>Click</button>
        </>
    )
}
export default Event;