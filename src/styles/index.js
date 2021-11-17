import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  border-radius: 25px;
  padding: 1rem;
  width: 11rem;
  background: ${(props) => props.background};
  color: white;
  border: 2px solid white;
  cursor: pointer;
`;

export const Title = styled.h3`
  color: ${(props) => props.color};
`
