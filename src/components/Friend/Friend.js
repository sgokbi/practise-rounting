import React from 'react';
import { useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, email, phone } = props.friend;
    const history = useHistory();

    const handleClick = (id) => {
        const url = `/friend/${id}`;
        history.push(url);
    }


    return (
        <div>
            <h2><strong>Id: {id}</strong></h2>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            {/* <p>Id: <Link to={`/friend/${id}`}>Details of {id}</Link></p> */}

            {/* <Link to={`/friend/${id}`}> */}
            {/* <button>Details show</button> */}
            {/* <div>
                    <h4>Show details</h4>
                    <p>Click me</p>
                </div>
            </Link> */}

            <button onClick={() => handleClick(id)}>Show details</button>
        </div>
    );
};

export default Friend;