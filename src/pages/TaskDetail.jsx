import {useParams} from 'react-router-dom'
import {useState} from 'react'
import {useEffect} from 'react'


const TaskDetail = () =>{
    const {id} = useParams()
    
    const [taskdetail,setTaskDetail] = useState({})

    // fetching tasketails
    useEffect(() =>{
        fetch(`http://127.0.0.1:8000/taskDetail/${id}/`,{
            headers:{Authorization: `Bearer ${localStorage.getItem("access")}`
        }}
        )
        .then(response => response.json())
        .then(data =>setTaskDetail(data))
    },[id])


    const markCompleted = async() =>{

        const response = await fetch(`http://127.0.0.1:8000/taskDetail/${id}/`,{

            method : "PUT",
            headers : {Authorization: `Bearer ${localStorage.getItem("access")}`,
            'Content-Type':'application/json'
                
            },
            body:JSON.stringify({
                completed:true
            })
        })
        const data = await response.json()
        setTaskDetail(data)
    }




    return (
        <div className='dark:bg-gray-900 min-h-screen'>
       <div className="max-w-2xl dark:bg-gray-900 mx-auto mt-0 bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">

    {/* Title */}
    <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
        {taskdetail.task}
    </h1>

    {/* Description */}
    <div className="bg-gray-50 rounded-2xl p-5 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
            {taskdetail.description}
        </p>
    </div>

    {/* Info Section */}
    <div className="flex flex-col gap-4">

        {/* Started Date */}
        <div className="flex items-center gap-2">
            <span className="font-semibold text-indigo-700">
                Started At:
            </span>

            <p className="text-gray-600">
                {new Date(taskdetail.created_at).toLocaleDateString()}
            </p>
        </div>

        {/* Due Date */}
        <div className="flex items-center gap-2">
            <span className="font-semibold text-red-600">
                Due Date:
            </span>

            <p className="text-gray-600">
                {new Date(taskdetail.due_date).toLocaleDateString()}
            </p>
        </div>

        {/* Status */}
        <div>
            <p
                className={`w-fit px-4 py-2 rounded-full text-sm font-semibold ${
                    taskdetail.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                }`}
            >
                {taskdetail.completed
                    ? "Completed ✅"
                    : "Pending ⏳"}
            </p>
        </div>

        {/* Button */}
        {!taskdetail.completed && (
            <button
                onClick={markCompleted}
                className="mt-4 w-fit bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300"
            >
                Mark as Completed
            </button>
        )}

    </div>

</div>
</div>



    )
}
export default TaskDetail