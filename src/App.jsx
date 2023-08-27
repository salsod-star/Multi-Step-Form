import Form from "./components/Form";
import useFormController from "./components/form/useFormControl";
import PersonalInfo from "./components/form/PersonalInfo";
import PackagePlan from "./components/form/PackagePlan";
import Addons from "./components/form/Addons";
import { FormContext } from "./components/form/FormContext";
import Cart from "./components/form/Cart";

function App() {
  const Controller = useFormController(
    <PersonalInfo />,
    <PackagePlan />,
    <Addons />,
    <Cart />
  );
  return (
    <>
      <FormContext.Provider value={Controller}>
        <Form />
      </FormContext.Provider>
    </>
  );
}

export default App;
