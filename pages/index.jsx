import MeetupList from '../components/meetups/MeetupList/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Volleyball',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Algeria_and_Japan_women%27s_national_volleyball_team_at_the_2012_Summer_Olympics_%287913959028%29.jpg/1280px-Algeria_and_Japan_women%27s_national_volleyball_team_at_the_2012_Summer_Olympics_%287913959028%29.jpg',
    address: 'Some address 5, 122333 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'Table tennis',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mondial_Ping_-_Men%27s_Singles_-_Round_4_-_Kenta_Matsudaira-Vladimir_Samsonov_-_57.jpg/1280px-Mondial_Ping_-_Men%27s_Singles_-_Round_4_-_Kenta_Matsudaira-Vladimir_Samsonov_-_57.jpg',
    address: 'Some address 3, 333221 Some City',
    description: 'This is a second meetup!',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getServerSideProps() {
  //TODO fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,   
    },
  };
}

//! SSG
//export async function getStaticProps() {
//  //TODO fetch data from an API
//  return {
//    props: {
//      meetups: DUMMY_MEETUPS,
//      revalidate: 10,
//    },
//  };
//}

export default HomePage;
