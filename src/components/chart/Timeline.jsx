import React from "react"
import * as d3 from "d3"
import Chart from "./element/Chart"
import Line from "./element/Line"
import Axis from "./element/Axis"
import Gradient from "./element/Gradient";
import { useChartDimensions, useUniqueId } from "./element/utils"

const formateData = d3.timeFormat("%-b %-d")
const gradientColors =  ["rgb(226, 222, 243)", "#f8f9fa"]

const Timeline = ({ data, xAccessor = d => d.x, yAccessor = d => d.y, label }) =>{
    const [ref, dimensions] = useChartDimensions();
    const gradientId = useUniqueId("Timeline-gradient");

    const xScale = d3.scaleTime()
        .domain(d3.extent(data, xAccessor))
        .range([0, dimensions.boundedWidth])
    const yScale = d3.scaleLinear()
        .domain(d3.extent(data, yAccessor))
        .range([dimensions.boundedHeight, 0])

    const xAccessorScaled = d => xScale(xAccessor(d))
    const yAccessorScaled = d => yScale(yAccessor(d))
    const y0AccessorScaled = yScale(yScale.domain()[0])

    return (
        <div className="Timeline" ref={ref}>
            <Chart dimensions={dimensions}>
                <defs>
                    <Gradient
                        id={gradientId}
                        colors={gradientColors}
                        x2="0"
                        y2="100%"
                    />
                </defs>
                <Axis
                    dimensions="x"
                    scale={xScale}
                    formatTick={formateData}
                />
                <Axis
                    dimensions="y"
                    scale={yScale}
                    label={label}
                />
                <Line
                    type="area"
                    data={data}
                    xAccessor={xAccessorScaled}
                    yAccessor={yAccessorScaled}
                    y0Accessor={y0AccessorScaled}
                    style={{fill: `url(#${gradientId})`}}
                />
                <Line
                    data={data}
                    xAccessor={xAccessorScaled}
                    yAccessor={yAccessorScaled}
                />
            </Chart>

        </div>
    )
}

export default Timeline
