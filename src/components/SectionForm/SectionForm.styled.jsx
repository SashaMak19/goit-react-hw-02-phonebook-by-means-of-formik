import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

const Blank = styled(Form)`
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const Button = styled.button`
  &:hover {
    background-color: rgb(179, 179, 219);
  }
`;

const Error = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
`;

export { Wrapper, Blank, Label, Button, Error };
