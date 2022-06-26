import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList/MeetupList';
import Head from 'next/head';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Browse a huge list of highly active React meetups!'/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
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
