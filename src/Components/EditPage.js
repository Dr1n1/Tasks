import React from 'react';
import ContactForm from './ContactForm';

function EditPage({ contact, index, editContact, handleCreate }) {
  return (
    <>
      <ContactForm
        contact={contact}
        index={index}
        editContact={editContact}
        handleCreate={handleCreate}
      />
    </>
  );
}

export default EditPage;
