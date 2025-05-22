import React, { useState } from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    // Delay actual deletion to allow animation to complete
    setTimeout(() => {
      onDelete(todo.id);
    }, 300);
  };

  return (
    <li 
      className={`group flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100
                 transition-all duration-300 ease-in-out
                 ${isDeleting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                 ${todo.completed ? 'bg-gray-50' : ''}`}
      data-testid="todo-item"
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-6 h-6 rounded-full border flex-shrink-0 flex items-center justify-center
                   transition-all duration-300 ease-in-out
                   ${todo.completed 
                     ? 'bg-green-500 border-green-500' 
                     : 'border-gray-300 hover:border-blue-500'}`}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        data-testid="toggle-todo"
      >
        {todo.completed && <Check size={14} className="text-white" />}
      </button>
      
      <span 
        className={`flex-1 ml-3 text-gray-800 transition-all duration-200
                   ${todo.completed ? 'line-through text-gray-500' : ''}`}
      >
        {todo.text}
      </span>
      
      <button
        onClick={handleDelete}
        className="text-gray-400 hover:text-red-500 transition-colors duration-200 ml-2"
        aria-label="Delete todo"
        data-testid="delete-todo"
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
}