import {useState} from 'react'

const AddTask = () =>{

    const [tasks,setTasks] = useState([])

    const [task,setTask] = useState('')
     
    const [description,setDescription] = useState('')
    const [due_date,setDue_Date] = useState('')
    
    const addTasks = async() =>{

        

       const response = await fetch('https://task-manager-4-c00l.onrender.com/tasks/',{

            method:'POST',

            headers:{
                "Authorization":`Bearer ${localStorage.getItem("access")}`,
                "Content-Type":'application/json'
               
            },
            body:JSON.stringify({
                task:task,
                description:description,
                due_date:due_date
            })
        })
        const data = await response.json()

        console.log(data)

    }


    return (
        <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-8 flex flex-col gap-5 max-w-xl mt-10 border border-gray-100">

    <h2 className="text-3xl font-bold text-indigo-600">
        Add New Task
    </h2>

    {/* Task Title */}
    <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task Title"
        className="w-full border dark:text-gray-300 border-gray-300 rounded-2xl px-5 py-3 text-lg outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300"
    />

    {/* Description */}
    <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        rows="4"
        className="w-full border border-gray-300 dark:text-gray-300 rounded-2xl px-5 py-3 text-lg outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300"
    ></textarea>

    {/* Due Date */}
    <input
        type="date"
        value={due_date}
        onChange={(e) => setDue_Date(e.target.value)}
        className="w-full border border-gray-300 dark:text-gray-300 rounded-2xl px-5 py-3 text-lg outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300"
    />
    

    {/* Button */}
    <button
        className="bg-gradient-to-r cursor-pointer active:scale-95 from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg font-semibold py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
        onClick={addTasks}
    >
        Add Task
    </button>

</div>
    )
}
export default AddTask