import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';

interface LabelInputProps {
  label: string;
  placeholder: string;
  inputValue?: string;
  clearValue?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: any;
  style?: object;
  inputId?: string;
}

const LabelInput = ({
  label,
  placeholder,
  onChange,
  onClick,
  inputValue,
  clearValue,
  style,
  inputId,
}: LabelInputProps) => {
  return (
    <Wrapper>
      <Label style={{ marginBottom: '1.3rem' }}>{label}</Label>
      <Input
        onClick={onClick}
        placeholder={placeholder}
        onChange={onChange}
        inputValue={inputValue}
        clearValue={clearValue}
        style={style}
        inputId={inputId}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default LabelInput;
