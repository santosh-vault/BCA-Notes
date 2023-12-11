import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ProjectProvider } from './store/feature-card-list.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotePage from './Notes/NotePage.jsx';
import Syllabus from './Syllabus/Syllabus.jsx';
import { SyllabusProvider } from './store/syllabus-list.jsx';
import Cf from './Notes/sem/Cf.jsx';
import Iind from './Notes/sem/Iind.jsx';
import Iiird from './Notes/sem/Iiird.jsx';
import IVth from './Notes/sem/Ivth.jsx';


const routes = [

  { path: '/', element: <App /> },
  { path: '/notepage', element: <NotePage /> },
  { path: '/syllabus', element: <Syllabus /> },
  { path: '/i', element: <Cf /> },
  { path: '/ii', element: <Iind /> },
  { path: '/iii', element: <Iiird /> },
  { path: '/iv', element: <IVth /> },



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
