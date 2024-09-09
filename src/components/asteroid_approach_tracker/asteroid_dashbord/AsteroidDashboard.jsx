/* eslint-disable react/prop-types */
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const { asteroid_name, x, y } = payload[0].payload;
        return (
            <div className="custom-tooltip p-2 rounded-lg bg-transparent_dark-8 border-solid border-quaternary-3 *:text-quaternary-3 *:capitalize">
                <p className="label">{`Asteroid: ${asteroid_name}`}</p>
                <p>{`Distance: ${x} Lunar`}</p>
                <p>{`${label}: ${y} ${label === 'Diameter' ? 'Meter' : 'Km/s'}`}</p>
            </div>
        );
    }

    return null;
};


const AsteroidDashboard = ({ neo_feed_data }) => {
    const { scatter_chart_data_diameter_distence, scatter_chart_data_velocity_distence } = neo_feed_data;
    console.log(scatter_chart_data_velocity_distence)

    return (
        <div className="asteroid_dashboard mb-4 md">
            <div className="container_asteroid-dashboard w-full h-[300px] sm:h-[500px] overflow-auto hidde_scroller">
                <div className="wrapper w-max h-full flex gap-4 md:gap-6">
                    <div className="card h-full w-screen sm:w-[600px] md:w-[700px] bg-primary-3 p-4 md:p-6 rounded-lg">
                        <ResponsiveContainer width="100%" height="100%">
                            <ScatterChart>
                                <CartesianGrid opacity={.2}/>
                                <XAxis type="number" dataKey="x" name="Distance" unit=" Lunar" />
                                <YAxis type="number" dataKey="y" name="Diameter" unit=" M" />
                                <Tooltip content={<CustomTooltip/>} cursor={{ strokeDasharray: '3 3' }} />
                                <Scatter name="Asteroid" data={scatter_chart_data_diameter_distence} fill="#8884d8" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="card h-full w-screen sm:w-[600px] md:w-[700px] bg-primary-3 p-4 md:p-6 rounded-lg">
                        <ResponsiveContainer width="100%" height="100%">
                            <ScatterChart>
                                <CartesianGrid opacity={.2}/>
                                <XAxis type="number" dataKey="x" name="Distance" unit=" Lunar" />
                                <YAxis type="number" dataKey="y" name="Velocity" unit=" Km/s" />
                                <Tooltip content={<CustomTooltip/>} cursor={{ strokeDasharray: '3 3' }} />
                                <Scatter name="Asteroid" data={scatter_chart_data_velocity_distence} fill="#8884d8" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
                <p className='text-xs text-quaternary-4 my-2 italic'>1 lunar = 384,400 km, which is the average distance between the Earth and the Moon.</p>
        </div>
    );
};

export default AsteroidDashboard;
