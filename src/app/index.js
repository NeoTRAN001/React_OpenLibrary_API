import  "@babel/polyfill";

import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './App';
import data from './data.json';

const app = document.getElementById('app')
const headings = ['When', 'Who', 'Description']

render(<App data={data} title='OpenLibrary API' headings={headings}/>, app)