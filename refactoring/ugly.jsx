import React, { useState, useEffect } from 'react';

const UserDetails = (props) => {
    let [user, setUser] = useState();
    let [loading, setLoading] = useState(1);
    let [error, setError] = useState('');

    useEffect(() => {
        fetch('https://api.example.com/users/' + props.userId)
            .then((response) => {
                if (!response.ok) throw new Error('Network response was not ok.');
                return response.json();
            })
            .then((data) => {
                setUser(data);
                setLoading(0);
            })
            .catch((error) => {
                setError('Error: ' + error.message);
                setLoading(0);
            });
    }, [props.userId]);

    if (loading) {
        return <div>{loading ? 'Loading...' : null}</div>;
    }

    if (error !== '') {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>User Detail</h1>
            <p>Name: {user && user.name ? user.name : 'No name'}</p>
            <p>Email: {user && user.email ? user.email : 'No email'}</p>
        </div>
    );
};

export default UserDetails;