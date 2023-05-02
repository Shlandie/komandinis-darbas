import { useState } from "react";
import { useEffect } from "react";

// import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { DoughnutController } from "chart.js";
import ArcElement from "chart.js";
import { Pie } from "react-chartjs-2";

import useFetch from "./useFetch";
import { Data1 } from "./data";
import PieChart from "./Piechart";

import { CategoryScale } from "chart.js";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";


// Chart.register(CategoryScale);

const Ratas = () => {

    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    const data = getData("localhost:3000/expenses");
    console.log(data);

    const parsedData = (data) => {
        let cnt = 0;
        const hold = [];
        for (let el of data) {
            console.log(el.category)
            if (hold.length == 0) {
                hold.push(el);
            }
            else {
                for (let el2 of hold) {
                    if (el.category === el2.category) {
                        el2.amount += el.amount;
                        cnt = 0;

                    } else {
                        cnt++;
                    }
                    if (hold.length == cnt && el.category !== el2.category) {
                        hold.push(el);
                        break;
                    }
                }
                cnt = 0;

            }

        }
        return hold;
    }


    const [ratasRadius, setRatasRadius] = useState(210);
    const [ratasData, setRatasData] = useState(parsedData(Data1));

    window.addEventListener("resize", () => {
        if (Window.innerWidth > 1440) {
            setRatasRadius(210);
        }
        else {
            setRatasRadius(120);
        }
    })


    const [chartData, setChartData] = useState({
        labels: ratasData.map((data) => data.category),
        datasets: [
            {
                radius: ratasRadius,
                data: ratasData.map((data) => data.amount),
                type: "doughnut",
                cutout: 190,
                backgroundColor: [
                    "rgba(182, 120, 182, 1)",
                    "rgba(182, 160, 182, 1)",
                    "rgba(180, 140, 182, 1)",

                ],
                borderColor: "black",
                borderWidth: 0
            },

        ]
    });

    // useEffect(() => {
    //     const parsedData = (data) => {
    //         let cnt = 0;
    //         const hold = [];
    //         for (let el of data) {
    //             console.log(el.category)
    //             if (hold.length == 0) {
    //                 hold.push(el);
    //             }
    //             else {
    //                 for (let el2 of hold) {
    //                     if (el.category === el2.category) {
    //                         el2.amount += el.amount;
    //                         cnt = 0;

    //                     } else {
    //                         cnt++;
    //                     }
    //                     if (hold.length == cnt && el.category !== el2.category) {
    //                         hold.push(el);
    //                         break;
    //                     }
    //                 }
    //                 cnt = 0;

    //             }

    //         }
    //         return hold;
    //     }

    //     setRatasData(parsedData(Data1));
    // }, [])


    return (

        <>

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



        </>

    );
}

export default Ratas;