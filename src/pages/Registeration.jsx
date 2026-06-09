import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Registeration = () =>{

    const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [error,setError] = useState('')

    const Registeruser = async() =>{

        const response = await fetch('http://127.0.0.1:8000/register/',{

            method : 'POST',
            headers  : {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username,password,email
            })
        })
        const data = await response.json()

        if(data.username){
            setError(data.username)

        }else if (data.email){
            setError(data.email)
        }else if (data.password){
            setError(data.password)
        }else {
            alert(data.message)
            navigate('/')

        }
    }

    return (
        <div>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username' ></input>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' ></input>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' ></input>

            {error&&(
                <div>
                    <p className='text-red-500'>{error}</p>
                    </div>
            )}

    
            <button onClick={Registeruser}>Register</button>
            
           
        </div>
    )
}
export default Registeration