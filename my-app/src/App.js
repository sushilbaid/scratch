import logo from './logo.svg';
import './App.css';
import Game from './TicTacToe';
import RecipeSummary from './Recipe';
import StarRating from './StarRating';
import FilterableProductTable from './Fpt';
import React, {Suspense, lazy } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function App() {
  return (
    <div className="App">
      <Game />
      <RecipeSummary ingredients={10} steps={10} title="Mirchi Paratha"/>
    </div>
  );
}

export default App;
