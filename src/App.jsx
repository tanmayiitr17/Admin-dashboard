import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Toggle from './components/Toggle';
import ThirdChart from './components/ThirdChart';
import DarkModeToggle from './components/DarkModeToggle';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const App = () => {
  const [lineChartData, setLineChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([40, 25, 20, 15]);
  const [summary, setSummary] = useState(['Total Users: 1000', 'Active Users: 800']);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const mockData = [
        { date: '2024-08-01', engagement: 20 },
        { date: '2024-08-02', engagement: 30 },
        // ... more data for a month
      ];
      setLineChartData(mockData);
    }, 1000);
  }, []);

  const handleToggle = () => {
    setPieChartData(pieChartData.reverse());
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      <div className="dashboard">
        <Sidebar summary={summary} />
        <main className="main-content">
          <ErrorBoundary>
            <div style={{ display: "flex !important", gap: "15vh !important" }}>
              <LineChart data={lineChartData} />
              <PieChart data={pieChartData} />
              <ThirdChart data={[10, 20, 30, 40, 50, 60, 70]} />
            </div>
          </ErrorBoundary>
          <Toggle onToggle={handleToggle} />
          <DarkModeToggle onToggle={handleDarkModeToggle} />
        </main>
      </div>
    </div>
  );
};

export default App;
