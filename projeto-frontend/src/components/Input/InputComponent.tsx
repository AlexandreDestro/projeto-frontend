import React from 'react';
import './InputComponent.css';

interface InputComponentProps {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ value, placeholder, onChange }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="input-component"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;
