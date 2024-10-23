//useEffect Examples
import {useState} from 'react';//Ex:1
import Counter from './Counter';//Ex:1

//useEffect Ex:1 Counter App 
const App = () => {
  const [flag, setflag] = useState(true)

  const handleremove = () => {
    setflag(!flag)
  }
  return(
    <>
    <div className='counter-container'>
    {flag?<Counter />:""}
    <button onClick={handleremove} className='btn'>
      {flag? 'Hide Counter':'Show Counter'}
    </button>
    </div>
    </>
  )
}

export default App
