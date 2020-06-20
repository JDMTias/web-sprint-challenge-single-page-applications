import React from 'react'

function ThisPizza({details}) {
    if (!details) {
        return <h3>Making your Pizza...</h3>
    }
    return (
        <div>
            {console.log(details)}
            <h2>Name: {details.name}</h2>
            <p>Size: {details.size}</p>
            
      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
       <p>Special Instructions: {details.special}</p>
        </div>
    )
}

export default ThisPizza