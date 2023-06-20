import '../01-useState/counter.css'

const FocusScreen: React.FC = ( ) => {

    const handleClick = () => {
        document.querySelector('input')?.select();
    }
    
    return ( 
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                className='form-control'
                placeholder='Name'
            />

            <button 
                className='btn btn-outline-primary'
                onClick={handleClick}
            >
                Focus
            </button>

        </div>
    );
}

export default FocusScreen;