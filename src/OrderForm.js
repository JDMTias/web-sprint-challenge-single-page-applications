import React, { useState } from "react";
// need to add a home button here as well that takes you to the homepage

export default function OrderForm(props) {
  const { pizza, setPizza, disabled, onInputChange,onSubmitHandler, onCheckboxChange, values } = props;

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Name: </label>
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        onChange={onInputChange}
        value={values.name}
      />
      <label>Pizza Size:</label>
      <select name="size">
        <option value="placeholder">Choose Size</option>
        <option value="10">10 inch</option>
        <option value="14">14 inch</option>
        <option value="18">Super Mario (18 inch)</option>
      </select>
      <div>
        <h4>Toppings:</h4>
        <label>
          Goomba
          <input
            name="goomba"
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.goomba}
          />
        </label>

        <label>
          Koopa
          <input
            name="koopa"
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.koopa}
          />
        </label>

        <label>
          Blooper
          <input
            name="blooper"
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.blooper}
          />
        </label>

        <label>
          cheep cheep
          <input
            name="cheepcheep"
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.cheepcheep}
          />
        </label>

        <label>
          Bowser
          <input
            name="bowser"
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.bowser}
          />
        </label>
      </div>
      <label>Special Instructions </label>
      <input
        type="text"
        placeholder="The princess is in a different castle"
        name="special"
        onChange={onInputChange}
      />
    <button disabled={disabled} type='submit'>Add to Order</button>
    </form>
  );
}
