import React from 'react';
import { useUser } from './useUser';

const UserDetails = (props) => {
    const {user, loading, error} = useUser(props.id);

    if (loading) return <Loading />   
    if (error !== '') return <Error/>
    return  <Main user ={props}/>
    
};

export default UserDetails;

const Loading = () => {
    return <div>{loading ? 'Loading...' : null}</div>;
}

const Error = () => {
    return <p>{error}</p>;
}

const Main = user => {
    return (
        <div>
            <h1>User Detail</h1>
            <p>Name: {user && user.name ? user.name : 'No name'}</p>
            <p>Email: {user && user.email ? user.email : 'No email'}</p>
        </div>
    );
}