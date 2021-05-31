import React, { useState, useEffect, useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import '../App.css';
import { TransactionContext } from '../context/TransactionContext';

interface DataSets{
    label:string,
    data:any,
    backgroundColor:string[],
    borderColor:string[],
    borderWidth:number,
}

interface ChartData{
    labels:string[],
    datasets:DataSets[],
}

interface Label{
    fontFamily:string,
}

interface Legend{
    position:string,
    labels: Label,
}

interface Options{
    responsive: boolean,
    legend:Legend,
}

const PieChart:React.FC = () => {
    const [chartData, setChartData] = useState<ChartData|null>(null);
    const { income, expense, totalBalance } = useContext < InitialState2 > (TransactionContext);

    useEffect(() => {
        const chart = () => {
            setChartData({
                labels: ['Income', 'Expense', 'Balance'],
                datasets: [
                    {
                        label: 'Expense Tracker',
                        data: [income, expense, totalBalance],
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
                        borderWidth: 0,
                    },
                ],
            });
        }
        chart();
    }, [income,expense,totalBalance]);

    const options:Options={
        responsive: true,
        legend: {
            position: 'left',
            labels: {
                fontFamily: "Helvetica",
            }
        }
    }

    return (
        <Pie
            type="pie"
            data={chartData}
            height={80}
            width={200}
            className="pie-chart"
            options={options}
        />
    );
}

export default PieChart;