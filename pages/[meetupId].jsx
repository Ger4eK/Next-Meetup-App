import React from 'react';
import MeetupDetail from '../components/meetups/MeetupDetail/MeetupDetail';

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Algeria_and_Japan_women%27s_national_volleyball_team_at_the_2012_Summer_Olympics_%287913959028%29.jpg/1280px-Algeria_and_Japan_women%27s_national_volleyball_team_at_the_2012_Summer_Olympics_%287913959028%29.jpg'
      title='This is a first meetup!'
      address='Some address 5, 122333 Some City'
      description='The description'
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',      
        },
      },
    ],
  };
}
      
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  //TODO fetch data from an API
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Algeria_and_Japan_women%27s_national_volleyball_team_at_the_2012_Summer_Olympics_%287913959028%29.jpg/1280px-Algeria_and_Japan_women%27s_national_volleyball_team_at_the_2012_Summer_Olympics_%287913959028%29.jpg',
        title: 'This is a first meetup!',
        address: 'Some address 5, 122333 Some City',
        description: 'The description',
      },
    },
  };
}

export default MeetupDetails;
