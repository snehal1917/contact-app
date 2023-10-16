import React,{useState} from "react";
import ContactCard from  "./../../components/ContactCard/ContactCard";
import "./Home.css";
import showToast from "crunchy-toast";

function Home(){
  const [contacts, setContacts] = useState([
    {
      name :'Ram',
      mobile: '885236945',
      email:'ram@gmail.com',
    },
    { 
      name:'Sham',
      mobile:'9563124857',
      email:'sham12@gmail.com',
    },
    {
      name:'Kiran',
      mobile:'7525368992',
      email:'kiran75@gmail.com',
    },
    {
      name:'Vikas',
      mobile:'9785368592',
      email:'vikas45@gmail.com',
    },
  ])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const addContact= () => {
     const obj={
      name: name,
      email: email,
      mobile: mobile,
     }
     setContacts ([...contacts,obj]);

     showToast('contact added succesfully', 'success',3000);

     setName('');
     setEmail('');
     setMobile('');
  };

    return(
    <div>
      <h1 className='app-title'>📞 Contact App </h1>

      <div className='app-body'>
        <div className='contacts-container'>
          <h2 className='sub-heading'>Show Contacts</h2>
          {
            contacts.map((contact, index) =>{
            
              return (<ContactCard key={index} name= {contact.name}  email={contact.email} mobile= {contact.mobile}/>);
            })
          }
        </div>
        <div className='add-contacts-container'>
          <h2 className='sub-heading'>Add Contact</h2>
          <form>
            <input type= 'text' 
            placeholder='Name' 
            className='user-input'
            onChange={(e) =>{
              setName(e.target.value)
            }}
            value={name}
            />
            <input type= 'email' 
            placeholder='Email'
            className='user-input'
            onChange={(e) =>{
              setEmail(e.target.value)
            }}
            value={email}
            />
            <input type= 'text' 
            placeholder='Mobile'
             className='user-input'
             onChange={(e) =>{
              setMobile(e.target.value)
             }}
             value={mobile}
             />
            <button type='button' 
            className='btn-add-contact' onClick= {addContact}>
            Add Contact
            </button>
          </form>
        </div>

      </div>
    </div>
  );
  }
  export default Home;