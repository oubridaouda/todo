import React from "react";

const TodosList = ({todos, setTodos, setEditTodo}) => {

    
    const handleEdit =({id})=>{
        const findTodo = todos.find((todo)=>todo.id === id);
        setEditTodo(findTodo);
    };
    const handleDelete =({id})=>{
        setTodos(todos.filter((todo)=> todo.id !==id));
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
                    <h6 className="mt-2 mb-0 align-middle">{todo.title}</h6>
                }
                <div>
                    <button className="btn btn-outline-danger" onClick={()=> handleComplete(todo)}>
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