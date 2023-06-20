import { FormEvent, useEffect } from "react";
import useForm from "../../hooks/useForm";
import Form from "../../models/Form";
import './effects.css'

const FormWithCustomHook: React.FC = ( ) => {
    
    const initialState : Form = {
        name: '',
        email: '',
        password: '',
    };

    const { values: formValue, handleInputChange }= useForm(initialState);

    const { name, email, password } = formValue; 

    useEffect(() => {
      console.log('email cambio');  
    }, [email])
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(formValue);
    }

    return (
        <form onSubmit={handleSubmit}>
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
        <div className="form-group">
            <input 
                type="password"
                name="password"
                className="form-control"
                placeholder="*****"
                value={password}
                onChange={handleInputChange}
            />
        </div>
        <button type="submit" className="btn btn-primary">
            Save
        </button>
        </form>
    );
}

export default FormWithCustomHook;