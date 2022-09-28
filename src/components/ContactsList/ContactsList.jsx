import React from 'react'

export function ContactsList({items, deleteContacts}) {
const elements = items.map(({name, number, id}) => {
    return <li key={id}>{name} : {number} <span onClick={() => deleteContacts(id)}>X</span></li>
})
return (
    
    <ul>{elements}</ul>
 )

}

