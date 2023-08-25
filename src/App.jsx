import Form from "./components/Form";
import useFormController from "./components/form/useFormControl";
import PersonalInfo from "./components/form/PersonalInfo";
import PackagePlan from "./components/form/PackagePlan";
import Addons from "./components/form/Addons";
import { FormContext } from "./components/form/FormContext";

function App() {
  const Controller = useFormController(<PersonalInfo />, <PackagePlan />, <Addons />);
  return (
    <>
      <FormContext.Provider value={Controller}>
        <Form />
      </FormContext.Provider>
    </>
  );
}

export default App;
