import { useEffect } from 'react';
import NavMenu from '../components/navMenu';
import TopPanel from '../components/topPanel';
import { Outlet, useNavigate } from 'react-router-dom';


export default function() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/objects');
  }, [])

  return (
    <div id='mainLayout'>
      <aside>
        <NavMenu />
      </aside>
      <main>
        <header>
          <TopPanel />
        </header>
        <Outlet />
      </main>
    </div>
  )
}

