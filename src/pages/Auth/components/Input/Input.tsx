import React from 'react';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  name,
  onChange,
  label,
}: InputProps) => {
  return (
    <>
      <label htmlFor={name}>
        <strong>{label}</strong>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required
      />
    </>
  );
};
export default Input;
