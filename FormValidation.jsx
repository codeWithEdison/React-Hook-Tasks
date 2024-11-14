import React, { useState, useEffect } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age < 0 || formData.age > 150) {
      newErrors.age = 'Age must be between 0 and 150';
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  const getInputClassName = (fieldName) => {
    return `w-full p-2 border rounded ${
      errors[fieldName] ? 'border-red-500' : 'border-gray-300'
    }`;
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={getInputClassName('name')}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={getInputClassName('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={getInputClassName('age')}
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full p-2 rounded text-white ${
            isValid 
              ? 'bg-blue-500 hover:bg-blue-600' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default FormValidation;
