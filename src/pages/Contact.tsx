import Gutters from "@/components/Gutters.tsx";
import { Github, Linkedin } from 'lucide-react';

export default function Contact (){
    return (
        <div>
            <Gutters>
                <div className="flex flex-col content-center justify-center text-center pt-32 gap-4">
                    <h1 className="text-6xl text-purple-700">Lets work together!</h1>
                    <p className="text-2xl">Email me at <a className="text-purple-700 hover:underline" href="mailto:gbarsotti262@gmail.com">gbarsotti262@gmail.com</a>
                    </p>
                    <div className="mt-16">
                        <h1 className="text-purple-700 text-4xl">Or visit me here:</h1>
                        <div className="grid grid-cols-1 gap-4 my-8">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/thegbars">
                                <div className="rounded-2xl border-2 border-purple-700 py-8 hover:bg-purple-50 transition-colors cursor-pointer flex gap-4 justify-center items-center hover:font-bold">
                                    <Github className="h-[3em] w-[3em]" />
                                    <p className="text-2xl">thegbars</p>
                                </div>
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/greyson-barsotti/">
                                <div className="rounded-2xl border-2 border-purple-700 py-8 hover:bg-purple-50 transition-colors cursor-pointer flex gap-4 justify-center items-center hover:font-bold">
                                    <Linkedin className="h-[3em] w-[3em]" />
                                    <p className="text-2xl">Greyson Barsotti</p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </Gutters>
        </div>
    )
}