import { useState } from 'react';

interface IProps {
    description: string;
    defaultCount: number;
}

const Counter = ({ description, defaultCount }: IProps) => {
    const [count, setCount] = useState(defaultCount);
    const [incrementor, setIncrementor] = useState(1);

    return (
        <div>
            <h2>
                DESC: {description} - DC: {defaultCount}
            </h2>
            <label>
                Incrementor:
                <input value={incrementor} onChange={(event) => setIncrementor(parseInt(event.target.value) || 0)} type="number" />
            </label>
            <button aria-label="decrement" onClick={() => setCount(count - incrementor)}> - </button>
            Current Count: {count}
            <button aria-label="increment" onClick={() => setCount(count + incrementor)}> + </button>
        </div>
    );
};

export default Counter;
