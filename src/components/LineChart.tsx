import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from './ui/card';

// Example data for the chart
const data = [
  { course: 'Math 101', present: 85, absent:15, total: 100 },
  { course: 'Physics 201', present: 78,absent:5, total: 95 },
  { course: 'Chemistry 102', present: 92, absent:8,total: 100 },
  { course: 'Biology 210', present: 74, absent:16, total: 90 },
  { course: 'History 101', present: 88, absent:10,total: 98 },
  { course: 'English Lit', present: 95,absent:10, total: 100 },
  { course: 'Computer Sci', present: 90,absent:10, total: 100 },
];


const LineChartGraph = () => {
  return (
    <Card className='w-full h-1/2'>
      
      <CardContent>
      {/* Responsive container ensures the chart resizes based on the container size */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="course" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="present" stroke="#4287f5" />
          <Line type="monotone" dataKey="absent" stroke="#e60e0e" />
        </LineChart>
      </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default LineChartGraph;
