const CardFamily = ({selected, hightlighted}) => {
  return (
    <>
     <div className={"card-family" + (selected === true?  " selected" : "") + (hightlighted === true?  " hightlighted" : "")}>
      <p className="title">Kelly</p>
      <p className="subtitle">Grandmother</p>
      <p className="">28.06.1943 - 09.01.2024</p>
      <div className="line"></div>
      <p className="subtitle2">Major medical conditions:</p>
      <p className="">Diabetes, 2005</p>
      <p className="">Asthma, 2013</p>
      <p className="subtitle2">Lifestyle issues:</p>
      <p className="">Overweight, smoker</p>

      </div>
    </>
  );
};

export default CardFamily;