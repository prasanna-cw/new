// components/CardData.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledCard = styled(Card)`
  && {
    border-radius: 16px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    overflow: hidden;
    background: linear-gradient(135deg, #3498db, #1abc9c);
    color: #ffffff;
    height: 180px;
    width: 270px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    border: 2px solid #ffffff;
    padding: 0;
    animation: ${fadeIn} 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.07);
      box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
    }
  }
`;

const CardContentWrapper = styled(CardContent)`
  && {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    border-radius: 0 0 16px 16px; /* Add border-radius to the bottom corners */
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Title = styled(Typography)`
  && {
    font-size: 1.8rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    margin-left: 8px;
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  color: #fff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  animation: ${fadeIn} 0.5s ease;
`;

const Description = styled(Typography)`
  && {
    font-size: 1.1rem;
    font-weight: 400;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

const NumericValue = styled(Typography)`
  && {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: ${fadeIn} 0.5s ease;
  }
`;


const CardData = ({ title, description, icon, numericValue }) => {
  return (
    <StyledCard>
      <CardContentWrapper>
        <TitleWrapper>
          <IconWrapper>{icon}</IconWrapper>
          <Title variant="h5" component="div">
            {title}
          </Title>
        </TitleWrapper>
        <Description variant="body2" component="div">
          {description}
        </Description>
        {numericValue !== null && (
          <NumericValue variant="h4" component="div">
            {numericValue}
          </NumericValue>
        )}
      </CardContentWrapper>
    </StyledCard>
  );
};

export default CardData;
