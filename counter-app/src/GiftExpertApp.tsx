import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import { v4 as uuidv4 } from 'uuid';

const GiftExpertApp: React.FC = () => {
    
    const baseCategories = ['One Punch'];
    const [categories, setCategories] = useState(baseCategories);
 
    return (
      <>
        <h2>Fetching Gifts</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        <ol>
          {categories.map((category) => (
            <GifGrid key={uuidv4()} category={category} />
          ))}
        </ol>
      </>
    );
}
 
export default GiftExpertApp;