import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
    return (
        <Pie
            data={chartData}
            options={{
                plugins: {
                    title: {
                        display: false,
                        text: "Users Gained between 2016-2020"
                    },
                    legend: {
                        display: false
                    }
                },


            }}
        />
    );
}
export default PieChart;