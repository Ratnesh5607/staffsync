import Image from "next/image"
import { ArrowRight, BarChart2, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Simplify Your <span className="text-primary">Employee Management</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Streamline HR processes, boost productivity, and create a better workplace with our comprehensive employee management solution.
            </p>
            {/* <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="px-6 py-6 h-auto" size="lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-6 py-6 h-auto" size="lg">
                Book a Demo
              </Button>
            </div> */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">Employee Profiles</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">Time Tracking</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">Performance Analytics</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative rounded-lg shadow-2xl z-10 overflow-hidden aspect-video">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Team working together" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}