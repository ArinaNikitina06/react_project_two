import "./film.scss";

const Film = () => {
  return (
    <div className="film">
      <header className="film__img-wrapper">
        <img
          className="film__img"
          src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_67a7cf0d8fb6af7e47d317ee_67a7d16efb735d388837540d/scale_1200"
          alt=""
        />
      </header>
      <footer className="film__content">
        {/* <div className="film__control">
          <button className="btn btn_primary">play</button>
          <div className="film__control-right">
            <button className="btn btn_secondary">fav</button>
            <button className="btn btn_secondary">send</button>
          </div>
        </div> */}
        <h3 className="film__title">Lorem ipsum dolor sit amet</h3>
        <span className="film__staff">Lorem ipsum</span>
        <div className="film__props">
          <div className="film__props-item">
            <span className="film__props-text">Gener</span>
            <span className="film__props-value">Drama</span>
          </div>
          <div className="film__props-item">
            <span className="film__props-text">Gener</span>
            <span className="film__props-value">Drama</span>
          </div>
          <div className="film__props-item">
            <span className="film__props-text">Gener</span>
            <span className="film__props-value">Drama</span>
          </div>
          <div className="film__props-item">
            <span className="film__props-text">Gener</span>
            <span className="film__props-value">Drama</span>
          </div>
        </div>
        <button className="btn btn_primary">show film</button>
      </footer>
    </div>
  );
};

export default Film;
