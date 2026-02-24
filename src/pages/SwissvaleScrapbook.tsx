import Gutters from "@/components/Gutters"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge.tsx"
import {Github} from "lucide-react";
import { CircleDot } from 'lucide-react';
import scrapdesign from '@/assets/scrap-design.png'
import scrapmap from '@/assets/scrap-map.png'
import scrapstory from '@/assets/scrap-story.png'


export default function SwissvaleScrapbook() {
    return (
        <Gutters>
            <div className="my-8">
                <div className="mb-8 flex gap-4">
                    <h1 className="text-4xl text-purple-700 mb-1">Swissvale Scrapbook</h1>
                    <Badge variant="purple">
                        <CircleDot />
                        <p>Development In Progress</p>
                    </Badge>
                </div>
                {/*Imgs*/}
                <div className="flex justify-around flex-wrap mb-8">
                    <img src={scrapdesign} alt="" className="h-100 w-100 object-contain"/>
                    <img src={scrapmap} alt="" className="h-100 w-100 object-contain"/>
                    <img src={scrapstory} alt="" className="h-100 w-100 object-contain"/>
                </div>
                <a href="https://github.com/SwissvaleScrapbook/SwissvaleScrapbook" target="_blank" rel="noopener noreferrer">
                    <div className="rounded-2xl border-2 border-purple-700 py-2 hover:bg-purple-50 transition-colors cursor-pointer flex gap-4 justify-center items-center">
                        <Github className="h-[2em] w-[2em]" />
                        <p className="text-xl">View Project on GitHub</p>
                    </div>
                </a>
                {/* The Problem */}
                <div className="my-8">
                    <h2 className="text-2xl text-purple-700 mb-4">The Problem</h2>
                    <p className="mb-4">
                        Researchers interested in Swissvale, PA, have collected data on the community relating to the vacant lots scattered around the borough. The statistics are being stored within software for geographic information systems. How can that data be combined with oral stories to make the average person interested and transition the community into a state of revitalization? This is the question that I wanted to answer by designing Swissvale Scrapbook.
                    </p>
                </div>

                <Separator className="bg-black my-8" />

                {/* Medium */}
                <div className="mb-8">
                    <h2 className="text-2xl text-purple-700 mb-4">Medium</h2>
                    <p className="mb-4">
                        The first phase of this project was spent deciding on <em>how</em> I want to interface with the community to tell the stories of the vacant lots. After looking on the internet for some ways to solve this problem, I came across instances of other communities using augmented reality to enhance community connection. After Ishinomaki, Japan was devastated by the Great East Japan Earthquake, local officials commissioned a team to work on a revitalization project in the form of an Augmented Reality RPG. A study in 2024 found that "The game's integration of gamification principles demonstrates how localized narratives and interactive experiences can foster regional attachment, cultural pride, and international accessibility, showcasing its potential for broader applications in other regions seeking sustainable development" (Yamaguchi, Mitsuhashi).
                    </p>
                    <p className="mb-4">
                        The Ishinomaki City Revitalization RPG and its use of augmented reality reminded me of Pokémon Go, the game that took over mobile markets in 2016. Pokémon Go contains various points around the world that give the player rewards for physically visiting, called Pokéstops. The Pokéstops and the rewards associated with them act as an incentive for the player to physically travel and get outside. I wanted to combine the community attachment aspects of the Ishinomaki City Revitalization RPG and the Pokéstop system of Pokémon Go in order to incentivize players to walk around Swissvale. To do this, I started crafting a plan to work on an augmented reality mobile application.
                    </p>
                </div>

                <Separator className="bg-black my-8" />

                {/* Transforming Location into Place */}
                <div className="mb-8">
                    <h2 className="text-2xl text-purple-700 mb-4">Transforming Location into Place</h2>
                    <p className="mb-4">
                        While I had originally thought I was dealing with <em>place</em> within Swissvale Scrapbook, I was simply thinking of the vacant lots as a location. A location is just made up of coordinates on a map. What I needed to do was take users to a place, rather than a location.
                    </p>
                    <p className="mb-4">
                        Drs. Kelsey Cameron and Jessica FitzPatrick state that "Definitions of place often combine physical or scientific specifics (size dimensions, building materials, geographic coordinates) with a sense of the intangible or experiential (New York City's connotations as 'The Big Apple', a neighborhood garden where your grandmother taught you how to pick strawberries)" (Cameron, FitzPatrick).
                    </p>
                    <p className="mb-4">
                        Dealing with place instead of location gives meaning to the augmented reality experience. By helping the community turn the vacant lots into places by leading them through an experience with the physical location, it builds a connection and fosters a sense of community.
                    </p>
                </div>

                <Separator className="bg-black my-8" />

                {/* Designing */}
                <div className="mb-8">
                    <h2 className="text-2xl text-purple-700 mb-4">Designing</h2>
                    <p className="mb-4">
                        After answering the question of <em>why</em> augmented reality, I was able to begin work on figuring out exactly what the application should be able to do. One feature the project sponsors were really looking for was a way for users to be guided around the community, with vacant lots being highlighted. To do this, I pulled from Pokémon Go's Poké Stop system and decided that a marker on a map would represent each vacant lot. A term I learned from my project sponsors who deal with Geographic Information Systems is Area of Interest (AOI). Therefore, each map marker representing a vacant lot will be referred to as an AOI.
                    </p>
                    <p className="mb-4">
                        One of the main points of this project is to tell the stories of each vacant lot by having users interact with the oral histories collected at each vacant lot. In order to tell these stories, I decided that each AOI should feature audio clips of oral histories for users to hear.
                    </p>
                    <p className="mb-4">
                        Members of the community should not only be able to hear the stories, but also contribute their own. Milmon F. Harrison, a professor and researcher from the University of California, has significant experience in the world of storytelling. He states that "...the healing power of community storytelling derives not only from the telling of one's story but also from being listened to and feeling like one has been heard" (Harrison). With this, I decided that each AOI should allow users to submit their own stories and images. This should allow community members to better connect with the stories and with each other.
                    </p>
                    <p className="mb-4">
                        Through an in-class workshop session, classmates indicated that they wanted to see historical images of some kind. With this, I decided that each AOI should have a list of images that users can view to get a historical perspective on the vacant lot.
                    </p>
                </div>

                <Separator className="bg-black my-8" />

                {/* Initial Demo */}
                <div className="mb-8">
                    <h2 className="text-2xl text-purple-700 mb-4">Initial Demo</h2>
                    <p className="mb-4">
                        Still within the confines of the end-of-semester deadline, I knew I wouldn't be able to create a fully fleshed-out application. The goal was to create something that users could begin interacting with in order to collect feedback. Unity is an industry-standard tool that has a lot of support for augmented reality and mixed reality through <a href="https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@6.4/manual/index.html" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-600 underline">AR Foundation</a>, so I decided to move forward with development using Unity.
                    </p>
                    <p className="mb-4">
                        This initial demo features a player character that is placed on a map. This is based on GPS data fed in through the device's positioning system. For the map, I am using Mapbox's SDK for Unity. This matches the user's raw position data to a physical location on a map.
                    </p>
                    <p className="mb-4">
                        The demo also has one AOI, represented by a simple map pin icon. By walking within the radius of the pin's trigger component, the player is shown a pop-up with the location name as well as three placeholder images.
                    </p>
                    <p className="mb-4">
                        During another in-class workshop session, classmates provided valuable feedback on this version of the demo. A lot of people mentioned they would like each map icon to be a bit more custom compared to the generic map pin of the current demo. They also indicated that they would like to see more AOIs than just vacant lots. There was also some feedback regarding the directional indicator of the player. People were not always clear that it was pointing in the direction of your phone. Additionally, it was hidden from view when users were facing away from the camera. With this feedback in mind, I worked on making improvements to the project.
                    </p>
                </div>

                <Separator className="bg-black my-8" />

                {/* Improved Demo */}
                <div className="mb-8">
                    <h2 className="text-2xl text-purple-700 mb-4">Improved Demo</h2>
                    <p className="mb-4">
                        After taking in feedback from various individuals, I iterated on the demo. One of the biggest concerns users had was that they didn't understand where they were on the map. To fix this, I ended up making the player more distinguished. It is now the silhouette of a person instead of an arrow and uses a much bolder color. I also made the direction indicator into an arrow that spins in the direction the phone is pointed and is always on the camera, instead of in the middle.
                    </p>
                    <p className="mb-4">
                        Additionally, I worked on improving the visuals of the pop-up as the old one was a bit basic.
                    </p>
                    <p className="mb-4">
                        Not every feature was fully implemented in this version of the demo. For example, the oral history topic buttons do not take you to a separate screen to show off quotes. The plus button in the bottom right is also missing.
                    </p>
                </div>

                <Separator className="bg-black my-8" />

                {/* Learning Experience */}
                <div className="mb-8">
                    <h2 className="text-2xl text-purple-700 mb-4">Learning Experience</h2>
                    <p className="mb-4">
                        This project taught me a lot about how to design a project. Before working on this, I hadn't come up with a project from scratch. Usually, in the Computer Science world, they throw project descriptions at you without much room for creativity. By developing this project, I was able to grow my skillset as a designer. It also taught me how to gather feedback from others on a product. By interacting with classmates, project sponsors, and various others, I was able to iterate on my design throughout the semester. I will certainly carry the skills learned from this project into my future career as a designer and developer.
                    </p>
                </div>

                <Separator className="bg-black my-8" />

                {/* Works Cited */}
                <div className="mb-8">
                    <h2 className="text-2xl text-purple-700 mb-4">Works Cited</h2>
                    <div className="space-y-4 text-sm">
                        <p className="pl-8 -indent-8">
                            Yamaguchi, Yasumasa, and Yuta Mitsuhashi. "Gamified Learning for Community Revitalization: The Case of Ishinomaki City's Local Revitalization RPG." <em>Journal of Interactive Learning Research</em>, <a href="https://doi.org/10.70725/433129nussaf" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-600 underline">https://doi.org/10.70725/433129nussaf</a>.
                        </p>
                        <p className="pl-8 -indent-8">
                            Cameron, Kelsey, and Jessica FitzPatrick. "Designing Lived Space: Community Engagement Practices in Rooted AR." <em>Augmented and Mixed Reality for Communities</em>, edited by Joshua A. Fisher, 1st ed., CRC Press, 2021, pp. 83–102. <a href="https://doi.org/10.1201/9781003052838-7" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-600 underline">https://doi.org/10.1201/9781003052838-7</a>.
                        </p>
                        <p className="pl-8 -indent-8">
                            Harrison, Milmon F. "California Listenin': A Reflection on the Healing Power of Community Storytelling." <em>Journal of Community Engagement and Scholarship</em>, vol. 14, no. 2, 2022, <a href="https://doi.org/10.54656/jces.v14i2.34" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-600 underline">https://doi.org/10.54656/jces.v14i2.34</a>.
                        </p>
                    </div>
                </div>
            </div>
        </Gutters>
    )
}