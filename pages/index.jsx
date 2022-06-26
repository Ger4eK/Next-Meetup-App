import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList/MeetupList';


const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

//! SSG
export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://Oleh:1234@cluster0.jowobcl.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
