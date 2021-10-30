import React, { Component } from 'react'

class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    fetchUser = () => {
        fetch('https://randomuser.me/api/')
        .then((jsonData) => jsonData.json())
        .then((data) => this.setState({users: [...this.state.users, data.results[0]]}))
    }

    render() {
        return (
            <>
                <button id="getData" onClick={this.fetchUser}>Get User</button>
                <div className="user-contaner">
                    {this.state.users?.map((user, index) => {
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
        )
    }
}

export default ClassComp
