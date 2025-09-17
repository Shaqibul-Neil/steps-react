import './App.css';
import Steps from './Steps';
import DateCounter from './DateCounter';
import Users from './Components/Users';
import Effect from './Components/Effect';
import { Suspense } from 'react';

function App() {
  const apiUrl = 'https://fake-json-api.mock.beeceptor.com/users';

  const userPromise = fetch(apiUrl).then(res => {
    return res.json();
  });

  return (
    <>
      <Steps />
      <DateCounter />
      <Suspense fallback={'Loading...'}>
        <Users userPromise={userPromise} />
      </Suspense>
      <Suspense fallback={'Loading...'}>
        <Effect />
      </Suspense>
    </>
  );
}

export default App;
