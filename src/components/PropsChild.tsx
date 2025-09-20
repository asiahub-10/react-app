// function PropsChild(props:any) {
//     return (
//         <div className="card">
//             <h5 className="card-header">{props.name}</h5>
//             <div className="card-body">
//                 <h6>Email: {props.email}</h6>
//                 <h6>Round: {props.round}</h6>
//             </div>
//         </div>
//     )
// }

interface Users {
  name?: string;
  email?: string;
  round?: number;
}
function PropsChild({name="IsDB Trainee", email="Not Found", round=65}:Users) {
    return (
        <div className="card">
            <h5 className="card-header">{name}</h5>
            <div className="card-body">
                <h6>Email: {email}</h6>
                <h6>Round: {round}</h6>
            </div>
        </div>
    )
}

export default PropsChild