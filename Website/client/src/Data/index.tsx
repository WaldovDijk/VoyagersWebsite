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

const AboutData = {
  About: {
    title: 'About Voyagers Hotel',
    data: [
      {
        content:
          'Voyagers Hotel Amsterdam is particularly well-suited to travelers who smoke, as the reception and lobby are in a coffeeshop, although smoking is not allowed in the rooms or the common areas of the hotel because smoke detectors throughout the building are extremely sensitive, and only a small amount of smoke will quickly trigger the fire alarm.',
      },
      {
        content:
          'Due to the coffeeshop being downstairs, the regulations applying to coffeeshop operation must be strictly observed (an age limit of eighteen years is enforced, and government-issued photo identification is required), despite the entrance to the rooms being separate from the coffeeshop.',
      },
      {
        content:
          'Voyagers Hotel Amsterdam has two single rooms with shared shower and toilet on the top floor. There is no lift in the building, so rooms can only be reached by climbing stairs.',
      },
      {
        content:
          'The two twin and two double rooms all have a canal view and private shower and toilet, except for the one in the basement, which only has a small window with a view to the street.',
      },
      {
        content:
          'One of the double rooms also has a bathtub. The only triple room has shared shower and toilet, as do the two quad rooms, which are both fitted with bunk beds.',
      },
    ],
  },
  General: {
    title: 'General Information',
    data: [
      {
        title: 'Number/type of rooms',
        content:
          'Voyagers Hotel Coffeeshop Amsterdam has 10 rooms in total: 2 singles basic, 1 double ensuite, 1 double shower in the basement, 2 twins ensuite, 1 triple basic, and 3 quads basis.',
      },
      {
        title: 'City tax',
        content:
          '5,50% included. This 5,50% of the accommodation cost is charged on top of the listed price, is paid to the hotel and goes to public finances for the city of Amsterdam.',
      },
      {
        title: 'Value Added Tax',
        content: '6% included. Called BTW in Dutch.',
      },
      { title: 'Breakfast', content: 'Excluded, and not served.' },
      {
        title: 'Cancellation policy',
        content:
          '2 days. You can cancel your confirmed reservation without any charge up to 2 days before your arrival day.',
      },
    ],
  },
  Policies: {
    title: 'Policies',
    data: [
      {
        title: 'Receptions',
        content: 'open 10:00-23:00, located in the coffeeshop downstairs.',
      },
      {
        title: 'Check in',
        content:
          'from 15:00 until 23:00. The latest check in time possible is 23:00. You cannot check in after this deadline. Please note that the reception of the hotel is in the coffeeshop downstairs and is not possible to check in after the coffeeshop is closed, due to strict coffeeshop regulations. The hotel reception and coffeeshop is open every day (on Friday and Saturday too) from 10:00 until 23:00. See the age limit restriction too...      ',
      },
      { title: 'Check out', content: 'until 11:00.' },
      {
        title: 'Payment method',
        content: 'in advance or upon arrival in full.',
      },
      { title: 'Credit card', content: 'no.' },
      { title: 'Key deposit', content: 'no.' },
      {
        title: 'Curfew/lock out',
        content:
          'no, guests are issued a key card at check-in, which gives them 24 hour access to the hotel and their room.',
      },
      { title: 'Smoking', content: 'not allowed.' },
      { title: 'Soft drugs', content: 'only allowed in the coffeeshop.' },
      { title: 'Groups', content: 'stag and hen parties are not allowed.' },
      {
        title: 'Afe limit',
        content:
          'strictly from 18 years. All the guests must show their valid identity document with portrait photo as passport, identity card or driver license to check in. Please note that if you are younger than 18 you are not allowed to check in to the hotel or to enter the coffeeshop! See the check in time restriction too...',
      },
      { title: 'Children', content: 'strictly not allowed.' },
      { title: 'Pets', content: 'strictly not allowed.' },
      { title: 'Visitors', content: 'not allowed.' },
    ],
  },
  Services: {
    title: 'Services',
    data: [
      {
        title: 'Internet',
        content:
          'Wi-Fi is available throughout the building free of charge. The signal on the top floor is weak.',
      },
      { title: 'Parking', content: 'no' },
      { title: 'Bicycle storage', content: 'no' },
      { title: 'Luggage room', content: 'no' },
      { title: 'Lockers', content: 'no, the rooms are private.' },
      { title: 'Security safe', content: 'no.' },
      { title: 'Housekeeping', content: 'rooms are cleaned after check-out.' },
      { title: 'Room service', content: 'no.' },
      { title: 'Tourist information', content: 'no.' },
    ],
  },
  Facilities: {
    title: 'Facilities',
    data: [
      {
        title: 'Furnishings/appliances',
        content:
          'bed, chair, bedside table, hanging space, lamp, sink, mirror, electrical outlet, and central heating.',
      },
      {
        title: 'Linen, towels, soap',
        content: 'are automatically provided free of charge.',
      },
      { title: 'Bar', content: 'no.' },
      { title: 'Restaurant', content: 'no.' },
      {
        title: 'Common room',
        content: 'no, but there is a coffeeshop downstairs.',
      },
      { title: 'Smoking room', content: 'no.' },
      { title: 'Kitchen', content: 'no.' },
      { title: 'Laundry', content: 'no.' },
      { title: 'Air conditioning', content: 'no.' },
      { title: 'Elevator', content: 'no, with steep and narrow stairs.' },
      { title: 'Dsiabled facilities', content: 'no.' },
    ],
  },
  Location: {
    title: 'Location',
    data: [
      {
        title: 'Hotel directions',
        content:
          'Walk 3 minutes from Amsterdam Centraal Station, the main railway station for the city (with a direct connection to Schiphol Airport, approximately 20 minutes by train) and public transportation hub, with metro, tram, and bus stops.',
      },
      {
        title: 'Public transport',
        content: 'Walking distance from Amsterdam Central Station.',
      },
      { title: 'Shuttle service', content: 'no.' },
    ],
  },
};

const ReservationData = {
  title: 'Reservations & Bookings',
  content:
    'Please click the below button to check our availability for the upcoming weeks / months and see if we have any rooms available.',
};

const RoomsData = {
  Single: {
    title: 'Single Basic Room',
    concent:
      'This type of private room can be rented and paid for only as an entire room. It is fitted with one single bed, accommodating maximum one person, a TV and a sink with hot and cold running water. The shower and toilet are shared and in the corridor.',
    beds: '1 single',
    price: '55.00',
    maxPers: 1,
  },
  Double: {
    title: 'Double Ensuite Room',
    concent:
      'This type of private room can be rented and paid for only as an entire room. It is fitted with one double bed, accommodating maximum two people, a TV, a bathtub and a sink with hot and cold running water. The shower and toilet are private and in the room.',
    beds: '1 double, ensuite',
    price: '75.00',
    maxPers: 2,
  },
  Twin: {
    title: 'Twin Ensuite Room',
    concent:
      'This type of private room can be rented and paid for only as an entire room. It is fitted with two separate single beds, accommodating maximum two people, a TV and a sink with hot and cold running water. The shower and toilet are private and in the room.',
    beds: '2 twin, ensuite',
    price: '75.00',
    maxPers: 2,
  },
  Triple: {
    title: 'Triple Basic Room',
    concent:
      'This type of private room can be rented and paid for only as an entire room. It is fitted with one bunk bed and one single bed, accommodating maximum three people, a TV and a sink with hot and cold running water. The shower and toilet are shared and in the corridor.',
    beds: '1 double, 1 bunk bed',
    price: '75.00',
    maxPers: 3,
  },
  Four: {
    title: 'Four Bedded Basic Room',
    concent:
      'This type of private room can be rented and paid for only as an entire room. It is fitted with two bunk beds, accommodating maximum four people, a TV and a sink with hot and cold running water. The shower and toilet are shared and in the corridor.',
    beds: '2 bunk beds',
    price: '100.00',
    maxPers: 4,
  },
};
export {
  IconData,
  InfoData,
  NavData,
  FooterData,
  HomeData,
  AboutData,
  ReservationData,
  RoomsData,
};
