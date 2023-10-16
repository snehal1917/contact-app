import React from "react";
import  "./ContactCard.css";

function ContactCard ({name, mobile, email})
{

    return(
        <div className='contact-card'>
                   <p className= 'contact-name m-2'> 👤 {name} </p>
                   <p className='contact-mobile m-2'>☎ {mobile} </p>
                   <p className= 'contact-email m-2'>📧 {email}</p>
                </div>
    );
}
export default ContactCard;