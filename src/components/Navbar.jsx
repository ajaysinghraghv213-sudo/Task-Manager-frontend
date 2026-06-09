import { Link } from "react-router-dom"


const Navbar = () =>{

    return (
        <div className="bg-white shadow-md dark:bg-black w-full   px-8 h-[80px] flex items-center justify-between ">
    
    <h1 className="text-3xl font-extrabold text-indigo-600 tracking-wide cursor-pointer">
        TaskManager
    </h1>

    <div className="flex items-center  gap-8 text-lg font-medium text-gray-700">
        <Link to='/'>
        <h2 className="cursor-pointer dark:text-gray-300 hover:text-indigo-600 transition duration-200">
            Home
        </h2></Link>

       <Link to='/calendar'>
        <h2 className="cursor-pointer dark:text-gray-300 hover:text-indigo-600 transition duration-200">
            Calendar
        </h2></Link>

        <Link to='/tasks'>
        <h2 className="cursor-pointer dark:text-gray-300 hover:text-indigo-600 transition duration-100">
            Tasks
        </h2></Link>

        <Link to='/settings'>
        <h2 className="cursor-pointer dark:text-gray-300 hover:text-indigo-600 transition duration-200">
            Settings
        </h2></Link>
    </div>

</div>
    )
}
export default Navbar