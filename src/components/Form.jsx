import { useContext } from "react";
import FormContainer from "./form/FormContainer";
import FormStage from "./form/FormStage";
import { FormContext } from "./form/FormContext";

function Form() {
  const { handlePrev, handleNext, currentFormStage, stagesComponent, currentComponent } =
    useContext(FormContext);

  return (
    <section className="h-screen flex flex-col text-base bg-[#f0f6ff]">
      <FormStage currentFormStage={currentFormStage} stagesComponent={stagesComponent} />
      <form className="h-full flex flex-col relative">
        <FormContainer>{currentComponent}</FormContainer>
        <div className="flex gap-5 items-center justify-between px-4 bg-[#fff] h-[70px] mt-auto">
          {currentFormStage > 0 && (
            <button
              type="button"
              className="text-[#9699ab] font-bold"
              onClick={handlePrev}
            >
              Go Back
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            className="bg-[#02295a] ml-auto outline-none font-medium py-2 px-4 rounded-[4px] text-[#fff]"
          >
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
