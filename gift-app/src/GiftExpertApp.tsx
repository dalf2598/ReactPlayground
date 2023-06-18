import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import React from "react";

const GiftExpertApp: React.FC = () => {
    
    const baseCategories = ['One Punch'];
    const [categories, setCategories] = useState(baseCategories);

    const handleAddCategory = (newCategory: string) => {
      setCategories(categories => [newCategory, ...categories]);
    };

    return (
      <>
        <h2>Fetching Gifts</h2>
        <AddCategory addCategory={handleAddCategory} />
        <hr />
        <ol>
        {categories.map((category: string) => (
            <GifGrid key={category} category={category} />
          ))}
        </ol>
      </>
    );
}
 
export default GiftExpertApp;