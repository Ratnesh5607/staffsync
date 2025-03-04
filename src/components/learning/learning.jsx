"use client"

import Link from "next/link";
import { learningList } from "./learn";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";


const Learning = () => {
    return (
        <div className="flex gap-7 flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {learningList.map((tech) =>
                <Card key={tech.tech_name} className="max-w-80">
                    <CardHeader>
                        <CardTitle>{tech.tech_name}</CardTitle>
                        <div className="max-w-full min-h-60 relative rounded overflow-hidden shadow">
                            <Image src={tech.unsplash_image} alt="tech-logo" fill />
                        </div>
                        <CardDescription className="max-h-44 overflow-hidden ">
                            <p>
                                {tech.description}
                            </p>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex-wrap gap-y-2">
                        {
                            tech.where_to_learn.map(learn =>
                                <Link href={learn.link} target="_blank" className="rounded-full shadow px-3 py-1 mx-2 " key={tech.tech_name + "_" + learn.name}>
                                    {learn.name}
                                </Link>
                            )
                        }
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}
export default Learning;