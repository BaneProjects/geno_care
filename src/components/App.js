import { useState } from "react";
import Header from "./Header";
import WelcomePage from "./WelcomePage";
import ReaserchPage from "./ReaserchPage";
import FamilyPage from "./FamilyPage";
import RecommendationsPage from "./RecommendationsPage";

const App = () => {
  const [route, setRoute] = useState("welcome");
  const [step, setStep] = useState(1);


  return (
    <>
      <Header route={route} setRoute={setRoute} step={step} />
      <main>
        {
          route === "welcome" && (
            <WelcomePage route={route} setRoute={setRoute} step={step}/>
          )
        }
        {
          route === "research" && (
            <ReaserchPage route={route} setRoute={setRoute} step={step}/>
          )
        }
        {
          route === "family" && (
            <FamilyPage route={route} setRoute={setRoute} step={step}/>
          )
        }
        {
          route === "recommendations" && (
            <RecommendationsPage route={route} setRoute={setRoute} step={step}/>
          )
        }
      </main>
    </>
  );
};

export default App;