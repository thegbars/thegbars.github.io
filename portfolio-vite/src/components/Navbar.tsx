import {Button} from '@/components/ui/button.tsx'
import { Link } from "react-router";


export default function Navbar() {
    return (
        <div className="sticky top-0 bg-white mb-4 py-4 px-8 w-full h-full border-b-2 border-gray-200 shadow-md">
            <div className="flex justify-between items-center">
                {/*NAME*/}
                <div className='flex'>
                    <Link to='/'>
                        <Button variant='ghost'>
                            <h1 className='text-4xl text-purple-700 hover:text-purple-500 transition-colors'>Greyson Barsotti</h1>
                        </Button>
                    </Link>
                </div>

                {/*PAGES*/}
                <div className='flex gap-1'>
                    {/* Projects */}
                    <Link to='/projects'>
                        <Button variant='ghost'>
                            <p className='text-xl text-gray-700 hover:text-black transition-colors'>Projects</p>
                        </Button>
                    </Link>

                    {/* About Me */}
                    <Link to='/about'>
                        <Button variant='ghost'>
                            <p className='text-xl text-gray-700 hover:text-black transition-colors'>About Me</p>
                        </Button>
                    </Link>

                    {/* Contact */}
                    <Link to='/contact'>
                        <Button variant='ghost'>
                            <p className='text-xl text-gray-700 hover:text-black transition-colors'>Contact</p>
                        </Button>
                    </Link>

                    {/* Resume */}
                    <Link to='/resume'>
                        <Button variant='ghost'>
                            <p className='text-xl text-gray-700 hover:text-black transition-colors'>Resume</p>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}