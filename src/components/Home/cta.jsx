import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to Transform Your HR Operations?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
          Join thousands of companies that trust StaffSync for their employee management needs.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="secondary" className="bg-white text-primary hover:bg-blue-50 px-6 py-6 h-auto">
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-blue-700 px-6 py-6 h-auto">
            Schedule a Demo
          </Button>
        </div>
        <p className="mt-6 text-blue-100">No credit card required. 14-day free trial.</p>
      </div>
    </section>
  )
}