import React from 'react';
import Contact from './Contact';

function ContactList({ contacts, handleEdit, deleteContact }) {
    return (
        <div className=' pt-4'>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Last Name:</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">Country:</th>
                        <th scope="col">Telephone:</th>
                        <th scope="col">Emails:</th>
                        <th scope="col">Additional Phone numbers:</th>
                        <th scope="col">Edit:</th>
                        <th scope="col">Delete:</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <Contact key={index} contact={contact} index={index} handleEdit={handleEdit} deleteContact={deleteContact} />
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default ContactList;
