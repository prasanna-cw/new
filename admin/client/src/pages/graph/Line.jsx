// GraphWidget.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

const StyledGraphWidget = styled.div`
  margin-top: 30px;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Graph = () => {
  const [graphData, setGraphData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        setLoading(true);
        // Make a request to the server endpoint for graph data
        const response = await axios.get('/Data.json');
        setGraphData(response.data.databaseData);
      } catch (error) {
        console.error('Error fetching graph data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGraphData();
  }, []);

  const chartOptions = {
    chart: {
      type: 'line',
      foreColor: '#333',
      toolbar: {
        show: true,
      },
    },
   
    
    xaxis: {
      categories: graphData ? graphData.map(item => Object.keys(item)[0]) : [],
      labels: {
        style: {
          colors: '#333',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#333',
        },
      },
    },
    
  
    title: {
      text: 'Graph Widget',
      align: 'left',
      style: {
        color: '#333',
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -25,
      fontSize: '15px',
      markers: {
        width: 12,
        height: 12,
      },
    },
    tooltip: {
      enabled: true,
      shared: false,
      intersect: false,
      followCursor: false,
      fillSeriesColor: false,
      theme: 'dark',
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          legend: {
            show: false,
          },
          
        },
      },
    ],
  };

  return (
    <StyledGraphWidget>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Graph Widget</h2>
      {loading ? (
        <p>Loading graph data...</p>
      ) : (
        <ReactApexChart
          options={chartOptions}
          series={[{ name: 'Values', data: graphData.map(item => Object.values(item)[0]) }]}
          type="line"
          height={400}
          dir="ltr"
        />
      )}
    </StyledGraphWidget>
  );
};

export default Graph;
