// import React, { createContext, useContext } from 'react'
// import "./Chart.css"
//
// const ChartContext = createContext();
// export const useChartDimensions = () => useContext(ChartContext)
//
// const Chart = ({ dimensions = {}, children }) => {
//
//     <ChartContext.Provider value={dimensions}>
//         <svg className="Chart" width={dimensions.width} height={dimensions.height}>
//             <g transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}>
//                 { children }
//             </g>
//         </svg>
//     </ChartContext.Provider>
// }
//
// export default Chart;

import React, { createContext, useContext } from 'react'
import "./Chart.css"

const ChartContext = createContext();
export const useChartDimensions = () => useContext(ChartContext)

const Chart = ({ dimensions = {}, children }) => {
    return (
        <ChartContext.Provider value={dimensions}>
            <svg className="Chart" width={dimensions.width} height={dimensions.height}>
                <g transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}>
                    { children }
                </g>
            </svg>
        </ChartContext.Provider>
    );
}

export default Chart;
