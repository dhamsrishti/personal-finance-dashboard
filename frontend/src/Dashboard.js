import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const Dashboard = ({ userToken }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/transactions', {
          params: { userId: 1 },
          headers: { Authorization: `Bearer ${userToken}` },
        });
        setTransactions(response.data);
      } catch (err) {
        alert('Failed to fetch transactions');
      }
    };

    fetchTransactions();
  }, [userToken]);

  const data = {
    labels: transactions.map((t) => t.date),
    datasets: [
      {
        label: 'Transactions over Time',
        data: transactions.map((t) => t.amount),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Line data={data} />
    </div>
  );
};

export default Dashboard;
