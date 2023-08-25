import { useContext } from "react";
import { FormContext } from "./FormContext";

function PersonalInfo() {
  const { handleChange, formData } = useContext(FormContext);
  console.log(formData);
  return (
    <>
      <h2 className="text-[#02295a] font-bold text-2xl">Personal info</h2>
      <p className="my-4 text-[#9699ab] font-semibold">
        Please provide your name, email address and phone number.
      </p>

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-[#02295a] font-medium">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Stephen King"
          className="border py-3 px-4 outline-none font-semibold text-[#02295a] rounded-md"
        />
      </div>

      <div className="my-3 flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-[#02295a] font-medium">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="e.g. stephenking@lorem.com"
          className="border py-3 px-4 outline-none font-semibold text-[#02295a] rounded-md"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-[#02295a] font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          name="telephone"
          id="phone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="e.g. +123 456 789"
          className="border py-3 px-4 outline-none font-semibold text-[#02295a] rounded-md"
        />
      </div>
    </>
  );
}

export default PersonalInfo;
