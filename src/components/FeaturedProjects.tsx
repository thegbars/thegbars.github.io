import ScrapbookImg from "@/assets/scrapbookicon.png"
import RustRacerImg from "@/assets/rustracers.png"
import CSDemoImg from "@/assets/csdemo.png"
import { Badge } from "@/components/ui/badge.tsx"

export default function FeaturedProjects(){
    return(
        <div className="flex flex-col justify-center text-center gap-4 mb-8">
            <h1 className="text-6xl text-purple-700 mb-8">Featured Projects</h1>
            <a href="https://github.com/thegbars/SwissvaleScrapbook" target="_blank" rel="noopener noreferrer">
                <div className="md:w-full grid grid-cols-1 justify-between md:grid-cols-3 border-y-2 border-black hover:bg-purple-50 transition-colors">
                    <div className="flex flex-col md:col-span-2 md:justify-center text-center gap-4 md:order-1 order-2 md:my-0 my-16">
                        <h1 className="text-purple-700 text-4xl">Swissvale Scrapbook</h1>
                        <p className="text-xl px-16">
                            A mobile application that takes users around (either physically or virtually) the community of Swissvale.
                            The experience is framed around oral histories about the vacant lots collected from Swissvale residents.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Badge variant="purple" className="text-md">Unity</Badge>
                            <Badge variant="purple" className="text-md">Mapbox</Badge>
                            <Badge variant="purple" className="text-md">Niantic Spatial</Badge>
                            <Badge variant="purple" className="text-md">WCAG</Badge>
                            <Badge variant="purple" className="text-md">Jira</Badge>
                            <Badge variant="purple" className="text-md">Git</Badge>
                            <Badge variant="purple" className="text-md">C#</Badge>
                        </div>
                    </div>
                    <div className="md:order-2 order-1 flex md:justify-end justify-center">
                        <img className="md:h-full md:max-h-[30em] md:w-auto w-full h-auto object-contain md:rounded-l-xl md:shadow-xl max-md:rounded-b-xl" src={ScrapbookImg} alt="" />
                    </div>
                </div>
            </a>

            <a href="https://github.com/Demonstrator-for-CS/demonstrator-for-cs" target="_blank" rel="noopener noreferrer">
                <div className="md:w-full grid grid-cols-1 justify-between md:grid-cols-3 border-y-2 border-black hover:bg-purple-50 transition-colors">
                    <div className="flex flex-col md:col-span-2 md:justify-center text-center gap-4 order-2 md:my-0 my-16">
                        <h1 className="text-purple-700 text-4xl">CS Demonstrator</h1>
                        <p className="text-xl px-16">
                            An interactive learning assistant for the University of Pittsburgh's Computer Science Department.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Badge variant="purple" className="text-md">TailwindCSS</Badge>
                            <Badge variant="purple" className="text-md">Vite</Badge>
                            <Badge variant="purple" className="text-md">React</Badge>
                            <Badge variant="purple" className="text-md">Javascript</Badge>
                            <Badge variant="purple" className="text-md">Git</Badge>
                        </div>
                    </div>
                    <div className="order-1 flex md:justify-start justify-center">
                        <img className="md:h-full md:max-h-[30em] md:w-auto w-full h-auto object-contain md:rounded-r-xl md:shadow-xl max-md:rounded-b-xl" src={CSDemoImg} alt="" />
                    </div>
                </div>
            </a>

            <a href="https://github.com/Six-Seven-Studios/Rust-Racers" target="_blank" rel="noopener noreferrer">
                <div className="md:w-full grid grid-cols-1 justify-between md:grid-cols-3 border-y-2 border-black hover:bg-purple-50 transition-colors">
                    <div className="flex flex-col md:col-span-2 md:justify-center text-center gap-4 md:order-1 order-2 md:my-0 my-16">
                        <h1 className="text-purple-700 text-4xl">Rust Racers</h1>
                        <p className="text-xl px-16">
                            Rust Racers is a top down, 2D racing game built in Rust. Players can queue up in a lobby to start the race. During the race, players can control their cars and drive around pre-created tracks.
                            Supports up to 4 players and will fill in non-player slots with AI racers.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Badge variant="purple" className="text-md">Rust</Badge>
                            <Badge variant="purple" className="text-md">Bevy</Badge>
                            <Badge variant="purple" className="text-md">Git</Badge>
                        </div>
                    </div>
                    <div className="md:order-2 order-1 flex md:justify-end justify-center">
                        <img className="md:h-full md:max-h-[30em] md:w-auto w-full h-auto object-contain md:rounded-l-xl md:shadow-xl max-md:rounded-b-xl" src={RustRacerImg} alt="" />
                    </div>
                </div>
            </a>
        </div>
    );
}