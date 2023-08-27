import arcade from "/src/assets/images/icon-arcade.svg";
import advanced from "/src/assets/images/icon-advanced.svg";
import pro from "/src/assets/images/icon-pro.svg";
import { useContext } from "react";
import { FormContext } from "./FormContext";

function PackagePlan() {
  const { formData, handleChange, handleBillingPeriod } = useContext(FormContext);
  console.log(formData);
  return (
    <>
      <h2 className="text-[#02295a] font-bold text-2xl">Select your plan</h2>
      <p className="my-4 text-[#9699ab] font-semibold">
        You have the option of monthly or yearly billing
      </p>

      <div>
        <label
          className={`flex items-center gap-4 rounded-lg border-2 py-3 px-4 cursor-pointer ${
            formData.plan.package === "arcade" ? "border-[#473dff]" : ""
          } hover:border-[#473dff]`}
          htmlFor="arcade"
        >
          <img src={arcade} alt="arcade icon" />
          <div className="flex flex-col">
            <span className="text-[#02295a] font-bold text-base">Arcade</span>
            <span className="text-[#9699ab]">
              {formData.plan.billing === "yearly"
                ? "$" + (12 - formData.plan.promoMonths) * 9
                : "$9/mo"}
            </span>
            {formData.plan.billing === "yearly" && (
              <span className="text-[#02295a] text-xs">2 months free</span>
            )}
          </div>
        </label>
        <input
          type="radio"
          name="plan"
          id="arcade"
          // required
          className="opacity-0"
          value="arcade"
          onChange={handleChange}
        />
      </div>

      <div className="">
        <label
          className={`flex items-center gap-4 rounded-lg border-2 py-3 px-4 cursor-pointer ${
            formData.plan.package === "advanced" ? "border-[#473dff]" : ""
          } hover:border-[#473dff]`}
          htmlFor="advanced"
        >
          <img src={advanced} alt="arcade icon" />

          <div className="flex flex-col">
            <span className="text-[#02295a] font-bold text-base">Advanced</span>
            <span className="text-[#9699ab]">
              {formData.plan.billing === "yearly"
                ? "$" + (12 - formData.plan.promoMonths) * 12
                : "$12/mo"}
            </span>
            {formData.plan.billing === "yearly" && (
              <span className="text-[#02295a] text-xs">2 months free</span>
            )}
          </div>
        </label>
        <input
          type="radio"
          name="plan"
          id="advanced"
          value="advanced"
          // required
          className="appearance-none"
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          className={`flex items-center gap-4 rounded-lg border-2 py-3 px-4 cursor-pointer ${
            formData.plan.package === "pro" ? "border-[#473dff]" : ""
          } hover:border-[#473dff]`}
          htmlFor="pro"
        >
          <img src={pro} alt="arcade icon" />

          <div className="flex flex-col">
            <span className="text-[#02295a] font-bold text-base">Pro</span>
            <span className="text-[#9699ab]">
              {formData.plan.billing === "yearly"
                ? "$" + (12 - formData.plan.promoMonths) * 15
                : "$15/mo"}
            </span>
            {formData.plan.billing === "yearly" && (
              <span className="text-[#02295a] text-xs">2 months free</span>
            )}
          </div>
        </label>
        <input
          type="radio"
          name="plan"
          id="pro"
          value="pro"
          onChange={handleChange}
          // required
          className="appearance-none"
        />
      </div>

      <div className="flex items-center justify-center gap-4 mt-6 py-3 bg-[#f0f6ff] rounded-md">
        <span
          className={`text-[#02295a] font-bold text-base cursor-pointer ${
            formData.plan.billing === "monthly" ? "text-[#02295a]" : "text-[#9699ab]"
          }`}
          onClick={handleBillingPeriod}
        >
          Monthly
        </span>
        <span
          className={`
        w-9 h-[19px] bg-[#02295a] rounded-3xl relative flex items-center px-1 transition
        before:w-3 before:h-3 before:bg-white before:rounded-full before:block ${
          formData.plan.billing === "yearly" && "before:translate-x-full"
        }`}
        ></span>
        <span
          className={` font-bold text-base cursor-pointer ${
            formData.plan.billing === "yearly" ? "text-[#02295a]" : "text-[#9699ab]"
          }`}
          onClick={handleBillingPeriod}
        >
          Yearly
        </span>
      </div>
    </>
  );
}

export default PackagePlan;
