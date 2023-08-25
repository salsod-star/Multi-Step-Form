import { useState } from "react";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  telephone: "",
  plan: "",
  billing: "monthly",
  promoMonths: 2,
  addons: [],
};

function useFormController(...stagesComponent) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [currentFormStage, setCurrentFormStage] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let value = e.target.value;

    if (name == "addons") {
      if (formData.addons[value]) {
        formData.addons.splice(formData.addons.indexOf(name), 1);
        return;
      }
      setFormData((prev) => ({ ...prev, [name]: [...prev.addons, value] }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
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

  function handleBillingPeriod(e) {
    const period = e.target.textContent.toLowerCase();

    if (formData.billing === "monthly" && period === "monthly") return;
    if (formData.billing === "yearly" && period === "yearly") return;

    if (formData.billing === "monthly") {
      setFormData((prev) => ({ ...prev, billing: "yearly" }));
      return;
    }

    setFormData((prev) => ({ ...prev, billing: "monthly" }));
  }

  return {
    formData,
    handleChange,
    handleBillingPeriod,
    currentFormStage,
    handleNext,
    handlePrev,
    stagesComponent,
    currentComponent: stagesComponent[currentFormStage],
  };
}

export default useFormController;
