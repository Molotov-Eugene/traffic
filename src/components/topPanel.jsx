import icons from '../assets/svg/index';

export default function() {
  return (
    <nav className='top-panel'>
      <form className='top-panel-form'>
        <input className='top-panel-input' placeholder='Поиск объекта' />
      </form>
      <div className='filters'>
        <div id='filter-active'>
          <img src={icons.filter.active} alt='Active' />
        </div>
        <div id='filter-not-active'>
          <img src={icons.filter.notActive} alt='Not active' />
        </div>
        <div id='filter-error'>
          <img src={icons.filter.error} alt='Error' />
        </div>
        <div id='filter-not-configured'>
          <img src={icons.filter.notConfigured} alt='Not configured' />
        </div>
        <div id='filter-all'>
          <img src={icons.filter.all} alt='All' />
        </div>
      </div>
    </nav>
  );
}
