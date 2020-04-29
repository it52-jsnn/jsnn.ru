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

module.exports = { mainPage };
