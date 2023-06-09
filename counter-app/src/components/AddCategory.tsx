import { ChangeEvent, useState } from "react";

interface AddCategoryProps {
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddCategory: React.FC<AddCategoryProps> = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event:ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( categories => [...categories, inputValue] );
            setInputValue('');
        }
    };

    return (  
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}
 
export default AddCategory;