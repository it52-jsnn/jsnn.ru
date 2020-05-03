const mainPage = {
  main: {
    title: '.page-main__title',
    tag: '.event__tag-link',
    eventItem: {
      element: (id) => `[data-test-id="events__item--${id}"]`,
      title: (id) => `[data-test-id="events__item--${id}"] .event__title`,
      date: (id) => `[data-test-id="events__item--${id}"] .event__date`,
      address: (id) => `[data-test-id="events__item--${id}"] .event__address`,
      tag: (id) => `[data-test-id="events__item--${id}"] .event__tag-link`
    }
  }
};

const eventPage = {
  main: {
    title: '.page-main__title',

    navigation: {
      element: '.event-navigation',
      link: '.event-navigation__link',
      activeLink: '.event-navigation__link--active'
    },

    agendaTab: {
      speech: {
        element: '.event-agenda__info',
        title: '.event-agenda__title',
        speaker: {
          element: '.event-agenda__speaker',
          name: '.event-agenda__speaker-name',
          company: '.event-agenda__speaker-company',
        },
        description: '.event-agenda__description'
      }
    },

    placeAndTimeTab: {
      date: '.event-info__item--date',
      time: '.event-info__item--time',
      address: '.event-info__item--location'
    }
  }
};

module.exports = { mainPage, eventPage };
