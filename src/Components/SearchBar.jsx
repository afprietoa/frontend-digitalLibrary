import React from 'react'
import lens from '../assets/iconos/lupa.svg'

const SearchBar = () => {
    return (
        <>
            <div className="form" >
                <input
                    type="text"
                    placeholder="Buscar aquí por nombre de sede"
                    name='searchText'
                    autoComplete='off'
                    className="form__input"

                />
                <button className="form__btn"><img className="icon-search" src={lens} alt="..."/></button>
                
            </div>
        </>
    )
}

export default SearchBar
