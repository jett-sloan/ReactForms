import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    backgroundColor: "blue",
    width: "200",
    height: "200"
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        type="text"
        placeholder="Background Color"
        value={formData.backgroundColor}
        onChange={handleChange}
        name="backgroundColor"
      />
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        type="text"
        placeholder="Width"
        value={formData.width}
        onChange={handleChange}
        name="width"
      />
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        type="text"
        placeholder="Height"
        value={formData.height}
        onChange={handleChange}
        name="height"
      />
      <button type="submit">Create Box</button>
    </form>
  );
};

export default NewBoxForm;
