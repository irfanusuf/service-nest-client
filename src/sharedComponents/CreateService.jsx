import React, { useContext, useState } from "react";
import "./CreateService.scss";
import { Context } from "../context/Store";

const CreateService = ({ setShowForm }) => {
  const { createServive } = useContext(Context);

  const [formData, setFormData] = useState({
    serviceTitle: "",
    serviceCost: "",
    discount: "",
    timeOfCompletion: "",
    region: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevInput) => ({ ...prevInput, [name]: value }));
  };

  return (
    <div className="create-service">
      <h3> Create new Service</h3>

      <form>
        <input
          placeholder="Service name"
          name="serviceTitle"
          onChange={handleChange}
        />
        <input
          placeholder="Service Cost"
          type="number"
          name="serviceCost"
          onChange={handleChange}
        />
        <input
          placeholder="Discount"
          type="number"
          name="discount"
          onChange={handleChange}
        />
        <input
          placeholder="Time of completion"
          name="timeOfCompletion"
          onChange={handleChange}
        />
        <input
          placeholder="Region of service"
          name="region"
          onChange={handleChange}
        />
        <input
          placeholder="Hash tags"
          name="category"
          onChange={handleChange}
        />
      </form>

      <button> Upload pics </button>
      <button
        onClick={() => {
          createServive(formData);
          setFormData({
            serviceTitle: "",
            serviceCost: "",
            discount: "",
            timeOfCompletion: "",
            region: "",
            category: "",
          });
          setShowForm(false);
        }}
      >
        {" "}
        Create{" "}
      </button>

      <button
        onClick={() => {
          setShowForm(false);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default CreateService;
