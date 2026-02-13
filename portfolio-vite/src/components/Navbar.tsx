import { Link } from "react-router";


export default function Navbar() {
    return (
        <div className="sticky top-0 bg-white mb-4 py-4 px-8 w-full h-full border-b-2 border-gray-200 shadow-md">
            <div className="flex justify-between items-center">
                {/*NAME*/}
                <div className='flex'>
                    <Link to='/'>
                        <h1 className='text-4xl text-purple-700 hover:text-purple-500 transition-colors'>Greyson Barsotti</h1>
                    </Link>
                </div>

                {/*PAGES*/}
                <div className='flex gap-6'>
                    {/* Projects */}
                    <Link to='/projects'>
                        <p className='text-xl text-gray-700 hover:text-black transition-colors'>Projects</p>
                    </Link>

                    {/* About Me */}
                    <Link to='/about'>
                        <p className='text-xl text-gray-700 hover:text-black transition-colors'>About Me</p>
                    </Link>

                    {/* Contact */}
                    <Link to='/contact'>
                        <p className='text-xl text-gray-700 hover:text-black transition-colors'>Contact</p>
                    </Link>

                    {/* Resume */}
                    <Link to='/resume'>
                        <p className='text-xl text-gray-700 hover:text-black transition-colors'>Resume</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}