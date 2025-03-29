import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface GetStartedButtonProps {
  className?: string;
  variant?: 'navbar' | 'hero';
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ className, variant = 'navbar' }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/register');
  };

  const baseClass = variant === 'hero' ? 'hero-button primary' : 'primary-button';

  return (
    <button type="button" onClick={handleClick} className={`${baseClass} ${className || ''}`}>
      Get started for free
    </button>
  );
};

export default GetStartedButton;