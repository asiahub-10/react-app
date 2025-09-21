import { useParams } from "react-router-dom"
import Data from "../data.json";

function UserProfile() {
    let params = useParams<{id: string}>();
    // console.log(params);
    // console.log(Data);
    const user = Data.find((item)=> item.id === Number(params.id));
    // console.log(user);

  return (
    <>
        <h1>User Profile {params.id}</h1>
        <div><b>Name:</b> {user?.name}</div>
        <div><b>Email:</b> {user?.email}</div>
        <div><b>Round:</b> {user?.round}</div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis blanditiis dolore beatae consequatur sint corrupti quod consequuntur dolorem. Facilis exercitationem molestiae hic quo doloremque modi nostrum ratione explicabo in aliquam?</p>
    </>
  )
}

export default UserProfile