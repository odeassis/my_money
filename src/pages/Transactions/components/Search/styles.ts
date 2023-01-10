import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 4rem;
  
  input {
    flex: 1;
    background: ${props => props.theme["gray-900"]};
    color: ${props => props.theme.white};
    border: 0;
    border-radius: 6px;
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 2rem;

    border: 0;

    border-radius: 6px;
    border: 1px solid ${props => props.theme["green-500"]};
    background: transparent;
    color: ${props => props.theme["green-500"]};

    font-weight: 700;
    font-size: 1.25rem;

    cursor: pointer;

    &:hover {
      transform: scale(1.02);
      background-color: ${props => props.theme["green-500"]};
      border-color: ${props => props.theme["gray-300"]};      
      color: ${props => props.theme.white};

      transition: 
        transform 0.5s,
        background-color 0.5s,
        border-color 0.5s;
    }
  }
`;