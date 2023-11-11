
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from './AuthProvider';

// eslint-disable-next-line react/prop-types
const PrivateRout = ({children}) => {
    
    const {user, loading}= useContext(AuthContext);
    console.log(user);
    const location = useLocation();
    if(loading){
        return <p>Loading</p>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/Login'}></Navigate>
};

export default PrivateRout;