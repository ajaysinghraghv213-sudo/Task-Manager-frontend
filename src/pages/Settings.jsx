import {Link, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

const Settings = () =>{
    const navigate = useNavigate()


    const handleLogout = async() =>{
        const refresh = localStorage.getItem('refresh')

         const response = await fetch('http://127.0.0.1:8000/logout/',{

            method : "POST",
            headers : {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem('access')}`
            },
            body:JSON.stringify({
                refresh:refresh
            })
        })
        const data = await response.json()
        console.log(data)
        localStorage.clear()
        navigate('/login')
    }


    const toggleTheme = () => {
        const isDark=
    document.documentElement.classList.toggle('dark');

    localStorage.setItem("theme",isDark?'dark':'light')
}
    

    return (
        <div className="
    min-h-screen
    bg-gradient-to-br

    bg-gray-100
    dark:from-gray-950
    dark:via-gray-900
    dark:to-black

    flex
    items-center
    justify-center

    p-6
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

        p-8
    ">

        <h1 className="
            text-3xl
            font-bold

            text-gray-800
            dark:text-white

            mb-8
        ">
            Settings
        </h1>

        <div className="space-y-4">

            <Link to='/forget'>

                <button className="
                    w-full

                    bg-amber-400
                    hover:bg-amber-500

                    text-black
                    font-semibold

                    py-3
                    rounded-xl

                    transition
                    duration-300

                    active:scale-95
                ">
                    Reset Password
                </button>

            </Link>

            <button
                onClick={handleLogout}
                className="
                    w-full
                    mt-3

                    bg-red-500
                    hover:bg-red-600

                    text-white
                    font-semibold

                    py-3
                    rounded-xl

                    transition
                    duration-300

                    active:scale-95
                "
            >
                Logout
            </button>

            <button
                onClick={toggleTheme}
                className="
                    w-full

                    bg-indigo-600
                    hover:bg-indigo-700

                    dark:bg-indigo-500
                    dark:hover:bg-indigo-600

                    text-white
                    font-semibold

                    py-3
                    rounded-xl

                    transition
                    duration-300

                    active:scale-95
                "
            >
                Toggle Theme
            </button>

        </div>

    </div>

</div>
    )
}
export default Settings