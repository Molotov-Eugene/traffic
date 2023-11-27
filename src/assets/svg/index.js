import logo from './logo.svg';

//main menu

import events from './events.svg';
import dashboards from './dashboards.svg';
import analytics from './analytics.svg';
import objects from './objects.svg';

//filters

import filterAll from './filter_all.svg';
import filterActive from './filter_active.svg';
import filterNotActive from './filter_not_active.svg';
import filterError from './filter_error.svg';
import filterNotConfigured from './filter_not_configured.svg';

//misc

import search from './search.svg';

const icons = {
  menu: {
    logo,
    events,
    dashboards,
    analytics,
    objects,
  },
  filter: {
    all: filterAll,
    active: filterActive,
    notActive: filterNotActive,
    error: filterError,
    notConfigured: filterNotConfigured,
  },
  misc: {
    search,
  }
};

export default icons;
