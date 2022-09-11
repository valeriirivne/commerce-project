import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import Model from '../../Model';

const Home = () => {
  return (
    <div>
      <Model />
      <Outlet />
      <Directory />;
    </div>
  );
};

export default Home;
