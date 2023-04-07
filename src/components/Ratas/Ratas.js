import { useState } from "react";

import Chart from "chart.js/auto";
import { DoughnutController } from "chart.js";
import ArcElement from "chart.js";
import { Pie } from "react-chartjs-2";

import { Data1, Data2 } from "./data";
import PieChart from "./Piechart";

import { CategoryScale } from "chart.js";


// Chart.register(CategoryScale);

const Ratas = () => {

    // document.querySelector(".monthButton1");


    // const monthNumber = 0;
    // const [month, setMonth] = useState("Gruodis");
    const [chartData, setChartData] = useState({
        labels: Data1.map((data) => data.year),
        datasets: [
            {
                data: Data1.map((data) => data.userGain),
                type: "doughnut",
                cutout: 150,
                backgroundColor: [
                    "rgba(29, 165, 255, 1)",
                    "green",
                    // "lightgreen"

                ],
                borderColor: "black",
                borderWidth: 2
            },

            {
                labels: Data2.map((data) => data.year),
                data: Data2.map((data) => data.userGain),
                weight: 3,
                type: "pie",
                backgroundColor: [
                    // "rgb(255, 30, 0)", ,
                    "red",
                    "rgb(160, 0, 0)",
                    "rgb(180, 10, 0)",
                    "rgb(210, 20, 0)",
                    "rgb(230, 30, 20)",
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });


    return (

        <>
            <div className="ratas">
                <div className="ratas1">
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


                <div className="ratas2">
                    <div className="ratas2__main">
                        <PieChart chartData={chartData} />




                    </div>




                    <table className="ratas2__data">
                        <tr >
                            <td><span style={{ color: "red" }}>{String.fromCharCode(8226)}</span>Išlaidos</td>
                            <td>500€</td>
                        </tr>
                        <tr>
                            <td><span style={{ color: "rgba(129, 165, 255, 1)" }}>{String.fromCharCode(8226)}</span>Likutis</td>
                            <td>1000€</td>
                        </tr>
                    </table>
                </div>

            </div>

        </>

    );
}

export default Ratas;