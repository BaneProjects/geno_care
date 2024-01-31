const CardWelcome = (props) => {
  const cardData = props.cardData;
  return (
    <>
      <div className={"card" + (props.active === true ? " active" : "") + (" " + cardData.key)}>
        <div className="img">
          <img src={cardData.imgSrc} alt={cardData.imgAlt} />
        </div>
        <h3>{cardData.title}</h3>
        <p>{cardData.description}</p>
      </div>
    </>
  );
};

export default CardWelcome;