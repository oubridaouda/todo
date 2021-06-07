import React, { useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase';

import { Button } from 'reactstrap';

const Form = ({input, setInput, todos, setTodos,editTodo,setEditTodo }) => {
   // const updateTodo = (title,id,completed)=>{
    //    const newTodo = todos.map((todo) =>
    //    todo.id === id ? {title, id, completed} : todo
     //   );
     //   setTodos(newTodo);
    //    setEditTodo("");
    //};
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("");
        }
    },[setInput, editTodo]);

    const onInputChange = (event)=>{
        setInput(event.target.value);
    };
        const onFormSubmit = (event)=>{
            event.preventDefault();
    db.collection('todos').add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
            setInput("");
        };





    return (
        <>
        <header><button >Sign Out</button></header>

        <form onSubmit={onFormSubmit} id="form">
            <div className="input-group">
                <div className="input-group-prepend">
                </div>

            <input
                type="text"
                className="form-control"
            placeholder="Enter a Todo..."
            value={input}
            required
            onChange={onInputChange}
            />
            <Button color="primary" id="but" type="submit">
                {editTodo ? "OK" : "Add"}
            </Button>

            </div>

        </form>
            </>
    );
};


export default Form;