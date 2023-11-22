import Modal from "./Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { editTodo, deleteTodo } from "../redux/actions/todoActions";
import axios from "axios";

const TodoCard = ({ todo }) => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    };

    const handleUpdate = () => {
        // todo dizisinin güncel halini belirleme
        const updated = { ...todo, isDone: !todo.isDone }

        axios.delete(`/todos/${todo.id}`).then(() => dispatch(editTodo(updated)));

    };

    return (
        <div className="border shadow shadow-lg p-4 my-5">
            <h5>{todo.text}</h5>

            <h6>{todo.isDone ? "Completed" : "Continuing"} </h6>

            <p>{new Date(todo.created_at).toLocaleDateString()}</p>
            {/* toLo.. bunu kullanıyoruz çünkü aksi halde objeleri doğrudan reactta ekrana basamazsınız 
            uyarısı alırız. bu new date ile oluşturulan tarihlere özel bir metottur  aksi halde error*/}

            <button onClick={() => setIsOpen(true)} className="btn btn-primary">Edit</button>
            <button onClick={handleUpdate} className="btn btn-success mx-4">{todo.isDone ? "Back" : "Complete"}</button>
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
            {isOpen && (<Modal close={() => { setIsOpen(false); }} todo={todo} />)}
        </div>

    );



}

export default TodoCard