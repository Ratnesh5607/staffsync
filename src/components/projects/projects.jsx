"use client"

import { projectList } from "./project";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";


const Project = () => {
  return (
    <div className="flex gap-7 flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {projectList.map((project) =>
        <Card key={project.project_name} className="max-w-80">
          <div className="max-w-full min-h-60 relative rounded overflow-hidden shadow">
            <Image src={project.unsplash_image} alt="project-image" fill />
          </div>
          <CardHeader>
            <CardTitle>{project.project_name}</CardTitle>
            <CardDescription className="max-h-44 overflow-hidden ">
              <p>
                {project.description}
              </p>
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex-wrap gap-y-2">
            {
              project.tech_stack.map(tech =>
                <p className="rounded-full shadow px-3 py-1 mx-2 " key={project.project_name + "_" + tech}>{tech}</p>
              )
            }
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
export default Project;