import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Registration from './Registration.jsx';
import ClassRegistration from './ClassRegistration.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Registration />
    <ClassRegistration />

  </StrictMode>,
);
