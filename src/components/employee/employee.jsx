"use client"

import { Award, BarChart, Briefcase, CalendarDays, GraduationCap, Mail, MapPin, Phone, User } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { details } from "./details";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";


const Employee = () => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="min-h-screen bg-bacground p-6">
            <div className="container mx-auto space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Side bar for employee details */}
                    <Card className="md:w-1/3">
                        <CardHeader className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 mb-4">
                                <AvatarImage src={details.avatar} alt={details.name} />
                            </Avatar>
                            <CardTitle className="text-2xl">{details.name}</CardTitle>
                            <CardDescription className="flex  flex-col gap-1">
                                <span className="text-lg font-medium">{details.role}</span>
                                <Badge variant="outline" className="mt-1" >
                                    {details.department}
                                </Badge>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-forground" />
                                <span className="text-sm">{details.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-forground" />
                                <span className="text-sm">{details.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-forground" />
                                <span className="text-sm">{details.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4 text-muted-forground" />
                                <span className="text-sm">Join Date: {details.joinDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-muted-forground" />
                                <span className="text-sm">{details.manager}</span>
                            </div>
                            <Separator />
                            <div className="pt-2">
                                <Badge variant={details.status === 'Active' ? 'default' : 'secondary'}>
                                    {details.status}
                                </Badge>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Edit Profile</Button>
                        </CardFooter>
                    </Card>
                    <div className="md:w-2/3">
                        <Tabs defaultValue="overview" className="w-full" value={activeTab} onValueChange={setActiveTab}>
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="skills">Skills</TabsTrigger>
                                <TabsTrigger value="education">Education</TabsTrigger>
                            </TabsList>
                            <TabsContent className="space-y-4" value="overview">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4">
                                            <User className="h-5 w-5" />
                                            Employee Infomation
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground">Employee ID</p>
                                                <p>{details.id}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground">Department</p>
                                                <p>{details.department}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground">Position</p>
                                                <p>{details.role}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground">Staus</p>
                                                <p>{details.status}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground">Manager</p>
                                                <p>{details.manager}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground">Join date</p>
                                                <p>{details.joinDate}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base flex items-center gap-2">
                                                <Award className="h-4 w-4" /> Top Skills
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            {details.skills.slice(0, 4).map((skill, index) => (
                                                <div key={index} className="space-y-1">
                                                    <div className="flex justify-between text-sm">
                                                        <span>{skill.name}</span>
                                                        <span>{skill.level}%</span>
                                                    </div>
                                                    <Progress value={skill.level} className="h-2" />
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base flex items-center gap-2">
                                                <Briefcase className="h-4 w-4" /> Recent Projects
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2">
                                                {details.projects.slice(0, 4).map((project, index) => (
                                                    <li key={index} className="text-sm">
                                                        <div className="font-medium">{project.name}</div>
                                                        <div className="text-muted-foreground flex justify-between">
                                                            <span>{project.role}</span>
                                                            <Badge variant={project.status === 'Completed' ? 'outline' : 'secondary'} className="text-xs">
                                                                {project.status}
                                                            </Badge>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                            {/* Skill tab */}
                            <TabsContent className="space-y-4" value="skills">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <BarChart className="h-5 w-5" /> Skills & Proficiency
                                        </CardTitle>
                                        <CardDescription>
                                            Technical and professional skills assessment
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        {details.skills.map((skill, index) => (
                                            <div key={index} className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="font-medium">{skill.name}</span>
                                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                                </div>
                                                <Progress value={skill.level} className="h-2" />
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            {/* Education tab */}
                            <TabsContent className="space-y-4" value="education">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <GraduationCap className="h-5 w-5" /> Education & Certifications
                                        </CardTitle>
                                        <CardDescription>
                                            Academic background and professional certifications
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="text-lg font-semibold mb-3">Education</h3>
                                                <ul className="space-y-4">
                                                    {details.education.map((edu, index) => (
                                                        <li key={index} className="border-l-2 border-primary pl-4 py-1">
                                                            <div className="font-medium">{edu.degree}</div>
                                                            <div className="text-sm text-muted-foreground">{edu.institution}</div>
                                                            <div className="text-sm">{edu.year}</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <Separator />

                                            <div>
                                                <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                                                <ul className="space-y-4">
                                                    {details.certifications.map((cert, index) => (
                                                        <li key={index} className="border-l-2 border-primary pl-4 py-1">
                                                            <div className="font-medium">{cert.name}</div>
                                                            <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                                                            <div className="text-sm">{cert.year}</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Employee;