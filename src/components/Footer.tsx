import React from 'react';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="mt-auto pt-8 pb-6 text-center text-gray-500 text-sm">
      <p>© {year} SimpleTodo. Made with ♥ for productivity.</p>
    </footer>
  );
}