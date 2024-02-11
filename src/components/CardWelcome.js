const CardWelcome = (props) => {
  const {
    cardData,
    active,
    route,
    setRoute
  } = props;
  return (
    <>
      <div
        className={"card" + (active === true ? " active" : "") + (" " + cardData.key)}
       onClick={() => {
        if (active === true) {
          setRoute(cardData.key);
        }
       }}
      >
        <h3>{cardData.title}</h3>
        <p>{cardData.description}</p>
      </div>
    </>
  );
};

export default CardWelcome;