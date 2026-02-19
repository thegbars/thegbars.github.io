import '@/css/App.css'
import Gutters from '@/components/Gutters.tsx'
import FeaturedProjects from "@/components/FeaturedProjects.tsx";
import {Link} from "react-router";


export default function Home() {
  return (
    <div>
        <Gutters>
            <div className="flex flex-col content-center justify-center text-center py-64 gap-4">
                <h1 className="text-6xl text-purple-700">Developer. Designer.</h1>
                <p className="text-2xl">Here is a little blurb about what that could even mean and explaining and something else maybe</p>
            </div>
        </Gutters>

        <FeaturedProjects />

        <Link to="/projects">
            <p className="bg-purple-700 hover:bg-purple-500 transition-colors text-white text-lg py-4 text-center">View All Projects</p>
        </Link>

    </div>
  )
}