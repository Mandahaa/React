import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

function NaviBar (){
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>{navigate('/theme')}}> Theme </button>
            <button onClick={()=>{navigate('/tree')}}> Tree </button>
            <button onClick={()=>{navigate('/table')}}> Employee Table </button>
            <button onClick={()=>{navigate('/table-playground')}}> HTML Table </button>
            <button onClick={()=>{navigate('/useeffect-playground')}}> Use Effect </button>
            <button onClick={()=>{navigate('/random-joke')}}> Fetch Joke </button>
            <button onClick={()=>{navigate('/language-picker')}}> Language Selector </button>
            <button onClick={()=>{navigate('/status-picker')}}> Status Picker </button>
            <button onClick={()=>{navigate('/fireworks')}}> Fire Works </button>
            <button onClick={()=>{navigate('/counter')}}> Counter</button>
            <button onClick={()=>{navigate('/shopping-list')}}>Shopping List</button>
            <button onClick={()=>{navigate('/todolist')}}>ToDo List</button>
            <button onClick={()=>{navigate('/use-reducer')}}>Use Reducer</button>
            <button onClick={()=>{navigate('/kahoot')}}> Kahoot </button>
            <button onClick={()=>{navigate('/translate')}}> Translate </button>

            <Outlet/>
        </div>
    )
}
export default NaviBar
