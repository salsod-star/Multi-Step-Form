/* eslint-disable react/prop-types */
function FormStage({ currentFormStage, stagesComponent }) {
  return (
    <div className="flex items-start justify-center gap-4 pt-7 h-56 bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center">
      {stagesComponent.map((_, index) => (
        <span
          key={index + 1}
          className={`w-[35px] h-[35px] rounded-[100%] p-2 border  font-bold flex items-center justify-center ${
            currentFormStage === index
              ? "text-[#02295a] bg-[#bfe2fd] border-[#bfe2fd]"
              : "text-white border-[#fff]"
          }`}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}

export default FormStage;
