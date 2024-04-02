import { useLocation } from "react-router-dom";
import FullPage from "../components/Helper/FullPage";
import DraggableButton from "../components/DraggableButton";
import axios from "axios";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from "react";

const PerformanceGraph = (user, performance) => {

    const [performanceValues, setPerformanceValues] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            let response = await loadPerformance();
            let newPerformanceValues = [];
            let newDates = [];

            for(let i = response.data.length - 1; i >= 0; i--) {
                let correctAnswers = response.data[i].correctAnswers;
                let totalAnswers = correctAnswers + response.data[i].wrongAnswers;
                let percentage = correctAnswers * 100.0 / totalAnswers 
                newPerformanceValues.push(percentage);
                newDates.push(response.data.length - i);
            }
            setPerformanceValues(newPerformanceValues);
            setDates(newDates);
        }

        fetchData();
    }, [performance]);

    const loadPerformance = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/performance/" + user.userId + "/" + performance);
        return response;
    }

    return(
        <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5] }]}
            series={[
                {
                    data: performanceValues,
                    area: true
                }
            ]}
            width={500}
            height={300}
        />
    );
}

const UserPage = () => {
    const [value, setValue] = useState(0);
    const valueToPerformance = ["Reading", "Vocabulary", "Listening"];

    const location = useLocation();
    let user = location.state.user;

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    // UserPage component
return (
    <FullPage class="flex flex-col items-center justify-center bg-blue-50">

        <div class="text-3xl font-bold mb-4">
            <h1 class="text-2xl font-bold">Merhaba {user.userName}!</h1>
        </div>
        <DraggableButton user={user} />

        <div class="my-8">
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                class="mb-4"
            >
                <Tab label="Okuma" />
                <Tab label="Kelime Bilgisi" />
                <Tab label="Dinleme" />
            </Tabs>
            {PerformanceGraph(user, valueToPerformance[value])}
        </div>
    </FullPage>
);

}

export default UserPage;