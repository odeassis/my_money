import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vw;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  position: fixed;
  background: ${props => props.theme["gray-800"]};
  border-radius: 6px;
  padding: 2.5rem 3rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    input {
      background: ${props => props.theme["gray-900"]};
      color: ${props => props.theme.white};
      border: 0;
      border-radius: 6px;
      padding: 1rem;

      &:focus {
        box-shadow: 0 0 0 2px ${props => props.theme["green-500"]};;
      }
    }

    button[type="submit"]{
      height: 50px;
      background: ${props => props.theme["green-500"]};
      color: ${props => props.theme.white};
      font-weight: 700;
      border: 0;
      border-radius: 6px;
      cursor: pointer;

      &:hover{
        background: ${props => props.theme["green-700"]};
        transition: background-color 0.4s;
      }

    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  border: 0;
  background: transparent;
  color: ${props => props.theme.white};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme["red-500"]};
    transition: color 0.5s;
  }
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 0.2rem 0;
`;

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme["gray-600"]};
  color: ${props => props.theme["gray-300"]};

  border-radius: 6px;
  border: 0;

  padding: 1rem;
  gap: 0.5rem;
  cursor: pointer;

  svg {
    color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};
  }

  &[data-state="unchecked"]:hover {
    transition: background-color 0.2s;
    background: ${props => props.theme["gray-700"]};
  }

  &[data-state="checked"]{
    color: ${props => props.theme.white};
    svg { color: ${props => props.theme.white}};

    background: ${props => props.value === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
    box-shadow: 0 0 0 2px ${props => props.theme.white};
  }
`;