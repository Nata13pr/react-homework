import React, {useEffect, useState,FC} from 'react';
import ContactComponent from '../contact/ContactComponent';
import { userApiService } from '../../services/api.service';
import { IUserContactModel } from '../../models/IUserContactModel';

const ContactsComponent:FC = () => {
    const [contacts, setContacts] = useState<IUserContactModel[]>();

    useEffect(() => {
        userApiService.getAllUser()
            .then(value => setContacts(value.data))
    }, []);
    return (
        <div>
            {contacts && <>{
                contacts.map((contact, index) => (<ContactComponent key={index} contact={contact}/>))
            }</>}
        </div>
    );
};

export default ContactsComponent;