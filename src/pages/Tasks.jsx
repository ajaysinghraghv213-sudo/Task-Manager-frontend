import {useState} from 'react'
import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {fetchRefreshToken} from '../utils/auth'
const Tasks = () =>{
    const [tasks,setTasks] = useState([])
    const {id} = useParams()

    useEffect(() =>{const fetchTasks = async() =>{
           let access = localStorage.getItem("access");

       let response = await fetch('https://task-manager-4-c00l.onrender.com/tasks/',{
            headers:   {"Authorization": `Bearer ${access}`
        }})
        if (response.status===401){

            access = await fetchRefreshToken()

            response = await fetch('https://task-manager-4-c00l.onrender.com/tasks/',{

                headers: {"Authorization": `Bearer ${access}`

                }
            })
           

        }
        const data = await response.json()

        setTasks(data)

         
        
    }
fetchTasks()
},[])



const deleteTask = async (id) => {

    const response = await fetch(
        `https://task-manager-4-c00l.onrender.com/taskDetail/${id}/`,
        {

            method: "DELETE",

            headers: {
                Authorization: `Bearer ${localStorage.getItem("access")}`,
                "Content-Type": "application/json"
            }
        }
    )

    if (response.ok) {
        console.log("Task Deleted")
        setTasks(tasks.filter(task => task.id !== id))
    }
}
   
    
    return (
        <div className="grid h-screen grid-cols-1 dark:bg-gray-900 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

    {tasks.map((task, index) => (

        <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 h-[200px] dark:bg-gray-900 border border-gray-100 hover:shadow-2xl transition duration-300"
        >

            {/* Task Title */}
            <h1 className="text-2xl font-bold text-indigo-600 mb-3">
                {task.task}
            </h1>

            {/* Status */}
            <p
                className={`w-fit px-3 py-1 rounded-full text-sm font-semibold mb-5 ${
                    task.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                }`}
            >
                {task.completed ? "Completed ✅" : "Pending ⏳"}
            </p>

            {/* Buttons */}
            <div className="flex gap-3">

                <Link to={`/taskDetail/${task.id}/`}>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-medium transition duration-300">
                        View
                    </button>
                </Link>

                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-medium transition duration-300"
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </button>

            </div>

        </div>

    ))}

</div>
    )
}
export default Tasks