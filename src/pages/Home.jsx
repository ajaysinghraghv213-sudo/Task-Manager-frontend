import {useState} from 'react'
import {useEffect} from 'react'
import {useNavigate} from'react-router-dom'

import AddTask from '../components/AddTask'
const Home = () =>{
    const navigate = useNavigate()

    const [tasks,setTasks] = useState([])

    
   useEffect(() => {

    const access =
        localStorage.getItem("access");

    // user not logged in
    if (!access) {

        navigate('/login');

        return;
    }

    const fetchTasks = async () => {

        try {

            const response = await fetch(
                'http://127.0.0.1:8000/tasks/',
                {
                    headers: {
                        "Authorization":
                            `Bearer ${access}`
                    }
                }
            );

            // unauthorized
            if (response.status === 401) {

                navigate('/login');

                return;
            }

            const data =
                await response.json();

            setTasks(data);

        } catch (error) {

            console.log(error);
        }
    }

    fetchTasks();

}, []);
    
    return (
        <div className="
    min-h-screen
    w-full
    bg-gradient-to-br
    from-indigo-100
    via-white
    to-purple-100

    dark:from-gray-950
    dark:via-gray-900
    dark:to-black

    p-10
">

    {/* Header */}
    <div className="mb-10">

        <h1 className="
            text-5xl
            font-extrabold
            text-indigo-700
            dark:text-indigo-400
        ">
            Dashboard
        </h1>

        <p className="
            text-gray-600
            dark:text-gray-300
            mt-2
            text-lg
        ">
            Manage your tasks efficiently 🚀
        </p>

    </div>

    {/* Welcome Card */}
    <div className="
        bg-white
        dark:bg-gray-900

        shadow-xl
        rounded-3xl
        p-8
        mb-8

        border
        border-gray-100
        dark:border-gray-700
    ">

        <h1 className="
            text-3xl
            font-bold
            text-gray-800
            dark:text-white
        ">
            Welcome,

            <span className="
                text-indigo-600
                dark:text-indigo-400
                ml-2
            ">
                {localStorage.getItem("username")}
            </span>

        </h1>

    </div>

    {/* Stats Section */}
    <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
    ">

        {/* Total Tasks */}
        <div className="
            bg-white
            dark:bg-gray-900

            rounded-3xl
            shadow-lg
            p-8

            border
            border-gray-100
            dark:border-gray-700

            hover:shadow-2xl
            transition
            duration-300
        ">

            <h2 className="
                text-gray-500
                dark:text-gray-300
                text-lg
                font-semibold
            ">
                Total Tasks
            </h2>

            <h1 className="
                text-5xl
                font-extrabold
                text-indigo-600
                dark:text-indigo-400
                mt-4
            ">
                {tasks.length}
            </h1>

        </div>

        {/* Completed Tasks */}
        <div className="
            bg-white
            dark:bg-gray-900

            rounded-3xl
            shadow-lg
            p-8

            border
            border-gray-100
            dark:border-gray-700

            hover:shadow-2xl
            transition
            duration-300
        ">

            <h2 className="
                text-gray-500
                dark:text-gray-300
                text-lg
                font-semibold
            ">
                Completed Tasks
            </h2>

            <h1 className="
                text-5xl
                font-extrabold
                text-indigo-600
                dark:text-indigo-400
                mt-4
            ">
                {tasks.filter(task => task.completed).length}
            </h1>

        </div>

        {/* Pending Tasks */}
        <div className="
            bg-white
            dark:bg-gray-900

            rounded-3xl
            shadow-lg
            p-8

            border
            border-gray-100
            dark:border-gray-700

            hover:shadow-2xl
            transition
            duration-300
        ">

            <h2 className="
                text-gray-500
                dark:text-gray-300
                text-lg
                font-semibold
            ">
                Pending Tasks
            </h2>

            <h1 className="
                text-5xl
                font-extrabold
                text-indigo-600
                dark:text-indigo-400
                mt-4
            ">
                {tasks.filter(task => !task.completed).length}
            </h1>

        </div>

        <AddTask />

    </div>

</div>
            
        
    )
}
export default Home