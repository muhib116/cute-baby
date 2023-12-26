import { User } from '@phosphor-icons/react';
import React from 'react';

interface LoginRegistrationProps {
  className?: string;
  children?: React.ReactNode;
}

const LoginRegistration: React.FC<LoginRegistrationProps> = ({ className, children }) => {
  return (
    <nav className='className'>
      <ul className='flex gap-[0.5rem] justify-end items-center font-light'>
        <li className='bg-[var(--primaryColor)] text-[1.2rem] text-white p-[5px] size-9 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 flex-grow-0'>
          <User size={20} weight="bold" className='w-fit' />
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <a href="#">Registration</a>
        </li>
        <li>
          {children}
        </li>
      </ul>
    </nav>
  );
};

export default LoginRegistration;