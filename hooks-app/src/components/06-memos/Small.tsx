import { memo } from "react";

interface SmallProps {
    counterValue: number;
}

const Small: React.FC<SmallProps> = ( {counterValue} ) => {
    console.log(':c');
    return ( 
        <h2>Counter: <small>{counterValue}</small></h2>
    );
}

const MemoSmall = memo(Small)
export default MemoSmall;