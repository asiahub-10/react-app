import PropsChild from "./PropsChild";
import Data from "../data.json";

function PropsPage() {
    const user1 = { name: "Tanjila", email:"tanjila@com", round:65 }
    // const user2 = { name: "Aurpa", email:"aurpa@com", round:64 }

    return (
        <div className="container">
            <h1>PropsPage</h1>
            <div className="row g-3">
                <div className="col-auto">
                    {/* <PropsChild name="Tanjila" email="tanjila@com" round={65} /> */}
                    <PropsChild {...user1} />
                </div>
                <div className="col-auto">
                    <PropsChild email="aurpa123456789@com" name="Aurpa" />
                    {/* <PropsChild {...user2} /> */}
                </div>
            </div>
            <h3>Loop</h3>
            <div className="row g-3">
                {
                   Data.map((item)=>
                    <div key={item.id} className="col-lg-4">
                        {/* <PropsChild {...item} /> */}
                        <PropsChild name={item.name} email={item.email} round={item.round} />                        
                    </div>
                    ) 
                }
            </div>
        </div>
    )
}

export default PropsPage;