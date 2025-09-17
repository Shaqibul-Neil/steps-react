import { useEffect, useState } from 'react';

const Effect = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(prev => prev + 1);
  };
  console.log(users);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [count]);

  return (
    <div className="mt-20 text-center">
      <h1>Use Effect api load: {count} times</h1>
      <button
        className="bg-amber-600 w-24 h-12 rounded-3xl"
        onClick={handleCount}
      >
        Increase
      </button>
      {users.map(user => (
        <h3>{user.name}</h3>
      ))}
    </div>
  );
};
export default Effect;
