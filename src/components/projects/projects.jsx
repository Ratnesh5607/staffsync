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
import FilterBar from "../ui/filterBar";
import { useState } from "react";


const Project = () => {
  const [view, setView] = useState("list");
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FilterBar setView={setView} showView={true} />
      <div className={`${view === "grid" ? "flex" : ""} gap-7 flex-wrap`}>
        {projectList.map((project) => {
          if (view === "grid") {
            return (
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
            )
          }
          else {
            return (
              <div key={project.project_name}>
                <CardHeader className="pl-0">
                  <CardTitle>{project.project_name}</CardTitle>
                  <CardDescription>{project.description.split(".", 2)}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-y-2 pl-0">
                  {
                    project.tech_stack.map(tech =>
                      <p className="rounded-full shadow px-3 py-1 mr-3 " key={project.project_name + "_" + tech}>{tech}</p>
                    )
                  }
                </CardContent>
              </div>
            )
          }
        }
        )}
      </div>
    </div>
  );
}
export default Project;