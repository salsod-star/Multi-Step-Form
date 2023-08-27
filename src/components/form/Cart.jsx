import { useContext } from "react";
import { FormContext } from "./FormContext";

function Cart() {
  const { formData, setCurrentFormStage } = useContext(FormContext);

  return (
    <>
      <h2 className="text-[#02295a] font-bold text-2xl">Finishing up</h2>
      <p className="my-4 text-[#9699ab] font-semibold">
        Double-check everything looks OK before confirming.
      </p>

      <div className="flex flex-col gap-4 p-3 bg-[#f0f6ff] rounded-md">
        <div className="flex justify-between items-center pb-3 border-b border-[#d6d9e6]">
          <p className="flex flex-col">
            <span className="text-[#02295a] font-bold">
              {formData.plan.package[0].toUpperCase() + formData.plan.package.slice(1)} (
              {formData.plan.billing[0]?.toUpperCase() + formData.plan.billing?.slice(1)})
            </span>
            <span
              className="underline font-medium text-sm cursor-pointer text-[#9699ab]"
              onClick={() => setCurrentFormStage(1)}
            >
              Change
            </span>
          </p>
          <p className="text-[#02295a] font-bold">
            ${formData.plan.price}/{formData.plan.billing === "yearly" ? "yr" : "mo"}
          </p>
        </div>

        {formData.addons.map((addon, index) => (
          <div key={index} className="flex justify-between items-center">
            <p className="text-[#9699ab] font-medium">
              {addon.type[0].toUpperCase() + addon.type.slice(1)}
            </p>
            <p className="font-medium text-sm text-[#02295a]">
              +${addon.price}/{formData.plan?.billing === "yearly" ? "yr" : "mo"}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center px-3 mt-5">
        <p className="text-[#9699ab] font-medium">
          Total (per {formData.plan.billing.slice(0, -2)})
        </p>
        <p className="font-bold text-[#473dff]">
          $
          {formData.addons?.reduce(
            (prev, curr) => prev + curr.price,
            formData.plan?.price
          )}
          /{formData.plan?.billing === "yearly" ? "yr" : "mo"}
        </p>
      </div>
    </>
  );
}

export default Cart;
