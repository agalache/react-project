import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contactComponent';

function ContactListComponent(props) {

    const defaultContact = new Contact('Alejandra', 'Criado', 'agalachedev@gmail.com', false);

    return (
        <div>
        <ContactComponent contact={defaultContact}></ContactComponent>
        
        </div>
    )
}

export default ContactListComponent

