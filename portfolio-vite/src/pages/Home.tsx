import '@/css/App.css'
import Gutters from '@/components/Gutters.tsx'
import {Button} from '@/components/ui/button'

function Home() {
  return (
    <div>
        <Gutters>
            <div className="flex flex-col content-center justify-center text-center py-16 gap-4">
                <h1 className="text-6xl text-purple-700">Developer. Designer. Dynamic.</h1>
                <p>Here is a little blurb about what that could even mean and explaining and something else maybe</p>
            </div>
        </Gutters>
        <p className='text-4xl'>
            <div className="flex flex-col justify-center text-center gap-4">
                <h1 className="text-4xl text-purple-700">Featured Projects</h1>
                <p>Project1</p>
                <p>Project2</p>
                <p>Project3</p>
                <Button variant="purple">View All Projects</Button>
            </div>
        </p>
        <Gutters>
            <p className='text-4xl'>Text two</p>
        </Gutters>
    </div>
  )
}

export default Home
