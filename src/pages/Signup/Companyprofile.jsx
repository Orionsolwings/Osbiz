import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "@components/ui/Input/Input";
import Button from "@components/ui/Button/Button";
import { assests } from "@assets/assets";

const CompanyProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    contactNumber: '',
    companyEmail: '',
    websiteUrl: '',
    streetAddress: '',
    streetAddressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    businessType: '',
    contactPersonName: '',
    contactPersonNumber: '',
    contactPersonEmail: '',
    confirmation: false,
    companyProfile:false,
    date: new Date().toISOString().split('T')[0]
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = {};

  // Validation patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10,15}$/; // Allows 10-15 digits
  const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  // Required fields validation
  if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
  
  // Phone validation
  if (!formData.contactNumber.trim()) {
    newErrors.contactNumber = "Contact number is required";
  } else if (!phonePattern.test(formData.contactNumber)) {
    newErrors.contactNumber = "Please enter a valid phone number (10-15 digits)";
  }

  // Email validation
  if (!formData.companyEmail.trim()) {
    newErrors.companyEmail = "Company email is required";
  } else if (!emailPattern.test(formData.companyEmail)) {
    newErrors.companyEmail = "Please enter a valid email address";
  }

  // Website URL validation
  if (!formData.websiteUrl.trim()) {
    newErrors.websiteUrl = "Website URL is required";
  } else if (!urlPattern.test(formData.websiteUrl)) {
    newErrors.websiteUrl = "Please enter a valid website URL";
  }

  // Address validation
  if (!formData.streetAddress.trim()) newErrors.streetAddress = "Street address is required";
  if (!formData.city.trim()) newErrors.city = "City is required";
  if (!formData.state.trim()) newErrors.state = "State is required";
  if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required";

  // Business type validation
  if (!formData.businessType) newErrors.businessType = "Business type is required";

  // Contact person validation
  if (!formData.contactPersonName.trim()) newErrors.contactPersonName = "Full name is required";
  
  // Contact person phone validation
  if (!formData.contactPersonNumber.trim()) {
    newErrors.contactPersonNumber = "Contact number is required";
  } else if (!phonePattern.test(formData.contactPersonNumber)) {
    newErrors.contactPersonNumber = "Please enter a valid phone number (10-15 digits)";
  }

  // Contact person email validation
  if (!formData.contactPersonEmail.trim()) {
    newErrors.contactPersonEmail = "Email is required";
  } else if (!emailPattern.test(formData.contactPersonEmail)) {
    newErrors.contactPersonEmail = "Please enter a valid email address";
  }

  // Confirmation and date validation
  if (!formData.confirmation) newErrors.confirmation = "You must confirm the information";
  if (!formData.date) newErrors.date = "Date is required";
setFormData(prev => ({
  ...prev,
  companyProfile: !prev.companyProfile
}));
  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    console.log("Form submitted:", formData);
    // Here you would typically make an API call
    navigate('/'); // Or wherever you want to redirect after successful submission
  }
};

  return (
    <div className="w-full h-auto min-h-screen forgound-bg bg-gray-50">
      {/* Header */}
      <div className="flex h-auto items-center py-5 px-6 bg-white">
        <img className="w-16 h-16" src={assests.logo} alt="Logo" />
        <h1 className="text-2xl font-extrabold text-primary-blue ml-2">OS BIZ</h1>
      </div>

      {/* Main Form */}
      <div className="absolute w-full flex justify-center py-10">
        <div className="w-[80%] max-w-5xl bg-white rounded-[10px] rounded-tr-none rounded-tl-none border-t-[10px] border-primary-blue shadow-md p-8">
          <h2 className="text-center text-[28px] font-bold text-primary-blue mb-6">Company Profile</h2>

          <form onSubmit={handleSubmit}>
            {/* Company Info */}
            <h3 className="text-lg font-bold mb-4 text-primary-blue">Organization Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Company Name", name: "companyName" },
                { label: "Contact Number", name: "contactNumber", type: "tel" },
                { label: "Company Email", name: "companyEmail", type: "email" },
                { label: "Website URL", name: "websiteUrl", type: "url" },
              ].map(({ label, name, type = "text" }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <Input
                    type={type}
                    name={name}
                    placeholder={`Enter ${label.toLowerCase()}`}
                    value={formData[name]}
                    onChange={handleChange}
                    error={errors[name]}
                  />
                  {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
                </div>
              ))}
            </div>

            {/* Organization Address */}
            <h3 className="text-lg font-bold mb-4 text-primary-blue">Organization Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Street Address", name: "streetAddress" },
                { label: "Street Address Line 2", name: "streetAddressLine2", required: false },
                { label: "City", name: "city" },
                { label: "State", name: "state" },
                { label: "Postal Code", name: "postalCode" },
              ].map(({ label, name }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <Input
                    type="text"
                    name={name}
                    placeholder={label}
                    value={formData[name]}
                    onChange={handleChange}
                    error={errors[name]}
                  />
                  {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
                </div>
              ))}

              {/* Business Type Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Organization Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                >
                  <option value="">Select Business Type</option>
                  <option value="Corporation">Corporation</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Sole Proprietorship">Sole Proprietorship</option>
                </select>
                {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
              </div>
            </div>

            {/* Contact Person Info */}
            <h3 className="text-lg font-bold mb-4 text-primary-blue">Contact Person Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Full Name", name: "contactPersonName" },
                { label: "Contact Number", name: "contactPersonNumber" },
                { label: "Email", name: "contactPersonEmail", type: "email" },
              ].map(({ label, name, type = "text" }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <Input
                    type={type}
                    name={name}
                    placeholder={label}
                    value={formData[name]}
                    onChange={handleChange}
                    error={errors[name]}
                  />
                  {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
                </div>
              ))}
            </div>

            {/* Declaration */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleChange}
                  className="checkbox checkbox-sm mt-1 text-blue-600 border-gray-300 checked:border-white checked:bg-primary-blue checked:text-white rounded"
                />
                <label htmlFor="confirmation" className="text-sm text-gray-700">
                  I confirm that all information in this document is true to the best of my knowledge.
                </label>
              </div>
              {errors.confirmation && <p className="text-red-500 text-sm mt-1">{errors.confirmation}</p>}
            </div>

            {/* Date Picker */}
            <div className="mb-6 flex gap-1.5">
              <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-1">Date:</label>
              <p className='text-sm font-medium'>{formData.date}</p>
              {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
            </div>

            {/* Submit Button */}
            <div className="text-center mt-4">
              <Button type="submit" className="bg-primary-blue text-white px-6 py-2 rounded-md">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
