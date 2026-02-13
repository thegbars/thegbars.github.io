import Gutters from "@/components/Gutters"
import { Separator } from "@/components/ui/separator"

export default function Resume() {
    return (
        <Gutters>
            {/*Education*/}
            <div className="mb-8">
                <h1 className="text-4xl text-purple-700 mb-4">Education</h1>
                <div className="mb-4">
                    <p>University of Pittsburgh</p>
                    <p className="text-gray-700">Pittsburgh, Pa.</p>
                </div>

                <div className="mb-4">
                    <p>BSc in Computer Science & Digital Narrative and Interactive Design</p>
                    <p className="text-gray-700">August 2022 ‑ Present</p>
                    <p className="text-gray-700">Expected Graduation: May 2026 GPA: 3.4</p>
                    <p className="text-gray-700">School of Computing and Information, Dietrich School of Arts and Sciences</p>
                </div>

                <h1 className="text-2xl text-purple-700 mb-4">Achieved Dean's List:</h1>
                <ul>
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
                Student Web Developer Spring 2023 ‑ Present
                Clinical and TranslaKonal Science InsKtute (CTSI) Pi;sburgh, Pa.
                • Developed web elements using Razor syntax to integrate with a Content Management System (CMS) for a
                dynamic ediKng experience
                • Created a fully funcKoning website with assistance from another student worker and industry professionals
                • Migrated content from an outdated CMS to a new one, ensuring consistency and accuracy
                • Conducted quality assurance by tesKng collaborator’s Kckets to provide a high‑quality website
                Student Quality Assurance Analyst Summer 2022 ‑ Spring 2023
                Clinical and TranslaKonal Science InsKtute (CTSI) Pi;sburgh, Pa.
                • Ensured a high-quality user experience on websites by conducKng manual tests using industry standard
                cross‑browser tesKng tools
                • Developed automaKc test scripts using Selenium‑JS for use on CTSI’s various websites
                • Collaborated with the Quality Assurance and IT teams to ensure seamless integraKon of tesKng scripts
                <Separator className="bg-black mt-8" />
            </div>

            <div className="mb-8">
                <h1 className="text-4xl text-purple-700 mb-4">Skills</h1>

                <h1 className="text-2xl text-purple-700 my-4">Hard Skills</h1>
                <p>Programming Languages: Java, C, C#, HTML,
                    Python, JavaScript, Rust
                    • Frameworks & Libraries: Umbraco CMS, Node.js, Flask, Bootstrap, React, Unity, Bevy, OpenGL</p>

                <h1 className="text-2xl text-purple-700 my-4">Soft Skills</h1>
                <p>
                    Attention to detail
                    • Problem Solving
                    • User‑Centered Thinking
                    • Communication
                    Time Management
                    • Teamwork
                    • Collaboration
                    • Project Management
                </p>
            </div>

        </Gutters>
    )
}