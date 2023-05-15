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

    const parsedData = (data) => {

        let cnt = 0;
        const hold = [];

        for (let el of data) {

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
    const [ratasData, setRatasData] = useState([]);

    const [islaidos, setIslaidos] = useState(0);
    const [likutis, setLikutis] = useState(100000);

    const [menesis, setMenesis] = useState("01")
    const [pavadinimas, setPavadinimas] = useState("Likutis");

    async function getData(url) {

        const response = await fetch(url);
        const data = await response.json();
        const allData = parsedData(data.data.allExpenses);
        const data2 = data.data.allEarnings;
        let earnings = {
            category: "Likutis",
            amount: 0
        }

        let expenses = 0;

        for (let el of allData) {
            expenses += el.amount;
        }
        console.log(expenses)
        for (let el of data2) {
            earnings.amount += el.amount;
        }

        earnings.amount -= expenses;
        if (earnings.amount < 0) {
            earnings.amount = Math.abs(earnings.amount);
            earnings.category = "Perteklius";
            setPavadinimas("Perteklius");
        } else {
            setPavadinimas("Likutis");
        }


        allData.unshift(earnings);

        setLikutis(earnings.amount);
        setIslaidos(expenses);
        setRatasData(allData);

    }


    useEffect(() => {
        getData(`http://localhost:4000/expenses/${menesis}`);
        console.log(menesis);
    }, [menesis]);


    useEffect(() => {
        console.log(ratasData);
        setChartData({
            labels: ratasData.map(data => data.category),
            datasets: [
                {
                    radius: ratasRadius,
                    data: ratasData.map((data) => data.amount),
                    type: "doughnut",
                    cutout: 190,
                    backgroundColor: [
                        "rgba(182, 182, 182, 1)",
                        "rgba(182, 160, 182, 1)",
                        "rgba(180, 140, 182, 1)",
                        "rgba(182, 120, 182, 1)",
                        "rgba(180, 100, 182, 1)",
                        "rgba(180, 80, 182, 1)",
                        "rgba(180, 60, 182, 1)",
                        "rgba(180, 40, 182, 1)",
                        "rgba(180, 20, 182, 1)",
                        "rgba(180, 0, 160, 1)",
                        "rgba(180, 0, 140, 1)",
                        "rgba(180, 0, 120, 1)",

                    ],
                    borderColor: "black",
                    borderWidth: 0
                },


            ]
        })
    }, [ratasData])
    // ratasRadius

    // window.addEventListener("resize", () => {
    //     if (window.innerWidth > 1440) {
    //         setRatasRadius(210);
    //     }
    //     else {
    //         setRatasRadius(120);
    //     }
    // })


    const [chartData, setChartData] = useState({
        labels: ratasData.map(data => data.category),
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


    return (

        <>

            <div className="ratas1 BP38-child2-1">
                <select className="ratas1__select" name="ratas1__select"
                    value={menesis}
                    onChange={(e) => setMenesis(e.target.value)}
                >
                    <option value="01">Sausis</option>
                    <option value="02">Vasaris</option>
                    <option value="03">Kovas</option>
                    <option value="04">Balandis</option>
                    <option value="05">Gegužė</option>
                    <option value="06">Birželis</option>
                    <option value="07">Liepa</option>
                    <option value="08">Rugpjūtis</option>
                    <option value="09">Rugsėjis</option>
                    <option value="10">Spalis</option>
                    <option value="11">Lapkritis</option>
                    <option value="12">Gruodis</option>
                </select>

                {/* <button className="monthButton1"> Left </button>
                <h2>{month}</h2>
                <button className="monthButton2"> Right </button> */}
            </div >


            <div className="ratas2 BP38-child2-2">
                <div className="ratas2__main">
                    <PieChart chartData={chartData} />




                </div>

                <table className="ratas2__data">
                    <tr >
                        <td><span style={{ color: "rgba(182, 120, 182, 1)" }}>{String.fromCharCode(8226)}</span></td>
                        <td>Išlaidos</td>
                        <td>{islaidos} eur</td>
                    </tr>
                    <tr>
                        <td><span style={{ color: "rgba(182, 182, 182, 1)" }}>{String.fromCharCode(8226)}</span></td>
                        <td>{pavadinimas}</td>
                        <td>{likutis} eur</td>
                    </tr>
                </table>
            </div>



        </>

    );
}

export default Ratas;