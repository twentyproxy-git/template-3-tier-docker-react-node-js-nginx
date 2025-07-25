import { useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  const callApi = async () => {
    try {
      const response = await fetch('/api') // Nginx sẽ proxy
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error('API Error:', error)
    }
  }

  return (
    <div>
      <h1>React + Vite + Docker</h1>
      <button onClick={callApi}>Gọi API</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default App
