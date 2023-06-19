import React, { useState } from "react";

interface FormValues {
  name: string;
  lastname: string,
  email: string;
  phone: string;
}

interface FormErrors {
  name: string;
  lastname: string,
  email: string;
  phone: string;
}

const MyForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [isTouched, setIsTouched] = useState<FormErrors>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setIsTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
    validateField(name as keyof FormValues, value);
  };

  const validateField = (fieldName: keyof FormValues, value: string) => {
    const newErrors = { ...errors };

    if (fieldName === "name") {
      if (!isTouched.name) {
        newErrors.name = "";
      } else if (value.trim() === "") {
        newErrors.name = "Navn er påkrævet";
      } else if (value.length < 3) {
        newErrors.name = "Navnet skal være mindst 3 tegn";
      } else {
        newErrors.name = "";
      }
    } else if (fieldName === "lastname") {
      if (!isTouched.lastname) {
        newErrors.lastname = "";
      } else if (value.trim() === "") {
        newErrors.lastname = "Efternavn er påkrævet";
      } else if (value.length < 3) {
        newErrors.lastname = "Efternavn skal være mindst 3 tegn";
      } else {
        newErrors.lastname = "";
      }

    } else if (fieldName === "email") {
      if (!isTouched.email) {
        newErrors.email = "";
      } else if (value.trim() === "") {
        newErrors.email = "Email er påkrævet";
      } else if (!isValidEmail(value)) {
        newErrors.email = "Ugyldig email";
      } else {
        newErrors.email = "";
      }
    } else if (fieldName === "phone") {
      if (!isTouched.phone) {
        newErrors.phone = "";
      } else if (value.trim() === "") {
        newErrors.phone = "Telefonnummer er påkrævet";
      } else if (value.length < 8) {
        newErrors.phone = "Telefonnummeret skal være mindst 8 cifre";
      } else {
        newErrors.phone = "";
      }
    }

    setErrors(newErrors);
  };

  const isValidEmail = (email: string) => {
    // En simpel email-validering med regulære udtryk
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let hasErrors = false;

    // Check if there are any errors
    Object.values(errors).forEach((error) => {
      if (error !== "") {
        hasErrors = true;
      }
    });

    // Check if any required fields are not filled in
    Object.values(formValues).forEach((value) => {
      if (value.trim() === "") {
        hasErrors = true;
      }
    });

    if (hasErrors) {
      alert("Indtast venligst input filterne korrekt");
    } else {
      alert("Sender");
    }
  };

  return (
    <form className="w-full h-[400px] p-2 bg-gray-200 rounded-[5px]" onSubmit={handleSubmit}>


      {/* Fornavn */}
      <div>
        <label>
          Fornavn:
          <input
            className={`w-full border-[1px] p-2 ${
              isTouched.name
                ? errors.name
                  ? "border-red-400"
                  : formValues.name.length >= 5
                  ? "border-green-500"
                  : "border-black"
                : "border-black"
            }`}
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </label>
        {isTouched.name && errors.name && <span>{errors.name}</span>}
      </div>

      {/* Efternavn */}
      <div>
        <label>
          Efternavn:
          <input
            className={`w-full border-[1px] p-2 ${
              isTouched.lastname
                ? errors.lastname
                  ? "border-red-400"
                  : formValues.lastname.length >= 5
                  ? "border-green-500"
                  : "border-black"
                : "border-black"
            }`}
            type="text"
            name="lastname"
            value={formValues.lastname}
            onChange={handleInputChange}
          />
        </label>
        {isTouched.name && errors.name && <span>{errors.name}</span>}
      </div>


      <div>
        <label>
          Email:
          <input
            className={`w-full border-[1px] p-2 ${
              isTouched.email
                ? errors.email
                  ? "border-red-400"
                  : formValues.email.length >= 10
                  ? "border-green-500"
                  : "border-black"
                : "border-black"
            }`}
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </label>
        {isTouched.email && errors.email && <span>{errors.email}</span>}
      </div>


      <div>
        <label>
          Password:
          <input
            className={`w-full border-[1px] p-2 border-black`}
            type="password"
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Gentag password:
          <input
            className={`w-full border-[1px] p-2 border-black`}
            type="password"
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="flex flex-row gap-[10px] py-2">
        <button className="w-full border-[1px] bg-blue p-2 text-light" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export default MyForm;
