import { Link } from "react-router-dom";
import User from "../data.json";
function Users() {
  return (
    <>
        <h1>Users</h1>
        <ul>
            {
                User.map((item)=>
                    <li key={item.id}>
                        <Link to={`/user/${item.id}`}>{item.name}</Link>
                    </li>
                )
            }
        </ul>
    </>
  )
}

export default Users