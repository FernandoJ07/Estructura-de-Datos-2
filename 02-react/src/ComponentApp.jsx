import { useState } from "react";
import AddCategory from "./componentes/AddCategory";



export const ComponenetApp = () => {

    const [categories, setCategories] = useState(['Comedia', 'Drama']);


    const onAddCategory = (category) => {
        setCategories([...categories, category]);
    }
    return (
        <>
            <h1>Categoría Películas</h1>
            <AddCategory onAddCategory={onAddCategory}/>
            <ul className="categoryList">
                {
                    categories.map((category, index) => (
                        <li key={index}>{category}</li>
                    ))
                }
            </ul>
        </>
    )
};