import React, {useEffect, useRef} from 'react';
import drawChart from '../utils/drawChart';

const ExpenseGraph = ({dataTypes, colors, values}) => {
    const graphRef = useRef(null);
    useEffect(() => {
        if (graphRef.current) {
            drawChart(graphRef.current, colors, values);
        }
    }, [graphRef]);
    return (
        <div className='container'>
            <div className='graph' ref={graphRef} />
        </div>

    )
}

export default React.memo(ExpenseGraph);