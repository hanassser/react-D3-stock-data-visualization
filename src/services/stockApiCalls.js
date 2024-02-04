import axiosInstance from './axiosInstance';


export const fetchData = async () => {
    try {
        const response = await axiosInstance.get('?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min');
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};
