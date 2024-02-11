import CardFamily from "./CardFamily";

const FamilyPage = () => {
  return (
    <>
      <div className="healthTree">
        <h1>My Family Health Tree</h1>
        <div className="family-row">
          <div>
            <CardFamily selected />
          </div>
          <div>
            <div className="family-row">
              <CardFamily hightlighted />
       
            </div>
            <div className="family-row">
              <CardFamily />
              <CardFamily />
              <CardFamily />
            </div>
            <div className="family-row">
              <CardFamily />
              <CardFamily />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyPage;