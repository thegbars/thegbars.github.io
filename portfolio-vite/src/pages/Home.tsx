import '@/css/App.css'
import Gutters from '@/components/Gutters.tsx'

function Home() {
  return (
    <div>
        <Gutters>
            <p className='text-4xl'>Text one</p>
        </Gutters>
        <h1 className='text-4xl'>Text middle</h1>
        <Gutters>
            <p className='text-4xl'>Text two</p>
        </Gutters>
    </div>
  )
}

export default Home
