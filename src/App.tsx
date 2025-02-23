import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Abang</h1>
    </>
  )
}
export const fetchUser = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    console.error("User not found");
    return null;
  }
  return await response.json();
};

export default App
