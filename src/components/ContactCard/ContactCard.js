import React from "react";
import  "./ContactCard.css";

function ContactCard ({name, mobile, email,deleteContact,enableEditMode,index})
{

    return(
        <div className='contact-card'>
                   <p className= 'contact-name m-2'> 👤 {name} </p>
                   <p className='contact-mobile m-2'>☎ {mobile} </p>
                   <p className= 'contact-email m-2'>📧 {email}</p>
                   <button className="icon-delete-contact" onClick= {()=>{
                        deleteContact(mobile)
                    }}>
                    ❌
                   </button>
                   <button className="icon-edit-contact" onClick={()=>{
                        enableEditMode(index)
                    }}>
                     ✏️
                   </button>
                </div>
    );
}
export default ContactCard;