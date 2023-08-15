import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from './store';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const notify = () => toast("Wow so easy!");
root.render(
  <Provider store={store}>
    <App />
    {/* <ToastContainer/> */}
  </Provider>
);

// function App(){
//   const notify = () => toast("Wow so easy!");

//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }