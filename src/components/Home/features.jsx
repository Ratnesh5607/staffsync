import { Users, Clock, BarChart2, FileText, Shield, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Employee Directory',
    description: 'Centralized database for all employee information, accessible from anywhere.'
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Time & Attendance',
    description: 'Track work hours, breaks, and time off with automated attendance systems.'
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary" />,
    title: 'Performance Management',
    description: 'Set goals, track progress, and conduct reviews to boost employee performance.'
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: 'Document Management',
    description: 'Securely store and manage employee documents and contracts.'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Compliance Tracking',
    description: 'Stay compliant with labor laws and regulations with automated tracking.'
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: 'Recognition & Rewards',
    description: 'Recognize and reward top performers to boost morale and retention.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold ">Powerful Features for Modern HR</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl ">
            Everything you need to manage your workforce efficiently in one platform.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-foreground">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 inline-flex p-3 rounded-full">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}