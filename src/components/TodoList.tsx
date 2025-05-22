import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo } from '../types/Todo';
import { ClipboardList } from 'lucide-react';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export function TodoList({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <ClipboardList size={64} className="text-gray-300 mb-4" />
        <h3 className="text-xl font-medium text-gray-700 mb-2">No tasks yet</h3>
        <p className="text-gray-500 max-w-md">
          Add your first task using the form above. Your tasks will be saved automatically.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3 w-full" data-testid="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </ul>
  );
}