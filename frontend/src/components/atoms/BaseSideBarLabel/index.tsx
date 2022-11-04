import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  children?: React.ReactNode;
  style?: object;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
  active: boolean;
}

const BaseSideBarLabel = ({ children, style, onClick, active }: LabelProps) => {
  return (
    <Wrapper style={style} onClick={onClick} active={active}>
      {children}
    </Wrapper>
  );
};

interface WrapperProps {
  active: boolean;
}

const Wrapper = styled.label<WrapperProps>`
  font-family: 'Pretendard-Regular';
  font-weight: 700;
  font-size: 1.3rem;
  padding: 0rem 0rem 1.2rem 0rem;
  width: 100px;
  color: ${({ active, theme }) => (active ? theme.darkColor : 'darkgray')};
  border-bottom: ${({ active, theme }) =>
    active ? `3px solid ${theme.darkColor}` : '3px solid darkgray'};
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.darkColor};
    border-bottom: ${({ theme }) => `3px solid ${theme.darkColor}`};
  }
`;

export default BaseSideBarLabel;
