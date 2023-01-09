import styled from "styled-components";

export const TransactionContainerTable = styled.main`
  width: 100%;
  max-width: 1120px;
  
  margin: 0 auto;
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  
  td {
    background: ${props => props.theme["gray-700"]};
    padding: 1.25rem 2rem;

    &:first-child {
      width: 50%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 5px;

      /* border-radius: 5px; */
    };

    &:last-child {
      border-top-right-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
`;

interface ValueHighlightProps {
  variant: 'income' | 'outcome';
}

export const ValueHighlight = styled.span<ValueHighlightProps>`
  color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
`;
