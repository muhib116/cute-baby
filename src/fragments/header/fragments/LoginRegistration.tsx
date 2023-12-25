import { User } from '@phosphor-icons/react';
import React from 'react';

interface LoginRegistrationProps {
    className?: string;
  children?: React.ReactNode;
}

const LoginRegistration: React.FC<LoginRegistrationProps> = ({ className, children }) => {
  const containerClasses = ['flex gap-[0.5rem] justify-end items-center font-light', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      <div className='bg-[var(--primaryColor)] text-[1.2rem] text-white p-[5px] size-9 rounded-full flex items-center justify-center shadow-lg'>
        <User size={20} weight="bold" className='w-fit' />
      </div>
      <a href="#">Login</a>
      <span>/</span>
      <a href="#">Registration</a>
      {children}
    </div>
  );
};

export default LoginRegistration;