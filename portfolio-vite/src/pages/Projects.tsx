import ScrapbookImg from "@/assets/scrapbookicon.png";
import CSDemoImg from "@/assets/csdemo.png";
import RustRacerImg from "@/assets/rustracers.png";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Gutters from '@/components/Gutters.tsx'

export default function Projects() {
    return (
        <div className="flex flex-col justify-center text-center gap-4 mb-40">
            <h1 className="text-6xl text-purple-700 my-8">Featured Projects</h1>

            <a href="https://github.com/thegbars/SwissvaleScrapbook" target="_blank" rel="noopener noreferrer">
                <div className="w-full border-y-2 border-black flex hover:bg-purple-50 transition-colors">
                    <img className="h-100 w-100 object-contain rounded-r-xl shadow-xl" src={ScrapbookImg} alt="" />
                    <div className="w-full flex flex-col justify-center text-center gap-4">
                        <h1 className="text-purple-700 text-4xl">Swissvale Scrapbook</h1>
                        <p className="text-xl px-16">
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
                        <p className="text-xl px-16">
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
                        <p className="text-xl px-16">
                            Rust Racers is a top down, 2D racing game built in Rust. Players can queue up in a lobby to start the race. During the race, players can control their cars and drive around pre-created tracks.
                            Supports up to 4 players and will fill in non-player slots with AI racers.
                        </p>
                    </div>
                </div>
            </a>

            <Gutters>
                <h1 className="text-6xl text-purple-700 my-8">Other Projects</h1>

                <div className="grid grid-cols-3 gap-4">
                    <Card className="relative mx-auto w-full max-w-sm pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                            <CardTitle>Design systems meetup</CardTitle>
                            <CardDescription>
                                A practical talk on component APIs, accessibility, and shipping
                                faster.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button className="w-full">View Event</Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative mx-auto w-full max-w-sm pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                            <CardTitle>Design systems meetup</CardTitle>
                            <CardDescription>
                                A practical talk on component APIs, accessibility, and shipping
                                faster.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button className="w-full">View Event</Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative mx-auto w-full max-w-sm pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                            <CardTitle>Design systems meetup</CardTitle>
                            <CardDescription>
                                A practical talk on component APIs, accessibility, and shipping
                                faster.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button className="w-full">View Event</Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative mx-auto w-full max-w-sm pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                            <CardTitle>Design systems meetup</CardTitle>
                            <CardDescription>
                                A practical talk on component APIs, accessibility, and shipping
                                faster.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button className="w-full">View Event</Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative mx-auto w-full max-w-sm pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                            <CardTitle>Design systems meetup</CardTitle>
                            <CardDescription>
                                A practical talk on component APIs, accessibility, and shipping
                                faster.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button className="w-full">View Event</Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative mx-auto w-full max-w-sm pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                            <CardTitle>Design systems meetup</CardTitle>
                            <CardDescription>
                                A practical talk on component APIs, accessibility, and shipping
                                faster.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button className="w-full">View Event</Button>
                        </CardFooter>
                    </Card>

                </div>
            </Gutters>

        </div>
    );
}