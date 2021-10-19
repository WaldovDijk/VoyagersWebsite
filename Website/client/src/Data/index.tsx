const InfoData = [
  {
    icon: 'location',
    content: 'Geldersekade 2 1012 BH Amsterdam',
  },
  {
    icon: 'phone',
    content: '0031 (0)20 6246871',
  },
  {
    icon: 'email',
    content: 'info@hotelvoyagers.com',
  },
];

const FooterData = [
  {
    title: 'contact information',
    data: [
      {
        icon: 'location',
        content: 'Geldersekade 2 1012 BH Amsterdam',
      },
      {
        icon: 'phone',
        content: '0031 (0)20 6246871',
      },
      {
        icon: 'email',
        content: 'info@hotelvoyagers.com',
      },
    ],
  },
  {
    title: 'OPENING & CHECK IN TIMES',
    data: [
      {
        icon: 'location',
        content: 'OPEN: Monday - Sunday : 10:00 ish - 23:00',
      },
      {
        icon: 'phone',
        content: 'Check In: 15:00 pm (unless room is empty previous night)',
      },
      {
        icon: 'email',
        content: 'Check Out: 11:00 am',
      },
    ],
  },
  {
    title: 'useful links',
    data: [
      {
        content: 'www.hotelrunners.com',
        link: 'http://www.hotelrunners.com/amsterdam/',
      },
      {
        content: 'www.coffeeshopdirect.com',
        link: 'https://www.coffeeshopdirect.com/index.htm',
      },
      {
        content: 'www.coffeeshopmenus.org',
        link: 'http://www.coffeeshopmenus.org/',
      },
    ],
  },
];

const IconData = [
  { link: 'https://www.instagram.com/voyagerscoffeeshop/', icon: 'instagram' },
  { link: 'https://www.facebook.com/VoyagersHotelAmsterdam', icon: 'facebook' },
  {
    link: 'https://www.tripadvisor.com/Hotel_Review-g188590-d3668507-Reviews-Voyagers_Hotel_Amsterdam-Amsterdam_North_Holland_Province.html',
    icon: 'tripadvisor',
  },
];

const NavData = [
  {
    title: 'home',
    route: '/',
  },
  {
    title: 'about us',
    route: '/about',
    subtitles: [
      { title: 'general', route: '/about/general' },
      { title: 'policies', route: '/about/policies' },
      { title: 'services', route: '/about/services' },
      { title: 'facilities', route: '/about/facilities' },
      { title: 'location', route: '/about/location' },
    ],
  },
  {
    title: 'reservations',
    route: '/reservations',
  },
  {
    title: 'rooms',
    route: '/rooms',
    subtitles: [
      { title: 'single - basic', route: '/rooms/single' },
      { title: 'double - ensuite', route: '/rooms/double' },
      { title: 'twin - ensuite', route: '/rooms/twin' },
      { title: 'triple - basic', route: '/rooms/triple' },
      { title: 'four bed - basic', route: '/rooms/four' },
    ],
  },
  {
    title: 'contact us',
    route: '/contact',
  },
];

export { IconData, InfoData, NavData, FooterData };
