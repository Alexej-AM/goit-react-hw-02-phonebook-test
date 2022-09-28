 import React from 'react'
  
  export  function Filter({onChange, filter}) {
    return (
        <>
        <label htmlFor="">Find contacts by name</label>
       <input type="text" name="filter" value={filter} onChange={onChange}/>
     </>
    )
  }
  
