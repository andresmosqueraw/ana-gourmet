import images from './images';

const wines = [
  {
    title: 'Filete de robalo apanado',
    price: '$15',
    tags: 'Robalo empanizado y frito.',
  },
  {
    title: 'Cadera asada',
    price: '$15',
    tags: 'Cadera de res asada',
  },
  {
    title: 'Frijolada',
    price: '$15',
    tags: 'Sopa de frijoles con carne',
  },
  {
    title: 'Mojarra frita',
    price: '$15',
    tags: 'Mojarra frita crujiente',
  },
  {
    title: 'Pollo en salsa',
    price: '$15',
    tags: 'Salsa de mazorca, de vino o de champiñones',
  },
];

const cocktails = [
  {
    title: 'Churrasco',
    price: '$35',
    tags: 'Carne a la parrilla',
  },
  {
    title: "Punta de anca",
    price: '$35',
    tags: 'Punta de anca asada',
  },
  {
    title: 'Pechuga gratinada',
    price: '$35',
    tags: 'Pechuga a la plancha con queso',
  },
  {
    title: 'Costillas de cerdo BBQ',
    price: '$35',
    tags: 'Costillas de cerdo con barbacoa',
  },
  {
    title: 'Cordon bleu',
    price: '$35',
    tags: 'Pollo relleno de jamón y queso',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Frijolada',
    subtitle: 'Sopa de frijoles con carne.',
  },
  {
    imgUrl: images.award02,
    title: 'Pechuga gratinada',
    subtitle: 'Pechuga a la plancha con queso.',
  },
  {
    imgUrl: images.award03,
    title: 'Mojarra frita',
    subtitle: 'Mojarra frita crujiente.',
  },
  {
    imgUrl: images.award05,
    title: 'Costillas de cerdo BBQ',
    subtitle: 'Costillas de cerdo con barbacoa.',
  },
];

export default { wines, cocktails, awards };
