import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import lens from '../assets/iconos/lupa.svg'
import { getSearchTxt } from '../helpers/getSearchTxt'
import { useForm } from '../hooks/useForm'

const SearchBar = ({setInstitut}) => {

    const navigate = useNavigate()
    const location = useLocation()

    console.log(location)

    const { q = ''} = queryString.parse(location.search)

    console.log(q)
    const [values, handleInputChange] = useForm({
        searchText: q,
    })
    const {searchText} = values

    const institut = useMemo(() => getSearchTxt(q), [q])

    
    const handleSearch = (e) =>{
        e.preventDefault()
        console.log(searchText)
        navigate(`?q=${searchText}`)
        console.log(typeof(institut))
        
        handleClick()
        
    }
   
    const handleClick = () =>{
        console.log(institut)
        setInstitut(institut)
        
        
      //   reset()   
    }

    
    
    return (
        <>
            <form className="form" onSubmit={handleSearch} >
                <input
                    type="text"
                    placeholder="Buscar aquí por nombre de sede"
                    name='searchText'
                    autoComplete='off'
                    className="form__input"
                    value={searchText}
                    onChange={handleInputChange}

                />
                <button className="form__btn" onClick={()=>handleClick()}><img className="icon-search" src={lens} alt="..."/></button>
                
            </form>
        </>
    )
}

export default SearchBar
