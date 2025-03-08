import { Users, Clock, BarChart2, FileText, Shield, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";


const coursesData = [
  { id: 1, name: 'React for Beginners', description: 'Learn the basics of React.' },
  { id: 2, name: 'Advanced JavaScript', description: 'Dive deep into JavaScript.' },
  { id: 3, name: 'Web Development Bootcamp', description: 'Become a full-stack developer.' },
  { id: 4, name: 'Node.js and Express', description: 'Learn back-end development with Node.js.' },
  { id: 5, name: 'HTML & CSS Fundamentals', description: 'Build websites from scratch.' },
  { id: 6, name: 'CSS Grid and Flexbox', description: 'Master layout techniques in CSS.' },
  { id: 7, name: 'Vue.js Essentials', description: 'Learn Vue.js framework.' },
  { id: 8, name: 'Angular Basics', description: 'Get started with Angular framework.' },
  { id: 9, name: 'TypeScript for React', description: 'Integrate TypeScript with React.' },
  { id: 10, name: 'Django Web Development', description: 'Build web apps with Django.' },
];

export default function Courses() {
  return (
    <section id="courses" className="py-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold ">What we can offer to Learn</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl ">
            Everything you need to manage your work efficiently.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-foreground">
          {coursesData.slice(0, 6).map((course) => (
            <Card key={course.id} className="max-w-sm">
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex items-end w-full justify-end mt-8">
        <Link href={"/courses"} >
          <span>See More...</span>
        </Link>
        </div>
      </div>
    </section>
  )
}