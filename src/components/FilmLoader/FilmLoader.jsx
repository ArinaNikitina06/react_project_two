import './filmLoader.scss'

const FilmLoader = ({children, handler}) => {
return <div className="film-loader" onClick={handler}>{children}</div>
}

export default FilmLoader