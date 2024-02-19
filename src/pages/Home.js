import Timeline from "../components/chart/Timeline";
import React, { useState, useEffect, useRef } from "react"
import {getScatterData, getTimelineData} from "../components/chart/element/dummyData";
import * as d3 from "d3"

export default function Home () {
    const getData = () => ({
        timeline: getTimelineData(),
        scatter: getScatterData(),
    })
    const [data, setData] = useState(getData())
    const parseDate = d3.timeParse("%m/%d/%Y")
    const dateAccessor = d => parseDate(d.date)
    const temperatureAccessor = d => d.temperature
    useInterval(() => {
        setData(getData())
    }, 4000)

    return (
        <>aaa
            <Timeline
                data={data.timeline}
                xAccessor={dateAccessor}
                yAccessor={temperatureAccessor}
                label="Temperature"
            />
        </>
    )
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    });

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
