import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const chart = () => {
            setChartData({
                labels: ['Income', 'Expense', 'Balance'],
                datasets: [
                    {
                        label: 'Expense Tracker',
                        data: [30, 34, 55],
                        backgroundColor: [
                            'green',
                            'red',
                            'blue',
                        ],
                        borderColor: [
                            'green',
                            'red',
                            'blue',
                        ],
                        borderWidth: 1,
                        hoverOffset: 1,
                    },
                ],
            });
        }
        chart();
    }, []);

    return (
        <Pie
            data={chartData}
            height={80}
            width={200}
            options={{
                responsive: true,
                legend: {
                    position: 'left',
                    labels: {
                        fontFamily: "Helvetica",
                    }
                }
            }}
        />
    );
}

export default PieChart;