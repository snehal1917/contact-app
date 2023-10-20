import React, { useState, useEffect } from "react";
import ContactCard from "./../../components/ContactCard/ContactCard";
import "./Home.css";
import showToast from "crunchy-toast";

function Home() {
  const [contacts, setContacts] = useState([
    {
      name: 'Ram',
      mobile: '885236945',
      email: 'ram@gmail.com',
    },
    {
      name: 'Sham',
      mobile: '9563124857',
      email: 'sham12@gmail.com',
    },
    {
      name: 'Kiran',
      mobile: '7525368992',
      email: 'kiran75@gmail.com',
    },
  ]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [isEditMode, setIsEditMode] = useState('false'); // Changed 'false' to false

  const addContact = () => {
    if (!name) { // Changed 'image' to 'name'
      showToast('Name is Required', 'alert', 3000);
      return;
    }
    if (!email) {
      showToast('Email is Required', 'alert', 3000);
      return;
    }
    if (!mobile) {
      showToast('Mobile is Required', 'alert', 3000);
      return;
    }
  
    const obj = {
      name: name,
      email: email,
      mobile: mobile,
    };

    const newContacts = [...contacts, obj];
    setContacts(newContacts);
    saveToLocalStorage(newContacts);

    showToast('Contact added successfully', 'success', 3000);

    setName('');
    setEmail('');
    setMobile('');
  };

  const deleteContact = (mobileNumber) => {
    let indexToDelete = -1;

    contacts.forEach((contactDetail, index) => {
      if (contactDetail.mobile === mobileNumber) { // Changed '==' to '==='
        indexToDelete = index;
      }
    });

    contacts.splice(indexToDelete, 1);

    saveToLocalStorage(contacts);

    setContacts([...contacts]);

    showToast('Contact Deleted Successfully', 'success', 3000);
  };

  const saveToLocalStorage = (contactsData) => {
    localStorage.setItem('contacts', JSON.stringify(contactsData));
  };

  const loadFromLocalStorage = () => {
    const contactsData = JSON.parse(localStorage.getItem('contacts'));

    if (contactsData) {
      setContacts(contactsData);
    }
  };

  const enableEditMode = (index) => {
    const contactData = contacts[index];
    setName(contactData.name);
    setEmail(contactData.email);
    setMobile(contactData.mobile);
    setEditIndex(index);
    setIsEditMode(true);
  };

  const editContact = () => {
    const obj = {
      name: name,
      email: email,
      mobile: mobile,
    };
    contacts[editIndex] = obj;
    setContacts([...contacts]);
    saveToLocalStorage(contacts);
    showToast('Contact Edited Successfully', 'success', 3000);

    setName('');
    setEmail('');
    setMobile('');

    setIsEditMode(false);
  };

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  return (
    <div>
      <h1 className='app-title'>📞 Contact App </h1>

      <div className='app-body'>
        <div className='contacts-container'>
          <h2 className='sub-heading'>Show Contacts</h2>
          {
          contacts.map((contact, index) =>{
            return (<ContactCard
              key={index}
              name={contact.name}
              email={contact.email}
              mobile={contact.mobile}
              deleteContact={deleteContact}
              enableEditMode={enableEditMode}
              index={index}
            />)
          })
        }
        </div>
        <div className='add-contacts-container'>
          <h2 className='sub-heading'>
            {isEditMode ? 'Edit Contact' : 'Add Contact'}
          </h2>
          <form>
            <input
              type='text'
              placeholder='Name'
              className='user-input'
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <input
              type='email'
              placeholder='Email'
              className='user-input'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <input
              type='text'
              placeholder='Mobile'
              className='user-input'
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              value={mobile}
            />
            <button
              type='button'
              className='btn-add-contact'
              onClick={() => {
                isEditMode ? editContact() : addContact();
              }}>
              {isEditMode ? 'Edit Contact' : 'Add Contact'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;