
import { Link } from "react-router-dom"
export function Invalid(){
    return(
        <div>
            <h1>Invalid Credtentials</h1>
            <p>
                <Link to ="/">Back to login</Link>
            </p>
        </div>
    )
}