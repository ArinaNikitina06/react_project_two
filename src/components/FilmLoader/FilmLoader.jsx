import './filmLoader.scss'

const FilmLoader = ({ children, handler, isLoading }) => {
  return (
    <div className={`film-loader ${isLoading ? 'film-loader_disabled' : ''}`} onClick={handler}>
      {children}
    </div>
  );
};

export default FilmLoader