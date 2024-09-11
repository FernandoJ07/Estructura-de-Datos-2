import { useState } from "react";
import AddCategory from "./componentes/AddCategory";
import { GiftGrid } from "./componentes/GiftGrid";



export const ComponenetApp = () => {

    const [categories, setCategories] = useState(['Comedia', 'Drama']);


    const onAddCategory = (category) => {
        setCategories([...categories, category]);
    }
    return (
        <>
            <h1>GiftExpert</h1>
            <AddCategory onAddCategory={onAddCategory}/>
            <ul className="categoryList">
                {
                    categories.map((category, key) => (
                        <GiftGrid category={category} key={key}/>
                    ))
                }
            </ul>
        </>
    )
};