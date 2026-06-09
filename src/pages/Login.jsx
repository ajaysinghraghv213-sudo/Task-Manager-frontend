import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const  Login = () =>{

    const navigate = useNavigate()
    const [error,setError] = useState('')

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const handleLogin = async () => {
        if (!username || !password){
            alert("please fill the fields")
            return
        }

     try {

        const response = await fetch(
            'https://task-manager-4-c00l.onrender.com/login/',
            {
                method: "POST",

                headers: {
                    'Content-Type':
                        'application/json'
                },

                body: JSON.stringify({
                    username,
                    password
                })
            }
        );

        const data = await response.json();

        if (response.ok) {

            localStorage.setItem(
                "access",
                data.access
            );

            localStorage.setItem(
                "refresh",
                data.refresh
            );

            localStorage.setItem(
                "username",
                username
            );

            console.log("Login Successful");

            alert(data.message);

            navigate('/');
            window.location.reload()

        } else {

            alert(
                data.message ||
                "Invalid credentials"
            );
        }

    } catch (error) {

        console.log(error);

        alert("Server error");
    }
}




    
   return (
        <div className="
    min-h-screen

    bg-gradient-to-br
    from-indigo-100
    via-white
    to-purple-100

    dark:from-gray-950
    dark:via-gray-900
    dark:to-black

    flex
    items-center
    justify-center
">

    <div className="
        w-full
        max-w-md

        bg-white
        dark:bg-gray-900

        rounded-3xl
        shadow-2xl

        border
        border-gray-200
        dark:border-gray-700

        p-10
    ">

        <h1 className="
            text-4xl
            font-extrabold

            text-indigo-700
            dark:text-indigo-400

            text-center
            mb-8
        ">
            Login
        </h1>

        <div className="space-y-5">

            <input

                className="
                    w-full

                    p-4

                    rounded-xl

                    border
                    border-gray-300
                    dark:border-gray-700

                    bg-white
                    dark:bg-gray-800

                    text-black
                    dark:text-white

                    outline-none

                    focus:ring-2
                    focus:ring-indigo-500
                "

                placeholder='Enter username'

                value={username}

                onChange={(e)=>
                    setUsername(e.target.value)
                }
            />

            <input

                type="password"

                className="
                    w-full

                    p-4

                    rounded-xl

                    border
                    border-gray-300
                    dark:border-gray-700

                    bg-white
                    dark:bg-gray-800

                    text-black
                    dark:text-white

                    outline-none

                    focus:ring-2
                    focus:ring-indigo-500
                "

                placeholder='Enter password'

                value={password}

                onChange={(e)=>
                    setPassword(e.target.value)
                }
            />

            <button

                onClick={handleLogin}

                disabled={!username || !password}

                className="
                    w-full

                    bg-indigo-600
                    hover:bg-indigo-700

                    disabled:bg-gray-400
                    disabled:cursor-not-allowed

                    text-white
                    font-semibold

                    py-4

                    rounded-xl

                    transition
                    duration-300

                    active:scale-95
                "
            >
                Login
            </button>

        </div>

    </div>

</div>
    )
}
export default Login