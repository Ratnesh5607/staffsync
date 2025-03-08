
import PrivateRoute from "@/components/privateRoute";


export default function DashboardLayout({ children }) {
  return (
    <div>
      <PrivateRoute>
        <div className="bg-background from-blue-50 to-indigo-50 py-16 md:py-24">
        {children}
        </div>
      </PrivateRoute>
    </div>
  );
}
