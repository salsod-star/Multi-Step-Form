import { useState } from "react";

const INITIAL_FORM_DATA = {
  personal: {
    name: "",
    email: "",
    telephone: "",
  },
  plan: {
    package: "arcade",
    price: 9,
    billing: "monthly",
    promoMonths: 2,
  },
  addons: [],
};

const PACKAGE_PRICE = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

const ADDONS_PRICE = {
  "online service": 1,
  "larger storage": 2,
  "customizable profile": 2,
};

function useFormController(...stagesComponent) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [currentFormStage, setCurrentFormStage] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let value = e.target.value;

    if (["name", "email", "telephone"].includes(name)) {
      setFormData((prev) => ({ ...prev, personal: { ...prev.personal, [name]: value } }));
      return;
    }

    if (name === "plan") {
      let promo = 12 - formData.plan.promoMonths;

      setFormData((prev) => ({
        ...prev,
        [name]: { ...prev.plan, package: value, price: PACKAGE_PRICE[value] },
      }));

      // Update Billing price
      if (formData.plan.billing === "yearly") {
        setFormData((prev) => ({
          ...prev,
          plan: { ...prev.plan, price: prev.plan.price * promo },
        }));
      }
      return;
    }

    if (name === "addons") {
      // Remove previous selected addons
      if (formData.addons.find((el) => el.type === value)) {
        setFormData((prev) => ({
          ...prev,
          [name]: prev.addons.filter((service) => service.type !== value),
        }));
        return;
      }

      // Add addons
      setFormData((prev) => ({
        ...prev,
        [name]: [
          ...prev.addons,
          {
            type: value,
            price: ADDONS_PRICE[value],
          },
        ],
      }));

      // Update Billing price
      if (formData.plan.billing === "yearly") {
        setFormData((prev) => ({
          ...prev,
          addons: prev.addons.map((addon) => ({
            ...addon,
            price: ADDONS_PRICE[addon.type] * (12 - prev.plan.promoMonths),
          })),
        }));
      }

      return;
    }
  };

  const handleNext = () => {
    setCurrentFormStage((prev) => {
      if (prev >= stagesComponent.length - 1) {
        return prev;
      }

      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentFormStage((prev) => {
      if (prev <= 0) {
        return prev;
      }

      return prev - 1;
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (currentFormStage <= stagesComponent.length) {
      handleNext();
      setCanSubmit(false);
      return;
    }

    setCanSubmit(true);
    console.log(canSubmit, currentFormStage);
  }

  function handleBillingPeriod(e) {
    const period = e.target.textContent.toLowerCase();
    let promo = 12 - formData.plan.promoMonths;

    if (formData.plan.billing === "monthly" && period === "monthly") return;
    if (formData.plan.billing === "yearly" && period === "yearly") return;

    if (formData.plan.billing === "monthly") {
      setFormData((prev) => ({
        ...prev,
        plan: {
          ...prev.plan,
          billing: "yearly",
          price: prev.plan.price * promo,
        },

        addons: prev.addons.map((addon) => ({
          ...addon,
          price: ADDONS_PRICE[addon.type] * (12 - prev.plan.promoMonths),
        })),
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      plan: { ...prev.plan, billing: "monthly", price: PACKAGE_PRICE[prev.plan.package] },
      addons: prev.addons.map((addon) => ({
        ...addon,
        price: ADDONS_PRICE[addon.type],
      })),
    }));
  }

  return {
    formData,
    handleChange,
    handleBillingPeriod,
    currentFormStage,
    handleSubmit,
    handlePrev,
    canSubmit,
    setCurrentFormStage,
    stagesComponent,
    currentComponent: stagesComponent[currentFormStage],
  };
}

export default useFormController;
