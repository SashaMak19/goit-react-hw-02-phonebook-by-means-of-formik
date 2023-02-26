import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { Wrapper, Blank, Label, Button, Error } from './SectionForm.styled';
import * as Yup from 'yup';

const regexFOrName =
  /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/;
const regexFOrNumber =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const errorForName =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";

const errorForNumber =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

const schema = Yup.object().shape({
  name: Yup.string().matches(regexFOrName, errorForName).required('Required'),

  number: Yup.string()
    .matches(regexFOrNumber, errorForNumber)
    .required('Required'),
});

const SectionForm = props => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    props.onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Blank>
        <Wrapper>
          <Label>
            Name
            <Field type="text" name="name" />
            <Error name="name" component="span" />
          </Label>
          <Label>
            Number
            <Field type="tel" name="number" />
            <Error name="number" component="span" />
          </Label>
          <Button type="submit">Add contact</Button>
        </Wrapper>
      </Blank>
    </Formik>
  );
};

SectionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { SectionForm };
