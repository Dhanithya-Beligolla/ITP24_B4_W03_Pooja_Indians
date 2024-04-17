import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider} from "react-query"
import Context from './context/Context.jsx';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Context>
      <App />
      </Context>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
