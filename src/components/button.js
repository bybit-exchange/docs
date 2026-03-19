import styled from 'styled-components';

const Button = styled.button`
  background-color: #F7A60F;
  color: #0B0B0E;
  padding: 4px 12px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #FAB83C;
  }
`;

export default Button;