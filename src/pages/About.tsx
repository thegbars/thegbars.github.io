import headshot from "@/assets/headshot.png"
import Gutters from "@/components/Gutters"

export default function About() {
    return (
        <Gutters>
            <div className="flex md:flex-row flex-col align-center justify-center py-8 px-4 gap-4">
                <div className="md:min-w-[20em]">
                    <img src={headshot} alt="" className="object-fit rounded-2xl"/>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 md:px-8">
                    <h1 className="text-6xl font-bold text-purple-700">Greyson Barsotti</h1>
                    <p className="text-xl">
                        I'm a full-stack developer and designer based out of Pittsburgh, PA.
                        I've spent the past four years pursuing my education at the University of Pittsburgh
                        and developing my professional skills as a student developer at the Clinical and Translational Science Institute.
                    </p>
                    <p className="text-xl">
                        I graduated in May of 2026 with a degree in both Computer Science and Digital Narrative & Interactive Design.
                    </p>
                    <p className="text-xl">
                        In my off-time I enjoy playing video games, listening to music, and hanging out with friends.
                    </p>
                </div>
            </div>
        </Gutters>
    )
}