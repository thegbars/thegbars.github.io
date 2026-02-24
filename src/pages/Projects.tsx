import Gutters from '@/components/Gutters.tsx'
import FeaturedProjects from "@/components/FeaturedProjects.tsx"
import OtherProjects from "@/components/OtherProjects.tsx"

export default function Projects() {
    return (
        <div className="mt-8">
            <FeaturedProjects />
            <div className="flex flex-col justify-center text-center gap-4 mb-40">
                <Gutters>
                    <h1 className="text-6xl text-purple-700 my-8">Other Projects</h1>
                    <OtherProjects />
                </Gutters>
            </div>
        </div>
    );
}