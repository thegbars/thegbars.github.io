import '@/css/App.css'
import Gutters from '@/components/Gutters.tsx'
import { Link } from "react-router";
import ScrapbookImg from "@/assets/scrapbookicon.png"
import RustRacerImg from "@/assets/rustracers.png"
import CSDemoImg from "@/assets/csdemo.png"


export default function Home() {
  return (
    <div>
        <Gutters>
            <div className="flex flex-col content-center justify-center text-center py-64 gap-4">
                <h1 className="text-6xl text-purple-700">Developer. Designer.</h1>
                <p>Here is a little blurb about what that could even mean and explaining and something else maybe</p>
            </div>
        </Gutters>

        <div className="flex flex-col justify-center text-center gap-4 mb-40">
            <h1 className="text-6xl text-purple-700 mb-8">Featured Projects</h1>

            <a href="https://github.com/thegbars/SwissvaleScrapbook" target="_blank" rel="noopener noreferrer">
                <div className="w-full border-y-2 border-black flex hover:bg-purple-50 transition-colors">
                    <img className="h-100 w-100 object-contain rounded-r-xl shadow-xl" src={ScrapbookImg} alt="" />
                    <div className="w-full flex flex-col justify-center text-center gap-4">
                        <h1 className="text-purple-700 text-4xl">Swissvale Scrapbook</h1>
                        <p className="text-xl px-4">
                            A mobile application that takes users around (either physically or virtually) the community of Swissvale.
                            The experience is framed around oral histories about the vacant lots collected from Swissvale residents.
                        </p>
                    </div>
                </div>
            </a>

            <a href="https://github.com/Demonstrator-for-CS/demonstrator-for-cs" target="_blank" rel="noopener noreferrer">
                <div className="w-full border-y-2 border-black flex hover:bg-purple-50 transition-colors">
                    <div className="w-full flex flex-col justify-center text-center gap-4">
                        <h1 className="text-purple-700 text-4xl">CS Demonstrator</h1>
                        <p className="text-xl px-4">
                            An interactive learning assistant for the University of Pittsburgh's Computer Science Department.
                        </p>
                    </div>
                    <img className="h-100 w-100 object-contain rounded-l-xl shadow-xl" src={CSDemoImg} alt="" />
                </div>
            </a>

            <a href="https://github.com/Six-Seven-Studios/Rust-Racers" target="_blank" rel="noopener noreferrer">
                <div className="w-full border-y-2 border-black flex hover:bg-purple-50 transition-colors">
                    <img className="h-100 w-100 object-contain rounded-r-xl shadow-xl" src={RustRacerImg} alt="" />
                    <div className="w-full flex flex-col justify-center text-center gap-4">
                        <h1 className="text-purple-700 text-4xl">Rust Racers</h1>
                        <p className="text-xl px-4">
                            Rust Racers is a top down, 2D racing game built in Rust. Players can queue up in a lobby to start the race. During the race, players can control their cars and drive around pre-created tracks.
                            Supports up to 4 players and will fill in non-player slots with AI racers.
                        </p>
                    </div>
                </div>
            </a>

            <Link to="/projects">
                <p className="bg-purple-700 hover:bg-purple-500 transition-colors text-white text-lg py-4">View All Projects</p>
            </Link>
        </div>
    </div>
  )
}