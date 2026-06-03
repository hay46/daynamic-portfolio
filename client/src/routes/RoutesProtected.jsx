import { Navigate } from 'react'
import { useAuth } from '../contaxt/AuthContaxt'
const RoutesProtected = (children) => {
    const { token,loading } = useAuth();
    if(loading){
        return <h2>loading...</h2>;

    }if(!token){
        return <Navigate to ="/login"/>
    }
    return children;

};

export default RoutesProtected