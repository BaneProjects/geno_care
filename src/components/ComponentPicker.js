import WelcomePage from "./WelcomePage";
import ReaserchPage from "./ReaserchPage";
import FamilyPage from "./FamilyPage";
import RecommendationsPage from "./RecommendationsPage";
const ComponentPicker = ({ route, step, setRoute }) => {
  switch (route) {
    case  "welcome":
      return <WelcomePage route={route} setRoute={setRoute} step={step} />;
    case "research":
      return <ReaserchPage route={route} setRoute={setRoute} step={step} />;
    case "family":
      return <FamilyPage route={route} setRoute={setRoute} step={step} />;
    case "recommendations":
      return <RecommendationsPage route={route} setRoute={setRoute} step={step} />;
    default:
      return (
        
        <h3>
          No component for navigation value
          {route} found
        </h3>
      );
  }
};

export default ComponentPicker;