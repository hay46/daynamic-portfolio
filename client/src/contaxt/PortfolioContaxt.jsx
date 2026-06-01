import { createContext, useContext, useState, useEffect} from 'react'
import api from '../service/api';
import { useAuth } from './AuthContaxt';
const PortfolioContaxt = createContext();

export const PortfolioContaxt = ({childeren}) => {
    const [projects,setProjects] = useState([]);
    const [loading,setLoading] = useState(false);
    const { token } = useAuth();
    //fetch call projects
    const fetchProjects = async () =>{
        try{
            setLoading(true);
            const response = await api.get("/portfolio");
            setProjects(response.data);

        }catch{
            console.log(error);

        }finally{
            setLoading(false);
        }
    }
  return (
    <div>
        PortfolioContaxt
        </div>
  )
}

export default PortfolioContaxt