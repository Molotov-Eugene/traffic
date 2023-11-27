import NavMenu from '../components/navMenu';
import TopPanel from '../components/topPanel';
import { Outlet } from 'react-router-dom';


export default function() {

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

