// Dashboard.js
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MiniDrawer from '../../component/MiniDrawer';
import { Grid, Typography, CircularProgress, Alert } from '@mui/material';
import CardData from '../../pages/CardData/CardData';
import Data from '../../pages/CardData/Data';
import styled from 'styled-components';
import DataTable from '../../pages/Table/DataTable';
import Graph from '../../pages/graph/Graph';
import Line from '../../pages/graph/Line';
import Area from '../../pages/graph/Area';

const StyledMain = styled(Box)`
  flex-grow: 1;
  padding: 20px;
`;

const StyledGrid = styled(Grid)`
  margin-top: 20px;
`;

const Dashboard = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API
        const response = await fetch('/Data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data); // Log the data to inspect its structure
        setApiData(data.databaseData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again.');
      } finally {
        setLoading(false);
      }
    
    };

    fetchData();
  }, []);


  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer />
      <StyledMain component="main">
        <Typography variant="h3" gutterBottom>
          Dashboard
        </Typography>
        {loading && <CircularProgress />}
        {error && <Alert severity="error">{error}</Alert>}
        {!loading && !error && (
          <StyledGrid container spacing={2}>
            {Data.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <CardData
                  title={card.title}
                  description={card.content}
                  icon={card.icon}
                  numericValue={apiData ? apiData.find(item => Object.keys(item)[0] === card.apiKey)?.[card.apiKey] : null}
                />
              </Grid>
            ))}
            {/* DataTable component */}
            <Grid item xs={12} md={6} lg={6}>
              <Typography variant="h5" gutterBottom>
                User Data Table
              </Typography>
              <DataTable />
            </Grid>
            {/* Graph */}
            <Grid item xs={12} md={6} lg={6}>
              {/* New widget - GraphWidget */}
              <Graph />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              {/* New widget - GraphWidget */}
              <Line />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              {/* New widget - GraphWidget */}
              <Area />
            </Grid>
          </StyledGrid>
        )}
      </StyledMain>
    </Box>
  );
};

export default Dashboard;

