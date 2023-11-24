import icons from '../assets/svg/index';

export default function navMenu() {
  return (
    <div>
      <img src={icons.menu.logo} alt='Logo icon' />
      <img src={icons.menu.objects} alt='Object icon' />
      <img src={icons.menu.dashboards} alt='Dashboards icon' />
      <img src={icons.menu.analytics} alt='Analytics icon' />
      <img src={icons.menu.events} alt='Events icon' />
    </div>
  )
}

