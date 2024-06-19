/* eslint-disable react/prop-types */
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

export function LineChart({ monthlyTrashRecords, monthlyRenewableTrashRecords, monthlyNonRenewableTrashRecords }) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Total trash per month',
        data: monthlyTrashRecords,
        borderColor: 'rgb(0, 102, 102)',
        backgroundColor: 'rgb(51, 153, 102)',
      },
      {
        label: 'Renewable trash per month',
        data: monthlyRenewableTrashRecords,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Non-renewable trash per month',
        data: monthlyNonRenewableTrashRecords,
        borderColor: 'rgb(255, 204, 102)',
        backgroundColor: 'rgba(255, 204, 102, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}
