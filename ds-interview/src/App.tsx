import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Gauge, BookOpen } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Practice</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-96">
                      <NavigationMenuLink href="/questions" className="block">
                        <div className="font-medium mb-1">Interview Questions</div>
                        <p className="text-sm text-gray-500">Practice data science interview questions from top companies.</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/challenges" className="block">
                        <div className="flex items-center gap-2">
                          <Gauge className="w-4 h-4" />
                          <div className="font-medium">Challenges</div>
                        </div>
                        <p className="text-sm text-gray-500">Test your skills against other users.</p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Learning Paths</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-96">
                      <NavigationMenuLink href="/paths/data-science" className="block">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <div className="font-medium">Data Science Interview</div>
                        </div>
                        <p className="text-sm text-gray-500">Master data science interview questions.</p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost">Log in</Button>
              <Button>Sign up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Ace your data engineering interview.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to approach your next job interview with full confidence.
          </p>
          <Button size="lg" className="px-8">Get Started</Button>
        </div>
      </main>

      {/* Features Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interview Questions</h3>
              <p className="text-gray-600">Practice real interview questions from top tech companies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <Gauge className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skill Assessment</h3>
              <p className="text-gray-600">Test your skills with interactive challenges and assessments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning Paths</h3>
              <p className="text-gray-600">Structured learning paths to guide your interview preparation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* University Partnerships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Trusted by Students From Top Universities</h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-gray-400 font-medium">Stanford University</div>
            <div className="text-gray-400 font-medium">MIT</div>
            <div className="text-gray-400 font-medium">Harvard</div>
            <div className="text-gray-400 font-medium">Berkeley</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"The practice questions helped me land my dream job at Google. Highly recommended!"</p>
              <div className="font-medium">John D.</div>
              <div className="text-sm text-gray-500">Data Scientist at Google</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"Great platform for interview preparation. The learning paths are well structured."</p>
              <div className="font-medium">Sarah M.</div>
              <div className="text-sm text-gray-500">Data Engineer at Amazon</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"The mock interviews really helped me improve my communication skills."</p>
              <div className="font-medium">Michael R.</div>
              <div className="text-sm text-gray-500">ML Engineer at Meta</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
