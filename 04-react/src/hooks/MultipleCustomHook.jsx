import { useCounter } from "./useCounter";
import { useFetch } from "./useFetch";

export const MultipleCustomHooks = ({value}) => {
    const {counter, handleAdd} = useCounter(value);
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                isLoading ? (
                    <p>Loading...</p>
                ) : hasError ? (
                    <p>Error: {hasError}</p>
                ) : data && (
                    <div>
                        <p>{data[0].author}</p>
                        <blockquote>{data[0].quote}</blockquote>
                    </div>
                )
            }
            <button onClick={handleAdd}>Next quote</button>
        </div>
    );
};