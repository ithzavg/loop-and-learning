import React, { useState, useEffect } from 'react';

const url = 'https://api.example.com/users/';

export function useUser(userId: number) {
    
    let [user, setUser] = useState();
    let [loading, setLoading] = useState(1);
    let [error, setError] = useState('');

    useEffect(() => {
       const fetchUser = () => {
        fetch(url + userId)
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
       }

       fetchUser();
    }, [userId]);

    return {user, loading, error}
    
}