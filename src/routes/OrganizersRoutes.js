import { Route, Routes } from 'react-router-dom';

import Organizer from '../pages/organizers'
import Create from '../pages/organizers/create';


export function OrganizersRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Organizer />} />
      <Route path='/create' element={<Create />} />
      {/* <Route path='/edit/:talentId' element={<Edit />} /> */}
    </Routes>
  );
}
