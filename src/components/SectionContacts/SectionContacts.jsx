import PropTypes from 'prop-types';
import { List, Item, Button } from './SectionContacts.styled';

const SectionContacts = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <Item key={id}>
        {name}: {number}
        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </Item>
    ))}
  </List>
);

SectionContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { SectionContacts };
