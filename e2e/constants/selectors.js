const mainPage = {
  main: {
    title: '.page-main__title',
    eventItem: {
      element: (id) => `.events__item--${id}`,
      title: (id) => `.events__item--${id} .event__title`,
      date: (id) => `.events__item--${id} .event__date`,
      address: (id) => `.events__item--${id} .event__address`,
      tag: (id) => `.events__item--${id} .event__tag-link`
    }
  },
};

module.exports = { mainPage };
