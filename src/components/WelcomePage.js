import CardWelcome from "./CardWelcome";


const dataCard = {
  research: {
    key: "research",
    imgSrc: "/static/img/card-research.png",
    imgAlt: "Research",
    title: "Start With reseatch",
    description: "Uncover family health Iisights for a better tomorrow",
  },
  family: {
    key: "family",
    imgSrc: "/static/img/card-familly-tree.png",
    imgAlt: "Family Tree",
    title: "Look at you Family Tree",
    description: "Explore the Family Tree for health insights",
  },
  recommendations: {
    key: "recommendations",
    imgSrc: "/static/img/card-health.png",
    imgAlt: "Recommendation",
    title: "Safeguard your health",
    description: "Get personalized advice and follow recommendation"

  }
};

const WelcomePage = (props) => {
  const {step} = props;
  return (
    <>
      <h1 className="welcomeTitle">Welcome to GenoCare</h1>
      <div className="row">
        <CardWelcome
          cardData={dataCard.research}
          route={props.route}
          setRoute={props.setRoute}
          active={step > 0}
        />
        <CardWelcome
          cardData={dataCard.family}
          route={props.route}
          setRoute={props.setRoute}
          active={step > 1}
        />
        <CardWelcome
          cardData={dataCard.recommendations}
          route={props.route}
          setRoute={props.setRoute}
          active={step > 2}
        />
      </div>
    </>
  );
};

export default WelcomePage;