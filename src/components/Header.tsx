import React from 'react';
import { CheckSquare } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center mb-8">
      <CheckSquare size={32} className="text-blue-500 mr-3" />
      <h1 className="text-2xl font-semibold text-gray-800">SimpleTodo</h1>
    </header>
  );
}