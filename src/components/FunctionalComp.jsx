import React,{ useState } from 'react';

function FunctionalComp() {
    const Url = 'https://randomuser.me/api/';
    const [users, setUsers] = useState([]);

    const fetchUser = () => {
        fetch(Url)
        .then((jsonData) => jsonData.json())
        .then((data) => setUsers([...users, data.results[0]]))
    }

    return (
        <>
            <button id="getData" onClick={fetchUser}>Get User</button>
            <div className="user-contaner">
                {users?.map((user, index) => {
                    let location = user.location;
                    return (
                        <div key={index} className="user-card">
                            <span>Name: {user.name.first} {user.name.last}</span>
                            <span>Gender: {user.gender}</span>
                            <span>Email: {user.email}</span>
                            <span className="strong">Address:</span>
                            <span>
                                {location.street.number}, {location.street.name}, {location.city}, {location.state}, {location.country}, {location.postcode}
                            </span>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default FunctionalComp;
