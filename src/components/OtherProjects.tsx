import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import ctsiImg from "@/assets/ctsi.png"
import enactImg from "@/assets/enact.png"
import toadImg from "@/assets/andToad.png"

const projects = [
    {
        title: "CTSI Website Migration",
        description: "Health research website, moved content from an old version of the CMS, developed web elements",
        image: ctsiImg,
        link: "https://ctsi.pitt.edu",
        technologies: ["Razor", "CSS", "Bootstrap", "HTML", "C#", "UmbracoCMS", "Javascript", "Jira", "Git", "Examine"]
    },
    {
        title: "ENACT Website",
        description: "Health research website",
        image: enactImg,
        link: "https://enact-network.org/",
        technologies: ["Razor", "CSS", "Bootstrap", "HTML", "C#", "UmbracoCMS", "Javascript", "Jira", "Git", "Examine"]
    },
    {
        title: "and Toad",
        description: "Video game demo",
        image: toadImg,
        link: "#",
        technologies: ["Unity", "TextMeshPro", "Git"]
    }
]

export default function OtherProjects() {
    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {projects.map((project, index) => (
                <Card key={index} className="pt-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] hover:shadow-xl transition-shadow">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="h-48 overflow-hidden rounded-t-xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </a>
                    <CardHeader>
                        <CardTitle className="text-purple-700">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="purple" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}