import Gutters from "@/components/Gutters.tsx";

export default function Contact (){
    return (
        <div>
            <Gutters>
                <div className="flex flex-col content-center justify-center text-center py-32 gap-4">
                    <h1 className="text-6xl text-purple-700">Lets work together!</h1>
                    <p className="text-2xl">Email me at <a href="mailto:gbarsotti262@gmail.com">gbarsotti262@gmail.com</a></p>
                </div>
            </Gutters>
        </div>
    )
}