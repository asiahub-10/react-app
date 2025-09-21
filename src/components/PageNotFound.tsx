import {Link} from "react-router-dom"

function PageNotFound() {
  return (
    <>
    <div className="container text-center my-5">
        <h1 className="text-danger mb-5">404 Page Not Found</h1>
        <Link to="/" className="btn btn-outline-dark">Back to Home</Link>
    </div>
    </>
  )
}

export default PageNotFound