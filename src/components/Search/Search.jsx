import { useState } from 'react'
import Input from '../UI/Input/Input'
import './search.scss'

const Search = () => {
   const [searchText, setSearchText] = useState('')


    return (
      <div className="search">
        <Input placeholder={"Введите название фильма..."} value={searchText} handler={setSearchText} isFocus ={true} />
      </div>
    );
}

export default Search