import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import db from './firebase';

const TodosList = ({todos, setTodos, setEditTodo}) => {

    
    const handleEdit =({id})=>{
        const findTodo = todos.find((todo)=>todo.id === id);
        setEditTodo(findTodo);
    };
    const handleDelete =({todo})=>{
        db.collection('todos').doc('9TS3VxOKQwciaaxGoOHO').delete();
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return{ ...item, completed: !item.completed};
                }
                return item;
        })
        );
    };



    return(
    <div>
        {todos.map((todo)=>(
            <div className="list-item" key={todo.id}>
                <li className="list-group-item d-flex justify-content-between my-2" id={"edit"}>
                    {todo.completed
                    ?
                    <h6 className="mt-2 mb-0 align-middle" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{todo.title}</h6>:
                    <h6 className="mt-2 mb-0 align-middle">{todo}</h6>
                }
                <div>
                    <button className="btn btn-outline-success" onClick={()=> handleComplete(todo)}>
                        <i className="fa fa-check-circle"></i>
                    </button>
                    <button className="btn btn-outline-primary" onClick={()=> handleEdit(todo)}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn btn-outline-danger" onClick={()=> handleDelete(todo)}>
                        <i className="fa fa-trash"></i>
                    </button>

                </div>
                </li>

        </div>
        ))}
    </div>
    );
};

export default TodosList;