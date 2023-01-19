import React from 'react';

function Contact({ contact, index, handleEdit, deleteContact }) {
    const { name, lastName, address, city, country, phone, email, number } = contact;
    return (

        <tr>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>{address}</td>
            <td>{city}</td>
            <td>{country}</td>
            <td>{phone}</td>
            <td>
                {email.map((emailValue, i) => <div key={i}>{emailValue}</div>)}
            </td>
            <td>
                {number.map((numberValue, i) => <div key={i}>{numberValue}</div>)}
            </td>

            <td>
                <button className='btn btn-primary' onClick={() => handleEdit(index)}>Edit</button>
            </td>
            <td >
                <button className='btn btn-danger' onClick={() => deleteContact(index)}>Delete</button>
            </td>
        </tr>


    );
}

export default Contact;
