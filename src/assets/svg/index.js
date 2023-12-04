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

//card

import cardStatus from './object_status.svg';
import cardSettings from './settings.svg';
import cardStart from './start.svg' ;
import cardPause from './pause.svg';
import cardEvents from './card_event.svg';
import cardAnalytics from './card_analytics.svg';
import cardTables from './card_tables.svg';
import cardControlPanelStart from './card_control_panel_start.svg';
import cardControlPanelPause from './card_control_panel_pause.svg';

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
  card: {
    status: cardStatus,
    settings: cardSettings,
    start: cardStart,
    pause: cardPause,
    events: cardEvents,
    analytics: cardAnalytics,
    tables: cardTables,
    cpStart: cardControlPanelStart,
    cpPause: cardControlPanelPause,
  },
  misc: {
    search,
  },
};

export default icons;
