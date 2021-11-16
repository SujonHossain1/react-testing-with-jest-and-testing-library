import { useState } from 'react';

interface IProps {
    description: string;
    defaultCount: number;
}

const Counter = ({ description, defaultCount }: IProps) => {
    const [count, setCount] = useState(defaultCount);
    return (
        <div>
            <h2>
                DESC: {description} - DC: {defaultCount}
            </h2>
            <button onClick={() => setCount(count - 1)}> - </button>
            Current Count: {count}
            <button onClick={() => setCount(count + 1)}> + </button>
        </div>
    );
};

export default Counter;
