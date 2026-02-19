import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Gutters from '@/components/Gutters.tsx'
import FeaturedProjects from "@/components/FeaturedProjects.tsx"

export default function Projects() {
    return (
        <div className="mt-8">
            <FeaturedProjects />
            <div className="flex flex-col justify-center text-center gap-4 mb-40">
                <Gutters>
                    <h1 className="text-6xl text-purple-700 my-8">Other Projects</h1>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        <a target="_blank" rel="noopener noreferrer" href="https://ctsi.pitt.edu/">
                            <Card className="relative mx-auto w-full max-w-sm pt-0 hover:bg-purple-50 transition-colors cursor-pointer">
                                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                                <img
                                    src="https://avatar.vercel.sh/shadcn1"
                                    alt="Event cover"
                                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                                />
                                <CardHeader>
                                    <CardTitle>CTSI Website Migration</CardTitle>
                                    <CardDescription>
                                        Recreated a website in a new CMS.
                                        Created dynamic web elements & copied content, ensuring accuracy.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    {/*Tags*/}
                                </CardFooter>
                            </Card>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://enact-network.org/">
                            <Card className="relative mx-auto w-full max-w-sm pt-0 hover:bg-purple-50 transition-colors cursor-pointer">
                                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                                <img
                                    src="https://avatar.vercel.sh/shadcn1"
                                    alt="Event cover"
                                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                                />
                                <CardHeader>
                                    <CardTitle>ENACT Website</CardTitle>
                                    <CardDescription>
                                        Created web elements to construct a website.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    {/*Tags*/}
                                </CardFooter>
                            </Card>
                        </a>



                    </div>
                </Gutters>
            </div>
        </div>
    );
}