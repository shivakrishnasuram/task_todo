import React from 'react';
import { Trash2 } from 'lucide-react';

export default function TodoList({ todos, setTodos }) {
    const handleDelete = (index) => {
        const updated = [...todos];
        updated.splice(index, 1);
        setTodos(updated);
    };

    return (
        <div>
            {todos.length === 0 ? (
                <p>No todos yet.</p>
            ) : (
                <ul className="todo-list">
                    {todos.map((todo, index) => (
                        <li key={index} className="todo-item">
                            <div>
                                <strong>{todo.title}</strong>
                                <div dangerouslySetInnerHTML={{ __html: todo.description }} />
                            </div>
                            <button onClick={() => handleDelete(index)} className="delete-btn">
                                <Trash2 size={16} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
