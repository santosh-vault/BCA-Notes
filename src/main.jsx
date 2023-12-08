import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ProjectProvider } from './store/feature-card-list.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotePage from './Notes/NotePage.jsx';
import Syllabus from './Syllabus/Syllabus.jsx';
import { SyllabusProvider } from './store/syllabus-list.jsx';
import Cf from './Notes/sem1/Cf.jsx';
import DigitalLogic from './Notes/sem1/DigitalLogic.jsx';



const routes = [

  { path: '/', element: <App /> },
  { path: '/notepage', element: <NotePage /> },
  { path: '/syllabus', element: <Syllabus /> },
  { path: '/cf', element: <Cf /> },
  { path: '/digitallogic', element: <DigitalLogic /> },


];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectProvider>
      <SyllabusProvider>
        <RouterProvider router={router} />
        </SyllabusProvider>
    </ProjectProvider>
  </React.StrictMode>
);
