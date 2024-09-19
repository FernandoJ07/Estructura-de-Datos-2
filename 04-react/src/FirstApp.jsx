import { MultipleCustomHooks } from "./hooks";

const FirstApp = ({value}) => {

    // const {counter, handleAdd, handleSubtract, handleReset} = useCounter(value);
    return (
        <>
            {/* <h1>Counter: {counter}</h1>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button> */}
            <MultipleCustomHooks value={value}/>
        </>
    );
}

export default FirstApp;