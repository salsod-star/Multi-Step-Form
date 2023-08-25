import { useContext } from "react";
import { FormContext } from "./FormContext";

function Addons() {
  const { formData, handleChange } = useContext(FormContext);

  console.log(formData);
  return (
    <>
      <h2 className="text-[#02295a] font-bold text-2xl">Pick add-ons</h2>
      <p className="my-4 text-[#9699ab] font-semibold">
        Add-ons help enhance your gaming experience
      </p>

      <div
        className={`flex items-center gap-4 rounded-lg border-2 py-3 px-4 cursor-pointer ${
          formData.addons["online service"] ? "border-[#473dff]" : ""
        } hover:border-[#473dff]`}
      >
        <input
          type="checkbox"
          name="addons"
          id="service"
          value="online service"
          onClick={handleChange}
          className="cursor-pointer"
          required
        />
        <label
          htmlFor="service"
          className="flex items-center justify-between cursor-pointer w-full"
        >
          <div className="flex flex-col">
            <span className="text-[#02295a] font-bold text-base">Online service</span>
            <span className="text-sm text-[#9699ab] font-medium">
              Access to multiplayer
            </span>
          </div>
          <span className="text-[#473dff] ml-auto font-bold text-xs">
            {formData.billing === "yearly"
              ? "+$" + (12 - formData.promoMonths) * 1 + "/yr"
              : "+$1/mo"}
          </span>
        </label>
      </div>
      <div
        className={`flex items-center gap-4 rounded-lg border-2 my-3 py-3 px-4 cursor-pointer ${
          formData.addons["larger storage"] ? "border-[#473dff]" : ""
        } hover:border-[#473dff]`}
      >
        <input
          type="checkbox"
          name="addons"
          id="storage"
          data="larger storage"
          onClick={handleChange}
          className="cursor-pointer"
          required
        />
        <label
          htmlFor="storage"
          className="flex items-center justify-between cursor-pointer w-full"
        >
          <div className="flex flex-col">
            <span className="text-[#02295a] font-bold text-base">Larger storage</span>
            <span className="text-sm text-[#9699ab] font-medium">
              Extra 1TB cloud save
            </span>
          </div>
          <span className="text-[#473dff] ml-auto font-bold text-xs">
            {formData.billing === "yearly"
              ? "+$" + (12 - formData.promoMonths) * 2 + "/yr"
              : "+$2/mo"}
          </span>
        </label>
      </div>
      <div
        className={`flex items-center gap-4 rounded-lg border-2 py-3 px-4 cursor-pointer ${
          formData.addons["customizable profile"] ? "border-[#473dff]" : ""
        } hover:border-[#473dff]`}
      >
        <input
          type="checkbox"
          name="addons"
          id="profile"
          className="cursor-pointer"
          required
        />
        <label
          htmlFor="profile"
          className="flex items-center justify-between cursor-pointer w-full"
        >
          <div className="flex flex-col">
            <span className="text-[#02295a] font-bold text-base">
              Customizable profile
            </span>
            <span className="text-sm text-[#9699ab] font-medium">
              Custom theme on your profile
            </span>
          </div>
          <span className="text-[#473dff] ml-auto font-bold text-xs">
            {formData.billing === "yearly"
              ? "+$" + (12 - formData.promoMonths) * 2 + "/yr"
              : "+$2/mo"}
          </span>
        </label>
      </div>
    </>
  );
}

export default Addons;
