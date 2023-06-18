import { ChangeEvent, useState } from "react";

interface AddCategoryProps {
    addCategory: (newItem: string) => void;
}

const AddCategory: React.FC<AddCategoryProps> = ({ addCategory}) => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event:ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(inputValue.trim().length > 2){
            addCategory(inputValue);
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