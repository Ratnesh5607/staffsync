
import Navbar from "@/components/Home/navbar";
import PrivateRoute from "@/components/privateRoute";
import Footer from "@/components/Home/footer";


export default function DashboardLayout({ children }) {
  return (
    <div>
      <PrivateRoute>
        <Navbar />
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        {children}
        </div>
        <Footer />
      </PrivateRoute>
    </div>
  );
}
