import React from 'react';
import styled from 'styled-components';

export interface UnsetInputProps {
  placeholder?: string;
  style?: object;
  type?: 'text' | 'email' | 'password' | 'number' | 'date';
  id?: string;
  readonly value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const UnsetInput = ({
  type,
  placeholder,
  style,
  value,
  id,
  onChange,
}: UnsetInputProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      style={style}
      value={value}
      id={id}
      onChange={onChange}
    />
  );
};

const StyledInput = styled.input`
  height: 45px;
  font-weight: 900;
  font-size: 24px;
  all: unset;
`;

export default UnsetInput;
