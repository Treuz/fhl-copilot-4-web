import React from 'react';
import { Card, CardHeader, CardPreview } from '@fluentui/react-components';
import { BarChart, PieChart } from '@mui/x-charts';

const Analytics = () => {
    const titles = ['website hit', 'interaction', 'satisfaction'];
    const charts = [
        <BarChart
            xAxis={[
                {
                    id: 'barCategories',
                    data: ['day 1', 'day 2', 'day 3'],
                    scaleType: 'band',
                },
            ]}
            series={[
                {
                    data: [2, 5, 3],
                },
            ]}
            height={300}
            width={500}

        />,
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 10, label: 'location' },
                        { id: 1, value: 15, label: 'phone #' },
                        { id: 2, value: 20, label: 'return policy' },
                    ],
                },
            ]}
            width={400}
            height={200}
        />,
        <BarChart
            xAxis={[
                {
                    id: 'barCategories',
                    data: ['day 1', 'day 2', 'day 3'],
                    scaleType: 'band',
                },
            ]}
            series={[
                {
                    data: [2, 5, 3],
                },
            ]}
            height={300}
            width={500}

        />,
    ]

    return (
        <div className="grid-container"
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(4, 1fr)',
                gap: '10px',
                backgroundColor: 'white',
                width: '100%',
                height: '100%',
            }}
        >
            {titles.map((title, index) => (
                <Card style={{ gridRow: 'span 2' }}>
                    <CardHeader header={title} />
                    <CardPreview>
                        {charts[index]}
                    </CardPreview>
                </Card>
            ))}
            <div style={{
                gridRow: 'span 2',
                gridColumn: 'span 3',
                backgroundColor: 'grey'
            }}>

            </div>
        </div>
    );
};

export default Analytics;