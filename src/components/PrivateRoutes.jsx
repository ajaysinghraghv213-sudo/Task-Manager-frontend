import {Navigate} from 'react-router-dom'

const PrivateRoutes = ({children}) =>{

    const access = localStorage.getItem('access')

    if (!access){

       return <Navigate to='/login'></Navigate>
        
    }
    return children;

}
export default PrivateRoutes