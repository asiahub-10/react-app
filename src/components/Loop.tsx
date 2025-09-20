import Data from "../data.json";

function Loop(){
    // console.log(Users);
    return(
        <>
            <div>
                <h1>Loop</h1>
            </div>
            {/* {console.log(Data)} */}
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Round</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // Data.map((item)=>{
                        //     console.log(item);
                        //     return(
                        //         <tr key={item.id}>
                        //             <th>{item.id}</th>
                        //             <td>{item.name}</td>
                        //             <td>{item.round}</td>
                        //             <td>{item.email}</td>
                        //         </tr>
                        //     )
                        // })
                        Data.map((item)=>
                            <tr key={item.id}>
                               <th>{item.id}</th>
                               <td>{item.name}</td>
                               <td>{item.round}</td>
                               <td>{item.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Loop;