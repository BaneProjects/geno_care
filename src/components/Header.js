

const Header = (props) => {
  const {
    step,
    route,
    setRoute
  } = props;

  return (
    <>
      <header>
        <div className="logo" onClick={() => { setRoute("welcome") }} ><img src="/static/img/logo.png" /></div>
        <nav>
          <div
            className={"link" + (step > 0 ? " active" : "")}
            onClick={() => {
              if (step > 0) {
                setRoute("research");
              }
            }}
          >Research</div>
          <div
            className={"link" + (step > 1 ? " active" : "")}
            onClick={() => {
              if (step > 1) {
                setRoute("family");
              }
            }}
          >Family Tree</div>
          <div
            className={"link" + (step > 2 ? " active" : "")}
            onClick={() => {
              if (step > 2) {
                setRoute("recommendations");
              }
            }}
          >Recommendation</div>
        </nav>
        <div className="avatar">i</div>
      </header >
    </>
  );
};

export default Header;