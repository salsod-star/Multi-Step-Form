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
          formData.addons.find((el) => el.type === "online service")
            ? "border-[#473dff]"
            : ""
        } hover:border-[#473dff]`}
      >
        <input
          onClick={handleChange}
          type="checkbox"
          name="addons"
          id="service"
          value="online service"
          className={`cursor-pointer appearance-none transition-all duration-75
          before:w-4 before:h-4 before:rounded-[4px] before:border before:border-[#d6d9e6] before:block
          ${
            formData.addons.find((el) => el.type === "online service")
              ? "before:bg-[url('./assets/images/icon-checkmark.svg')] before:bg-no-repeat before:p-2 before:bg-[4px 4px] before:bg-center before:bg-[#473dff] before:border-[#473dff]"
              : ""
          }`}
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
            {formData.plan.billing === "yearly"
              ? "+$" + (12 - formData.plan.promoMonths) * 1 + "/yr"
              : "+$1/mo"}
          </span>
        </label>
      </div>
      <div
        className={`flex items-center gap-4 rounded-lg border-2 my-3 py-3 px-4 cursor-pointer ${
          formData.addons.find((el) => el.type === "larger storage")
            ? "border-[#473dff]"
            : ""
        } hover:border-[#473dff]`}
      >
        <input
          onClick={handleChange}
          type="checkbox"
          name="addons"
          id="storage"
          value="larger storage"
          className={`cursor-pointer appearance-none transition-all duration-75
          before:w-4 before:h-4 before:rounded-[4px] before:border before:border-[#d6d9e6] before:block
          ${
            formData.addons.find((el) => el.type === "larger storage")
              ? "before:bg-[url('./assets/images/icon-checkmark.svg')] before:bg-no-repeat before:p-2 before:bg-[4px 4px] before:bg-center before:bg-[#473dff] before:border-[#473dff]"
              : ""
          }`}
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
            {formData.plan.billing === "yearly"
              ? "+$" + (12 - formData.plan.promoMonths) * 2 + "/yr"
              : "+$2/mo"}
          </span>
        </label>
      </div>
      <div
        className={`flex items-center gap-4 rounded-lg border-2 py-3 px-4 cursor-pointer ${
          formData.addons.find((el) => el.type === "customizable profile")
            ? "border-[#473dff]"
            : ""
        } hover:border-[#473dff]`}
      >
        <input
          type="checkbox"
          name="addons"
          id="profile"
          value="customizable profile"
          onClick={handleChange}
          className={`cursor-pointer appearance-none transition-all duration-75
          before:w-4 before:h-4 before:rounded-[4px] before:border before:border-[#d6d9e6] before:block
          ${
            formData.addons.find((el) => el.type === "customizable profile")
              ? "before:bg-[url('./assets/images/icon-checkmark.svg')] before:bg-no-repeat before:p-2 before:bg-[4px 4px] before:bg-center before:bg-[#473dff] before:border-[#473dff]"
              : ""
          }`}
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
            {formData.plan.billing === "yearly"
              ? "+$" + (12 - formData.plan.promoMonths) * 2 + "/yr"
              : "+$2/mo"}
          </span>
        </label>
      </div>
    </>
  );
}

export default Addons;
