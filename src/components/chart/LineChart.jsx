import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Number of Trash Picked Up per Month',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [250,300,300,230,234,23,0,0,0,0,0,0],
      borderColor: 'rgb(0, 102, 102)',
      backgroundColor: 'rgb(51, 153, 102)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: [2,3,4,8,1,2,4,1,3,4,5,6],
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
