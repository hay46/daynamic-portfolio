
import { Navigate } from 'react'
import { useAuth } from '../context/AuthContext'
const ProtecetdRoutes = (children) => {
    const { token, loading } = useAuth();
    if(loading){
        return <h2>loading...</h2>;

    }if(!token){
        return <Navigate to ="/login"/>
    }
    return children;

};
export default ProtecetdRoutes