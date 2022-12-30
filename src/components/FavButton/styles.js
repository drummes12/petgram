import styled from 'styled-components'

export const Button = styled.button`
  position: absolute;
  justify-content: right;
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  & svg {
    margin: -14px 4px 0 4px;
    backdrop-filter: blur(10px);
    border-radius: 50%;
    padding: 4px;
  }
  padding-left: 14px;
`
