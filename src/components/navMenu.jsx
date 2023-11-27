import icons from '../assets/svg/index';

export default function navMenu() {
  return (
    <div className='nav-menu-wrapper'>
      <header id='logo'>
        <img src={icons.menu.logo} alt='Logo icon' />
      </header>
      <nav id='nav-menu'>
        <div id='svg-objects'>
          <img src={icons.menu.objects} alt='Object icon' />
        </div>
        <div id='svg-dashboards'>
          <img src={icons.menu.dashboards} alt='Dashboards icon' />
        </div>
        <div>
          <img src={icons.menu.analytics} alt='Analytics icon' />
        </div>
        <div>
          <img src={icons.menu.events} alt='Events icon' />
        </div>
      </nav>
    </div>
  )
}

