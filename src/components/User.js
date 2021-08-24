import '../stylesheets/user.css';
import QueryString from "query-string"

function User(props) {
    const params = QueryString.parse(props.location.search);

    
    return (
        <div className="User">
            {console.log(params.code)}
        </div>
    );
}

export default User;
