import HomeRoom1 from './Images/Home/room1.jpg';
import HomeRoom2 from './Images/Home/room2.jpg';
import HomeRoom3 from './Images/Home/room3.jpg';
import About1 from './Images/Home/about1.jpg';
import About2 from './Images/Home/about2.jpg';
import About3 from './Images/Home/about3.jpg';
import HomeRoomBanner from './Images/price-overlay.png';

import Single1 from './Images/Single/Single (1).jpg';
import Single2 from './Images/Single/Single (2).jpg';
import Single3 from './Images/Single/Single (3).jpg';
import Single4 from './Images/Single/Single (4).jpg';
import Single5 from './Images/Single/Single (5).jpg';
import Single6 from './Images/Single/Single (6).jpg';
import Single7 from './Images/Single/Single (7).jpg';
import Single8 from './Images/Single/Single (8).jpg';
import Single9 from './Images/Single/Single (9).jpg';
import Single10 from './Images/Single/Single (10).jpg';

import Double1 from './Images/Double/Double (1).jpg';
import Double2 from './Images/Double/Double (2).jpg';
import Double3 from './Images/Double/Double (3).jpg';
import Double4 from './Images/Double/Double (4).jpg';
import Double5 from './Images/Double/Double (5).jpg';

import Twin1 from './Images/Twin/Twin (1).jpg';
import Twin2 from './Images/Twin/Twin (2).jpg';
import Twin3 from './Images/Twin/Twin (3).jpg';
import Twin4 from './Images/Twin/Twin (4).jpg';
import Twin5 from './Images/Twin/Twin (5).jpg';
import Twin6 from './Images/Twin/Twin (6).jpg';
import Twin7 from './Images/Twin/Twin (7).jpg';
import Twin8 from './Images/Twin/Twin (8).jpg';
import Twin9 from './Images/Twin/Twin (9).jpg';
import Twin10 from './Images/Twin/Twin (10).jpg';
import Twin11 from './Images/Twin/Twin (11).jpg';
import Twin12 from './Images/Twin/Twin (12).jpg';

import Triple1 from './Images/Triple/Triple (1).jpg';
import Triple2 from './Images/Triple/Triple (2).jpg';
import Triple3 from './Images/Triple/Triple (3).jpg';
import Triple4 from './Images/Triple/Triple (4).jpg';
import Triple5 from './Images/Triple/Triple (5).jpg';
import Triple6 from './Images/Triple/Triple (6).jpg';
import Triple7 from './Images/Triple/Triple (7).jpg';
import Triple8 from './Images/Triple/Triple (8).jpg';
import Triple9 from './Images/Triple/Triple (9).jpg';

import Four1 from './Images/Four/Four (1).jpg';
import Four2 from './Images/Four/Four (2).jpg';
import Four3 from './Images/Four/Four (3).jpg';
import Four4 from './Images/Four/Four (4).jpg';
import Four5 from './Images/Four/Four (5).jpg';
import Four6 from './Images/Four/Four (6).jpg';
import Four7 from './Images/Four/Four (7).jpg';
import Four8 from './Images/Four/Four (8).jpg';
import Four9 from './Images/Four/Four (9).jpg';
import Four10 from './Images/Four/Four (10).jpg';
import Four11 from './Images/Four/Four (11).jpg';
import Four12 from './Images/Four/Four (12).jpg';

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
    content: 'info@voyagersamsterdam.com',
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
        content: 'info@voyagersamsterdam.com',
      },
    ],
  },
  {
    title: 'OPENING & CHECK IN TIMES',
    data: [
      {
        icon: 'location',
        content: 'OPEN: Monday - Sunday : 08:00 ish - 24:00',
      },
      {
        icon: 'phone',
        content: 'Check In: Currently unavailable',
      },
      {
        icon: 'email',
        content: 'Check Out: Currently unavailable',
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
    title:
      'The hotel is currently undergoing renovations. If you have any questions be sure to send us an email!',
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
  data: [
    {
      content: 'Making reservations is currently not available.',
    },
  ],
};

const RoomsData = {
  Single: {
    title: 'Single Basic Room',
    content:
      'This type of private room can be rented and paid for only as an entire room. It is fitted with one single bed, accommodating maximum one person, a TV and a sink with hot and cold running water. The shower and toilet are shared and in the corridor.',
    beds: '1 single',
    price: '55.00',
    maxPers: 1,
    rooms: [
      { img: Single1 },
      { img: Single2 },
      { img: Single3 },
      { img: Single4 },
      { img: Single5 },
      { img: Single6 },
      { img: Single7 },
      { img: Single8 },
      { img: Single9 },
      { img: Single10 },
    ],
  },
  Double: {
    title: 'Double Ensuite Room',
    content:
      'This type of private room can be rented and paid for only as an entire room. It is fitted with one double bed, accommodating maximum two people, a TV, a bathtub and a sink with hot and cold running water. The shower and toilet are private and in the room.',
    beds: '1 double, ensuite',
    price: '75.00',
    maxPers: 2,
    rooms: [
      { img: Double1 },
      { img: Double2 },
      { img: Double3 },
      { img: Double4 },
      { img: Double5 },
    ],
  },
  Twin: {
    title: 'Twin Ensuite Room',
    content:
      'This type of private room can be rented and paid for only as an entire room. It is fitted with two separate single beds, accommodating maximum two people, a TV and a sink with hot and cold running water. The shower and toilet are private and in the room.',
    beds: '2 twin, ensuite',
    price: '75.00',
    maxPers: 2,
    rooms: [
      { img: Twin1 },
      { img: Twin2 },
      { img: Twin3 },
      { img: Twin4 },
      { img: Twin5 },
      { img: Twin6 },
      { img: Twin7 },
      { img: Twin8 },
      { img: Twin9 },
      { img: Twin10 },
      { img: Twin11 },
      { img: Twin12 },
    ],
  },
  Triple: {
    title: 'Triple Basic Room',
    content:
      'This type of private room can be rented and paid for only as an entire room. It is fitted with one bunk bed and one single bed, accommodating maximum three people, a TV and a sink with hot and cold running water. The shower and toilet are shared and in the corridor.',
    beds: '1 double, 1 bunk bed',
    price: '75.00',
    maxPers: 3,
    rooms: [
      { img: Triple1 },
      { img: Triple2 },
      { img: Triple3 },
      { img: Triple4 },
      { img: Triple5 },
      { img: Triple6 },
      { img: Triple7 },
      { img: Triple8 },
      { img: Triple9 },
    ],
  },
  Four: {
    title: 'Four Bedded Basic Room',
    content:
      'This type of private room can be rented and paid for only as an entire room. It is fitted with two bunk beds, accommodating maximum four people, a TV and a sink with hot and cold running water. The shower and toilet are shared and in the corridor.',
    beds: '2 bunk beds',
    price: '100.00',
    maxPers: 4,
    rooms: [
      { img: Four1 },
      { img: Four2 },
      { img: Four3 },
      { img: Four4 },
      { img: Four5 },
      { img: Four6 },
      { img: Four7 },
      { img: Four8 },
      { img: Four9 },
      { img: Four10 },
      { img: Four11 },
      { img: Four12 },
    ],
  },
};

const ContactData = {
  title: 'Contact Us',
  subTitle: 'Contact Form',
  details: {
    title: 'Contact Details',
    mail: 'info@voyagersamsterdam.com',
    phone: '0031 (0)20 6246871',
    adress: 'Geldersekade 2 1012 BH Amsterdam',
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
  ContactData,
};
