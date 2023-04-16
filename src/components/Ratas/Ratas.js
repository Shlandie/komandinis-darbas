import { useState } from "react";

// import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { DoughnutController } from "chart.js";
import ArcElement from "chart.js";
import { Pie } from "react-chartjs-2";

import useFetch from "./useFetch";
import { Data1, Data2 } from "./data";
import PieChart from "./Piechart";

import { CategoryScale } from "chart.js";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";


// Chart.register(CategoryScale);

const Ratas = () => {

    const data = useFetch("http://localhost:8000/islaidos")


    const [chartData, setChartData] = useState({
        labels: Data1.map((data) => data.year),
        datasets: [
            {
                data: Data1.map((data) => data.userGain),
                type: "doughnut",
                cutout: 190,
                backgroundColor: [
                    "rgba(182, 182, 182, 1)",
                    "rgba(129, 165, 255, 1)"
                    // "lightgreen"

                ],
                borderColor: "black",
                borderWidth: 0
            },

        ]
    });


    return (

        <>
            <div className="ratas BP38-child2">
                <div className="ratas1 BP38-child2-1">
                    <select className="ratas1__select" name="ratas1__select">
                        <option value="sausis">Sausis</option>
                        <option value="vasaris">Vasaris</option>
                        <option value="kovas">Kovas</option>
                        <option value="balandis">Balandis</option>
                        <option value="geguze">Gegužė</option>
                        <option value="birzelis">Birželis</option>
                        <option value="liepa">Liepa</option>
                        <option value="rugpjutis">Rugpjūtis</option>
                        <option value="rugsejis">Rugsėjis</option>
                        <option value="spalis">Spalis</option>
                        <option value="lapkritis">Lapkritis</option>
                        <option value="gruodis">Gruodis</option>
                    </select>

                    {/* <button className="monthButton1"> Left </button>
                <h2>{month}</h2>
                <button className="monthButton2"> Right </button> */}
                </div>


                <div className="ratas2 BP38-child2-2">
                    <div className="ratas2__main">
                        <PieChart chartData={chartData} />




                    </div>




                    <table className="ratas2__data">
                        <tr >
                            <td><span style={{ color: "rgba(129, 165, 255, 1)" }}>{String.fromCharCode(8226)}</span></td>
                            <td>Išlaidos</td>
                            <td>500 eur</td>
                        </tr>
                        <tr>
                            <td><span style={{ color: "rgba(182, 182, 182, 1)" }}>{String.fromCharCode(8226)}</span></td>
                            <td>Likutis</td>
                            <td>1500 eur</td>
                        </tr>
                    </table>
                </div>

            </div>

        </>

    );
}

export default Ratas;