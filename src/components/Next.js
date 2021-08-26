import { useSelector } from 'react-redux';

function Next() {
    const user = useSelector((state) => state.user.value); 

    return (
        <div>
            <p>{user.access_token}</p>
        </div>
    )
}

export default Next; 