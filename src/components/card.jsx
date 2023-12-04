import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import icons from '../assets/svg';

export function Card(props) {
  const { activeFilter } = useSelector(state => state.filter);
  const objects = useSelector(state => state.objects);
  const { object, cameras, images } = props.objectData;
  const camerasList = cameras.cameras.filter((c) => c.parentId === object.id)[0].list;
  const { updateCameraStatus, updateObject } = useActions();
  const navigate = useNavigate();

  const svgColor = {
    active: '#1EA11E',
    error: '#C92627',
    notConfigured: '#C4C4C4',
    notActive: '#9EA2A1',
  }

  const objectStatus = {
    active: 'Активен',
    error: 'Ошибка',
    notConfigured: 'Не настроен',
    notActive: 'Не активен',
  }

  const togglerTooltip = {
    active: 'Остановить все камеры',
    notActive: 'Запустить все камеры',
    notConfigured: 'Объект не настроен',
    error: 'Возникла ошибка',
  }

  const cameraStatus = (camera) => {
    if (object.status === 'active' || object.status === 'notActive') {
      const statusSvg = camera.status === 'active' ? icons.card.pause : icons.card.start;
      return <img className='card-cameras-camera-status' src={statusSvg} onClick={() => cameraStatusHandler(object.id, camera.id, camera.status)} />
    } else {
      return <img className='card-cameras-camera-status inactive' src={icons.card.start} />
    }
  }

  const allCamerasStatus = () => {
    let inactive = (object.status === 'error' || object.status === 'notConfigured') ? true : false;

    if (camerasList.filter((c) => c.status === 'active').length === 0) {
      return (<img className={inactive && 'inactive'} src={icons.card.cpStart} onClick={() => allCamerasStatusHandler(object.id, 'notActive')} />);
    } else {
      return (<img className={inactive && 'inactive'} src={icons.card.cpPause} onClick={() => allCamerasStatusHandler(object.id, 'active')} />);
    }
  }

  const allCamerasStatusHandler = (id, status) => {
    if (object.status === 'notConfigured') {
      return null;
    } else if (object.status === 'error') {
      //???
    }

    const newStatus = status === 'active' ? 'notActive' : 'active';
    objects.objects[id].status = newStatus;
    cameras.cameras[id].list.map((_, ind) => {
      cameras.cameras[id].list[ind].status = newStatus;
    });

    updateObject(objects);
    updateCameraStatus(cameras);
  }

  const cameraStatusHandler = (parentId, id, status) => {
    cameras.cameras[parentId].list[id].status = status === 'active' ? 'notActive' : 'active';
    updateCameraStatus(cameras);
  }

  if (object.status === activeFilter || activeFilter === 'all') {
    return (
      <div className='card' key={object.id}>
        <div className='card-header'>
          <div data-tooltip={objectStatus[object.status]}>
            <svg className='card-header-status' width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.87874 2.93384L6.7854 4.00025C6.39255 6.52593 6.41456 9.09896 6.85057 11.6175L3.86136 12.7057C2.64482 9.11035 3.36171 4.94044 3.86136 2.92949L3.87874 2.93384ZM7.74125 1.95883H11.5429L11.2084 2.92078C10.2432 2.97535 9.27564 2.97535 8.31042 2.92078C7.77166 2.83808 7.39367 2.59433 7.75863 1.96318L7.74125 1.95883ZM12.6509 1.9153L17.4301 1.83695V2.05894C16.386 2.36289 15.3175 2.57552 14.2367 2.69444L12.1773 2.78149L12.6509 1.9153ZM7.74125 13.6676H11.5429L11.2084 12.71C10.2432 12.6555 9.27564 12.6555 8.31042 12.71C7.77166 12.8189 7.39367 13.0583 7.75863 13.6894L7.74125 13.6676ZM12.6509 13.7155L17.4301 13.7939V13.5762C16.3857 13.2745 15.3173 13.0633 14.2367 12.9451L12.1773 12.8537L12.6509 13.7155ZM15.5401 3.61722L20.1977 2.17647C21.6446 5.35395 21.0406 11.883 20.1977 13.4544L15.4619 12.0745C16.1578 9.30164 16.1846 6.40257 15.5401 3.61722ZM0.428986 12.4706C0.43863 12.9028 0.597657 13.3183 0.878937 13.6461C1.16022 13.974 1.54632 14.1939 1.97138 14.2683C4.27034 14.6329 6.60611 14.7046 8.92303 14.4816C10.8738 14.1987 17.4562 14.425 17.4562 14.425V15.4174C18.0167 15.3739 18.021 14.6949 18.134 14.3945C18.1991 14.2248 22.5483 14.7776 23.4824 14.7036C24.3209 14.6339 25.1508 14.4468 25.7373 13.7329C27.7142 11.3302 27.7142 4.33977 25.7373 1.93707C25.1508 1.22322 24.3209 1.03605 23.4824 0.966409C22.5483 0.892413 18.1991 1.44521 18.134 1.27545C18.021 0.975116 18.0167 0.296091 17.4562 0.252563V1.24498C17.4562 1.24498 10.8738 1.47133 8.92303 1.1884C6.60611 0.965434 4.27034 1.0371 1.97138 1.40168C1.54632 1.47614 1.16022 1.69605 0.878937 2.02388C0.597657 2.35171 0.43863 2.76716 0.428986 3.19935C0.176992 6.28463 0.176992 9.38537 0.428986 12.4706Z" fill={svgColor[object.status]} />
            </svg>
          </div>
          <span className='card-header-title'>{object.name}</span>
          <img className='card-header-settings' src={icons.card.settings} />
        </div>
        <div className='card-image'>
          <img src={images.images.default} />
        </div>
        <div className='card-control-panel'>
          <div data-tooltip='Аналитика' className='card-control-panel-dashboard' onClick={() => navigate({pathname: '/dashboards', search: `?id=${object.id}`})}>
            <img src={icons.card.analytics} />
          </div>
          <div data-tooltip='Таблицы' className='card-control-panel-table' onClick={() => navigate({pathname: '/tables', search: `?id=${object.id}`})}>
            <img src={icons.card.tables} />
          </div>
          <div data-tooltip='События' className='card-control-panel-event' onClick={() => navigate({pathname: '/events', search: `?id=${object.id}`})}>
            <img src={icons.card.events} />
          </div>
          <div data-tooltip={togglerTooltip[object.status]} className='card-control-panel-switcher'>
            {allCamerasStatus()}
          </div>
        </div>
        <hr className='card-control-panel-hr' />
        <div className='card-cameras'>
          {camerasList.map((camera) =>
            <div className='card-cameras-camera' key={camera.id}>
              <span className='card-cameras-camera-name'> {camera.name} </span>
              {camerasList.length > 1
                ? cameraStatus(camera)
                : null
              }
            </div>
          )}
        </div>
      </div>
    )
  } else {
    return null;
  }
}
