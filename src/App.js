import React, { useState } from 'react';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import EditPage from './Components/EditPage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [isEditPage, setIsEditPage] = useState(false);

  const addContact = (name, lastName, address, city, country, phone, email, number) => {
    const newContact = { name, lastName, address, city, country, phone, email, number };
    setContacts([...contacts, newContact]);
  }

  const editContact = (index, name, lastName, address, city, country, phone,  email, number) => {
    const newContacts = [...contacts];
    newContacts[index] = { name, lastName, address, city, country, phone,  email, number};
    setContacts(newContacts);
    setEditingContact(null);
  }

  const deleteContact = (index) => {
    setContacts(contacts.filter((contact, i) => i !== index));
  }

  const handleEdit = (index) => {
    setEditingContact(contacts[index]);
    setIsEditPage(true);
  }
  const handleCreate = () => {
    setIsEditPage(false);
  }

  
  return (
    <>
      <nav class="navbar navbar-expand-lg" style={{fontSize: '35px', color: 'white', backgroundColor: "grey" }}>
        PhoneBook
      </nav>
      <div className="App container">
        <div className=''>
        </div>
        {isEditPage ? (
          <EditPage
            contact={editingContact}
            index={contacts.indexOf(editingContact)}
            editContact={editContact}
            handleCreate={handleCreate}
          />
        ) : (
          <>
            <ContactForm addContact={addContact} />
            <ContactList contacts={contacts} handleEdit={handleEdit} deleteContact={deleteContact} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
