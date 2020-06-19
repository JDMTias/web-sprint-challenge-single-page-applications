import React, { useState } from 'react'
// need to add a home button here as well that takes you to the homepage

export default function OrderForm (props) {

    const {pizza, setPizza} = props



return(
    <form>
        <label>Name: </label>
        <input
            type="text"
            placeholder="Your Name"
            name="name"
            // onChange={}
        />
        <label>Pizza Size:</label>
        <select name='size'>
            <option value="placeholder">Choose Size</option>
            <option value="10">10 inch</option>
            <option value="14">14 inch</option>
            <option value="18">Super Mario (18 inch)</option>
        </select>
        

    </form>
)
}