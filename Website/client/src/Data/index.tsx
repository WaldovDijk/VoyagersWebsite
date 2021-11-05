import HomeRoom1 from './Images/Home/room1.jpg';
import HomeRoom2 from './Images/Home/room2.jpg';
import HomeRoom3 from './Images/Home/room3.jpg';
import About1 from './Images/Home/about1.jpg';
import About2 from './Images/Home/about2.jpg';
import About3 from './Images/Home/about3.jpg';
import HomeRoomBanner from './Images/price-overlay.png';

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
      { title: 'about', route: '/about', exact: true },
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
      { title: 'all rooms', route: '/rooms', exact: true },
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

const HomeData = {
  rooms: {
    title: 'Check Out Our Comfortable Yet Affordable Rooms',
    banner: HomeRoomBanner,
    cards: [
      {
        name: 'room 2 - double ensuite',
        url: HomeRoom1,
        price: '75.00',
        maxPers: 2,
        beds: '1 Double, En Suite',
      },
      {
        name: 'room 8 - triple basic',
        url: HomeRoom2,
        price: '75.00',
        maxPers: 3,
        beds: '1 Bunk, 1 Single, Toilet just outside door',
      },
      {
        name: 'room 9 - single basic',
        url: HomeRoom3,
        price: '55.00',
        maxPers: 1,
        beds: '1 Single',
      },
    ],
  },
  testimonials: {
    title: 'testimonials',
    data: [
      {
        name: 'kenneth',
        content:
          'Stayed at the Voyagers many times,just across the road from central station.Always found the staff very friendly and helpful. A steep climb up winding stairs to the single rooms but the same with most small hotels in Amsterdam.Well worth the stay for those on a limited budget.',
        date: '1 June, 2013',
      },
      {
        name: 'matt',
        content:
          'This is a very basic hotel, but one of the cleanest ive been in ,, the hotel is also a coffeeshop downstairs so you must be 18 years or older to stay,, the room i stayed in was the double with a very big tub shower, they also have single and triple rooms, the location is great 2 min from Central station, i would def stay he again.',
        date: '18 June, 2013',
      },
    ],
  },
  about: {
    title: 'about us',
    data: [
      {
        img: About1,
        content:
          'Hotel voyagers , is a small independent open minded hotel for over 21s only, located above the Voyagers coffee shop. Squeezed between Amsterdam central station and zeedijk/redlight.',
      },
      {
        img: About2,
        content:
          'Our of selection rooms are basic & clean, with amazing views of the surrounding canals buildings, we can offer single, double, twin, triple & 4 person rooms. The hotel has it own private entrance/no curfew. There is free wifi in the all rooms.',
      },
      {
        img: About3,
        content:
          'As hotel we offer no breakfast, or parking, but this does not mean guests can not take advante of the amazing surroundings Factilies parking, coffeebars,restraunts pubs, clubs All to be found on the links page.',
      },
    ],
  },
};
export { IconData, InfoData, NavData, FooterData, HomeData };
