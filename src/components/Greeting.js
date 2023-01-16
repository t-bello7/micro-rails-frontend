import * as React from 'react';
import { useGetGreetingQuery } from '../services/greeting';

const Greeting = () => {
  const { data, error, isLoading } = useGetGreetingQuery('greetings');
  if (error) {
    return <div> Oh no, there was an error</div>;
  } if (isLoading) {
    return <div>Loading...</div>;
  }
  return <h3>{data.name}</h3>;
};

export default Greeting;
