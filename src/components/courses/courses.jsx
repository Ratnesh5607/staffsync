"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FilterBar from "../ui/filterBar";
import { useState } from "react";

const coursesList = [
  {
    id: 1,
    name: "React for Beginners",
    description:
      "Learn the basics of React, from component creation to state management. This comprehensive course covers JSX syntax, hooks, props, and context API. You'll build multiple projects including a task manager, a weather app, and an e-commerce interface. By the end, you'll understand React's virtual DOM, component lifecycle, and be able to create responsive, interactive web applications with clean, maintainable code structures. Perfect for developers with JavaScript knowledge looking to expand their frontend skills.",
    status: "Active",
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    description:
      "Dive deep into JavaScript's advanced concepts including closures, prototypes, and the event loop. This intensive course explores functional programming paradigms, asynchronous patterns with Promises and async/await, and modern ES6+ features. You'll master memory management, performance optimization techniques, and design patterns specific to JavaScript applications. The curriculum includes complex algorithm challenges, building custom libraries, and implementing architecture for large-scale applications. Suitable for developers who understand JavaScript basics but want to reach expert-level proficiency in both browser and Node.js environments.",
    status: "Active",
  },
  {
    id: 3,
    name: "Web Development Bootcamp",
    description:
      "Become a full-stack developer through this comprehensive bootcamp covering both frontend and backend technologies. Starting with HTML, CSS, and JavaScript fundamentals, you'll progress to advanced frameworks like React, Angular, or Vue. The backend portion covers server architecture, databases (SQL and NoSQL), API development, and authentication systems. You'll learn deployment strategies, version control with Git, and DevOps basics. The course includes collaborative projects simulating real-world development environments, code reviews, and agile methodologies. By completion, you'll have a professional portfolio of full-stack applications and the skills to architect complete web solutions.",
    status: "Active",
  },
  {
    id: 4,
    name: "Node.js and Express",
    description:
      "Learn back-end development with Node.js and Express framework. This in-depth course covers server-side JavaScript programming, asynchronous I/O operations, and building RESTful APIs. You'll master database integration with MongoDB and SQL databases, implement authentication and authorization systems, and develop microservices architecture. The curriculum includes performance optimization, security best practices, and testing methodologies specific to Node.js applications. Through hands-on projects, you'll build scalable web servers, real-time applications with Socket.io, and deploy your applications to cloud platforms. Ideal for frontend developers looking to expand to full-stack capabilities.",
    status: "Inactive",
  },
  {
    id: 5,
    name: "HTML & CSS Fundamentals",
    description:
      "Build websites from scratch with this foundational course on HTML and CSS. You'll learn semantic HTML5 markup, accessibility standards, and document structure best practices. The CSS portion covers the box model, positioning systems, responsive design with media queries, and CSS variables. You'll master Flexbox and Grid layouts, animation techniques, and cross-browser compatibility solutions. The course includes practical exercises in typography, color theory, and UI design principles. You'll create multiple responsive websites including a portfolio, a blog, and a business site. Perfect for absolute beginners or self-taught developers wanting to solidify their understanding of web fundamentals.",
    status: "Active",
  },
  {
    id: 6,
    name: "CSS Grid and Flexbox",
    description:
      "Master layout techniques in CSS with this specialized course focusing on modern layout systems. You'll gain deep understanding of Flexbox for one-dimensional layouts and Grid for two-dimensional page structures. The curriculum covers complex alignment challenges, nested grid systems, and responsive design without media queries using modern CSS features. You'll learn animation integration with layouts, accessibility considerations, and performance optimization. Through practical exercises, you'll recreate complex designs from popular websites, build responsive dashboards, card layouts, and magazine-style interfaces. This course is ideal for designers and developers who want pixel-perfect control over web layouts across all device sizes.",
    status: "Active",
  },
  {
    id: 7,
    name: "Vue.js Essentials",
    description:
      "Learn Vue.js framework from the ground up in this comprehensive course. Starting with Vue's reactive data model and component system, you'll progress to complex state management with Vuex, routing with Vue Router, and form validation. The curriculum covers Vue's composition API, mixins, custom directives, and transitions. You'll build single-page applications with increasing complexity, including a task manager, an e-commerce platform, and a content management system. Advanced topics include server-side rendering with Nuxt.js, testing Vue components, and optimizing performance. By the end, you'll be able to architect and develop sophisticated applications using the entire Vue ecosystem and understand when to leverage each feature.",
    status: "Inactive",
  },
  {
    id: 8,
    name: "Angular Basics",
    description:
      "Get started with Angular framework in this foundational course covering TypeScript and component-based architecture. You'll learn Angular's powerful templating system, dependency injection, and reactive programming with RxJS. The curriculum includes Angular modules, services, pipes, and directives for building structured applications. You'll master form handling with both template-driven and reactive approaches, HTTP client for API integration, and Angular routing for single-page applications. Through guided projects, you'll build a dashboard application, a user management system, and a content platform. The course also covers Angular CLI for development workflow, testing with Jasmine and Karma, and deployment strategies for Angular applications.",
    status: "Active",
  },
  {
    id: 9,
    name: "TypeScript for React",
    description:
      "Integrate TypeScript with React to build type-safe, robust applications. This specialized course bridges static typing with React's component architecture, covering TypeScript interfaces, generics, and utility types specific to React development. You'll learn to type props, state, context, and hooks while maintaining clean component structures. The curriculum includes handling events with proper types, creating reusable generic components, and managing global state with TypeScript. Advanced topics cover typing higher-order components, render props patterns, and integration with popular libraries like Redux and React Router. By the end, you'll be able to refactor existing React applications to TypeScript and architect new projects with type safety from the ground up.",
    status: "Inactive",
  },
  {
    id: 10,
    name: "Django Web Development",
    description:
      "Build web apps with Django, Python's powerful web framework. This comprehensive course covers Django's MTV (Model-Template-View) architecture, ORM for database operations, and admin interface customization. You'll learn authentication systems, middleware implementation, and form handling with Django's built-in tools. The curriculum includes creating RESTful APIs with Django REST framework, implementing real-time features with channels, and integrating with front-end frameworks. Through progressive projects, you'll build a blog platform, a social network, and an e-commerce site with payment processing. Advanced topics include performance optimization, security hardening, testing strategies, and deployment to production environments using Docker and cloud platforms.",
    status: "Active",
  },
];

export default function Courses() {
  const [view, setView] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState(["Active", "Inactive"]);

  const coursesData = coursesList.filter((course) => {
    const matchesSearch = course.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus.includes(course.status);
    return matchesSearch && matchesStatus;
  });

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">All Available Courses</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl">
            Explore our comprehensive collection of courses to enhance your
            skills
          </p>
        </div>
        <div className="mt-16 flex flex-col md:flex-row gap-8">
          {/* Filter sidebar */}
          <div className="w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
            <div className="bg-card p-4 pt-0 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Filter Courses</h3>
              <FilterBar
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
                setView={setView}
                showView={true}
                showFilter={true}
                showSearch={true}
                setFilterStatus={setFilterStatus}
                filterStatus={filterStatus}
              />
            </div>
          </div>

          {/* Course grid */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            <div
              className={`${
                view === "grid"
                  ? "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-foreground"
                  : ""
              }`}
            >
              {coursesData.map((course) => {
                if (view === "grid") {
                  return (
                    <Card
                      key={course.id}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle>{course.name}</CardTitle>
                          {course.status === "Inactive" && (
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                              Inactive
                            </span>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{course.description.split(".", 2)}</p>
                      </CardContent>
                    </Card>
                  );
                } else {
                  return (
                    <div key={course.id}>
                      <CardHeader className="md:pl-0 pl-4">
                        <CardTitle>{course.name}</CardTitle>
                        <CardDescription>{course.description.split(".", 3)}</CardDescription>
                      </CardHeader>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
