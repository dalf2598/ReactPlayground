import useCounter from '../../hooks/useCounter';
import useFecth from '../../hooks/useFetch';
import '../01-useState/counter.css';

const MultipleCustomHooks: React.FC = ( ) => {
    
    const {counter, increment} = useCounter(1); 

    const {loading, data} = useFecth(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const {author, quote} = (data) ? data[0] : { author: '', quote: ''};

    return (
      <div>
        <h1>BreakingBad Quotes!!! </h1>
        <hr />
        {loading ? (
          <div className="alert alert-info text-center">Loading</div>
        ) : (
          <blockquote className="blockquote text-center">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )}
        <button className='btn btn-primary' onClick={() => increment()}>
            Next Quote
        </button>
      </div>
    );
}

export default MultipleCustomHooks;