import { useState } from "react";
import Header from "./Header";
import ComponentPicker from "./ComponentPicker";

const App = () => {
  const [route, setRoute] = useState("welcome");
  const [step, setStep] = useState(1);


  return (
    <>
      
      <Header route={route} setRoute={setRoute} step={step} />
      <main>
        <ComponentPicker route={route}  setRoute={setRoute} step={step}/>
      </main>
    </>
  );
};

export default App;