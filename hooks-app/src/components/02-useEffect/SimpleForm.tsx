import { ChangeEvent, useState } from "react";

import './effects.css'
import Message from "./Message";

const SimpleForm: React.FC = ( ) => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState; 

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>{
       setFormState({
        ...formState,
        [ target.name ]: target.value
       });
    }

    return (
        <>
        <h1>useEffect</h1>
        <hr/>
        <div className="form-group">
            <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
            <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="example@gmail.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
            />
        </div>

        { ( name === '123') && <Message />}
        </>
    );
}

export default SimpleForm;