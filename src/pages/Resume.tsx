import Gutters from "@/components/Gutters"
import { Separator } from "@/components/ui/separator"
import {Button} from "@/components/ui/Button"

export default function Resume() {
    return (
        <Gutters>
            <div className="my-16 flex flex-col gap-4 items-center justify-center">
                <h1 className="text-6xl text-purple-700">Resume</h1>
                <a target="_blank" rel="noopener noreferrer" href="src/assets/gbars-resume.pdf">
                    <Button variant="purple" className="px-4 py-8">
                        <p className="text-xl">DOWNLOAD RESUME</p>
                    </Button>
                </a>
            </div>
            {/*Education*/}
            <div className="mb-8">
                <h1 className="text-4xl text-purple-700 mb-4">Education</h1>
                <div className="mb-4">
                    <p>University of Pittsburgh</p>
                    <p className="text-gray-700">Pittsburgh, Pa.</p>
                </div>

                <div className="mb-4">
                    <p>B.S. in Computer Science & Digital Narrative and Interactive Design</p>
                    <p className="text-gray-700">August 2022 ‑ Present</p>
                    <p className="text-gray-700">Expected Graduation: May 2026</p>
                    <p className="text-gray-700">GPA: 3.4</p>
                </div>

                <h1 className="text-2xl text-purple-700 mb-4">Achieved Dean's List:</h1>
                <ul className="list-disc list-inside">
                    <li>Fall 2025-2026</li>
                    <li>Spring 2024-2025</li>
                    <li>Fall 2024‑2025</li>
                    <li>Fall 2022‑2023</li>
                </ul>

                <h1 className="text-2xl text-purple-700 my-4">Relevant Courses</h1>
                <p>
                    Software Engineering, Principles of Computer Game Design & Implementation, Intro to
                    Operating Systems, Intro to Computer Graphics, Innovation & Entrepreneurship in IT, Intro to Systems
                    Software, Database Management Systems, Algorithms and Data Structures 1 & 2, Data Communication &
                    Computer Networks, Intermediate Programming in Python, Intermediate Programming in Java, NarraKve and
                    Technology, Composing Digital Media.
                </p>
                <Separator className="bg-black mt-8" />
            </div>

            {/*Career Experience*/}
            <div className="mb-8">
                <h1 className="text-4xl text-purple-700 mb-4">Career Experience</h1>
                <div className="mb-4">
                    <h1 className="text-2xl text-purple-700">Student Web Developer</h1>
                    <div className="md:flex md:justify-between mb-4">
                        <p>Clinical and Translational Science Institute (CTSI)</p>
                        <p>Spring 2023 ‑ Present</p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Developed web elements using Razor syntax to integrate with a Content Management System (CMS) for a
                            dynamic editing experience</li>
                        <li>Created a fully functioning website with a two-person team and supervision from full-time developers</li>
                        <li>Migrated content from an outdated CMS to a new one, ensuring consistency and accuracy</li>
                        <li>Conducted quality assurance by testing 100+ tickets of collaborators to provide a high‑quality website</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h1 className="text-2xl text-purple-700">Student Quality Assurance Analyst</h1>
                    <div className="md:flex md:justify-between mb-4">
                        <p>Clinical and Translational Science Institute (CTSI)</p>
                        <p>Summer 2022 ‑ Spring 2023</p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Ensured a high-quality user experience on websites by conducting manual tests using industry-standard
                            cross‑browser testing tools, such as BrowserStack</li>
                        <li>Developed automatic test scripts using Selenium‑JS for use on 3 of CTSI’s websites</li>
                        <li>Collaborated daily with the Quality Assurance and IT teams to ensure seamless integration of testing scripts</li>
                    </ul>
                </div>
                <Separator className="bg-black mt-8" />
            </div>

            {/* Skills */}
            <div className="mb-8">
                <h1 className="text-4xl text-purple-700 mb-4">Skills</h1>

                    <h1 className="text-2xl mb-4 text-purple-700">Programming Languages</h1>
                    <ul className="list-disc list-inside mb-4">
                        <li>Java</li>
                        <li>C</li>
                        <li>C#</li>
                        <li>HTML</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Rust</li>
                    </ul>

                    <h1 className="text-2xl mb-4 text-purple-700">Frameworks & Libraries</h1>
                    <ul className="list-disc list-inside mb-4">
                        <li>Umbraco CMS</li>
                        <li>Node.js</li>
                        <li>Flask</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Unity</li>
                        <li>Bevy</li>
                        <li>OpenGL</li>
                    </ul>

                <h1 className="text-2xl text-purple-700 mb-4">Soft Skills</h1>
                <ul className="list-disc list-inside">
                    <li>Attention to detail</li>
                    <li>Problem Solving</li>
                    <li>User‑Centered Thinking</li>
                    <li>Communication</li>
                    <li>Time Management</li>
                    <li>Teamwork</li>
                    <li>Collaboration</li>
                    <li>Project Management</li>
                </ul>
            </div>
        </Gutters>
    )
}