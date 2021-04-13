import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, LineChart, PieChart, Pie, Cell, FunnelChart, Funnel, LabelList } from 'recharts';

export const ComplaintsRate = () => {
    const data = [
        {
            name: 'Monday',
            value: 1000,
        },
        {
            name: 'Tuesday',
            value: 2000,
        },
        {
            name: 'Wednesday',
            value: 500,
        },
        {
            name: 'Thursday',
            value: 200,
        },
        {
            name: 'Friday',
            value: 2500,
        },
        {
            name: 'Saturday',
            value: 2750,
        },
        {
            name: 'Sunday',
            value: 3750,
        }
    ];

    return (
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data} title="Complaints rate">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="value" />
                <Tooltip />
                <Legend />
                <Line type="monotone" name="cases" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export const ComplaintsTypes = () => {
    const data = [
        {
            name: 'Bird Rescue',
            value: 70,
        },
        {
            name: 'Building Colapse',
            value: 1,
        },
        {
            name: 'Loud Music',
            value: 90,
        },
        {
            name: 'Robbery',
            value: 15,
        },
    ];

    return (
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} fill="coral" />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    )
}


export const AreaCases = () => {
    const data = [
        {
            "value": 100,
            "name": "Kandivali",
            "fill": "#8884d8"
        },
        {
            "value": 80,
            "name": "Borivali",
            "fill": "#83a6ed"
        },
        {
            "value": 50,
            "name": "Malad",
            "fill": "#8dd1e1"
        },
        {
            "value": 40,
            "name": "Dahisar",
            "fill": "#82ca9d"
        },
        {
            "value": 26,
            "name": "Goregaon",
            "fill": "#a4de6c"
        }
    ];

    return (
        <ResponsiveContainer width="100%" height={250}>
            <FunnelChart>
                <Tooltip />
                <Funnel
                    dataKey="value"
                    data={data}
                    isAnimationActive
                >
                    <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                </Funnel>
            </FunnelChart>
        </ResponsiveContainer>
    )
}
