import React, { useState } from 'react';

function ContactForm({ contact = null, index = null, addContact, editContact, handleCreate }) {
    const [formData, setFormData] = useState(contact || {
        name: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        phone: '',
        email: [''],
        number: [''],
        showAdditionalFields: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (index === null) {
            addContact(formData.name, formData.lastName, formData.address, formData.city, formData.country, formData.phone, formData.email, formData.number);
        } else {
            editContact(index, formData.name, formData.lastName, formData.address, formData.city, formData.country, formData.phone, formData.email, formData.number);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddEmail = (handleChange) => {
        setFormData({ ...formData, email: [...formData.email, ''] });
    }
    

    const handleAddNumber = () => {
        setFormData({ ...formData, number: [...formData.number, ''] });
    }
    

    return (

        <div className='justify-content-center d-flex' >
            <div style={{ width: '800px' }} >
                <form className='row' onSubmit={handleSubmit}>
                    <label className='pt-1'>
                        Name:
                        <input type="text" className="my-2 col-12 form-control" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" className="my-2 col-12 form-control" name="lastName" value={formData.lastName} onChange={handleChange} />
                    </label>
                    <label>
                        Address:
                        <input type="text" className="my-2 col-12 form-control" name="address" value={formData.address} onChange={handleChange} />
                    </label>
                    <label>
                        City:
                        <input type="text" className="my-2 col-12 form-control" name="city" value={formData.city} onChange={handleChange} />
                    </label>
                    <label>
                        Country:
                        <input type="text" className="my-2 col-12 form-control" name="country" value={formData.country} onChange={handleChange} />
                    </label>
                    <label>
                        Phone:
                        <input type="text" className="my-2 col-12 form-control" name="phone" value={formData.phone} onChange={handleChange} />
                    </label>
                    {formData && (
                        <>
                            <div className='row '>
                                <div className='col-10'>
                                    <p>
                                    Email:
                                    </p>
                                    {formData.email.map((email, i) => (
                                        <label key={i}>
                                            <input
                                                type="email"
                                                name={`email-${i}`}
                                                value={email}
                                                className="my-2 col-12 form-control"
                                                onChange={(e) => {
                                                    const newEmails = [...formData.email];
                                                    newEmails[i] = e.target.value;
                                                    setFormData({ ...formData, email: newEmails });
                                                    email.handleChange(e);

                                                }}
                                            />
                                        </label>
                                    ))}
                                </div>
                                <div className='col-2 mb-auto'>
                                    <button type="button" class="btn btn-primary my-2 form-control" onClick={handleAddEmail}>Add </button>
                                </div>
                            </div>
                            <div className='row '>
                                <div className='col-10'>
                                    <p>
                                        Number:
                                    </p>
                                    {formData.number.map((number, i) => (
                                        <label key={i}>
                                            <input
                                                type="text"
                                                className=" form-control"
                                                name={`number-${i}`}
                                                value={formData.number[i]}
                                                onChange={(e) => {
                                                    const newNumbers = [...formData.number];
                                                    newNumbers[i] = e.target.value;
                                                    setFormData({ ...formData, number: newNumbers });
                                                    number.handleChange(e);

                                                }}
                                            />
                                        </label>
                                    ))}
                                </div>
                                <div className='col-2 mb-auto'>
                                    <button type="button" class="btn btn-primary my-2 form-control" onClick={handleAddNumber}>Add </button>
                                </div>
                            </div>
                        </>
                    )}
                    {index === null ? (
                        <button type="submit " className='btn btn-success mt-4 w-25'>Save</button>
                    ) : (
                        <>
                    <div className='d-flex justify-content-center mt-4'>

                    <button className='btn btn-success mx-2' type="submit">Save Changes</button>
                    <button className='btn btn-primary mx-2' onClick={handleCreate}>Create new contact</button>
                    </div>
                    
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ContactForm;

