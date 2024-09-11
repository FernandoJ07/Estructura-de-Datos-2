import { useState } from "react";
import AddCategory from "./componentes/AddCategory";
import { GifGrid } from "./componentes/GifGrid";



export const ComponenetApp = () => {

    const [categories, setCategories] = useState(['Comedia', 'Drama']);


    const onAddCategory = (category) => {
        setCategories([...categories, category]);
    }
    return (
        <>
            <h1>GifExpert</h1>
            <AddCategory onAddCategory={onAddCategory}/>
            <ul className="categoryList">
                {
                    categories.map((category, key) => (
                        <GifGrid category={category} key={key}/>
                    ))
                }
            </ul>
        </>
    )
};