import MultipleCustomHooks from '../03-samples/MultipleCustomHooks';
import '../01-useState/counter.css'
import { useState } from 'react';

const RealExampleRef: React.FC = ( ) => {
    
    const [show, setShow] = useState(false);

    return ( 
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button 
                className='btn btn-primary mt-5'
                onClick={ () =>{
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>
        </div>
    );
}

export default RealExampleRef;