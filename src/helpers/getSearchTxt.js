import data from "../data/data"

export const getSearchTxt = (name ='') =>{

    console.log(name)
    if(name.length === 0){
        return [];
    }

    name = name.toLowerCase();

    return data.filter(datum => datum.nombre.toLowerCase().includes(name))
}