import React from 'react'

export function ContactsList({items}) {
const elements = items.map(({name, number, id}) => {
    return <li key={id}>{name} : {number}</li>
})
return (
    
    <ul>{elements}</ul>
 )

}

