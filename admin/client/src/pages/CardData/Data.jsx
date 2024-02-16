// data/cardData.js
import React from 'react';
import {
  PeopleAlt as PeopleAltIcon,
  ShoppingBasket as ShoppingBasketIcon,
  AttachMoney as AttachMoneyIcon,
  MonetizationOn as MonetizationOnIcon,
} from '@mui/icons-material';

const Data = [
  { title: 'Customers', content: 'Total users', icon: <PeopleAltIcon />, apiKey: 'customers' },
  { title: 'Purchases', content: 'Total purchases', icon: <ShoppingBasketIcon />, apiKey: 'purchases' },
  { title: 'Sales', content: 'Total sales', icon: <AttachMoneyIcon />, apiKey: 'sales' },
  { title: 'Profit', content: 'Total profit', icon: <MonetizationOnIcon />, apiKey: 'profit' },
];

export default Data;

  

  