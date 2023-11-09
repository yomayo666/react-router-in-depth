import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";
export default function CareersError() {
    const error = useRouteError
    return (
        <div className="career-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to the homepage</Link>
        </div>
    )
}