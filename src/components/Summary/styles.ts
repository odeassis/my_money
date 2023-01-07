import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

interface SummaryCardColor {
  color?: 'green'
}

export const SummaryCard = styled.div<SummaryCardColor>`
  background: ${props => props.theme["gray-600"]};
  padding: 1.5rem 2rem;
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${props => props.theme["gray-500"]};
    }
  }

  strong {
    display: block;
    margin-top: 0.5rem;
    font-size: 2rem;
  }

  ${props => props.color === 'green' && css`
    background: ${props.theme["green-700"]};
  `}
`;