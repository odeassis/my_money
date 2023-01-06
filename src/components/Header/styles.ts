import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.625rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  >strong {
    font-size: 1.5rem;
  }
`;

export const NewTransactionButton = styled.button`
  background: ${props => props.theme["green-500"]};
  color: ${props => props.theme.white};

  padding: 0.75rem 1.25rem;
  
  border: 0;
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
    transition: filter 0.3s;
  }
`;