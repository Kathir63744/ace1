"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Home, User, Calendar, FileText, CreditCard, LogOut, BookOpen, MessageSquare, BarChart3, Settings } from 'lucide-react'
import { toast } from "sonner"
import ActivityList from "@/app/dash/ActivityList";
import { 
  Sidebar,
  SidebarProvider,  
  SidebarHeader, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarFooter, 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarSeparator
} from "@/components/ui/sidebar"
import DashboardCard from "../dash/DashboardCard";



import  UserProfile  from "../dash/UserProfile"
import  WebinarList  from "../dash/WebinarList"
import  Header  from "../dash/Header"

// Mock data
const MOCK_WEBINARS = [
  { id: 1, title: "Technical Interview Preparation", date: "Mar 20, 2025", time: "10:00 AM" },
  { id: 2, title: "Resume Building Workshop", date: "Mar 25, 2025", time: "2:00 PM" }
]

const MOCK_ACTIVITIES = [
  { id: 1, activity: "Completed Python Assessment", date: "Mar 15, 2025" },
  { id: 2, activity: "Submitted Resume for Review", date: "Mar 12, 2025" },
  { id: 3, activity: "Attended React Workshop", date: "Mar 10, 2025" }
]

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(3)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    // Initialize dark mode
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }

    // Load user data
    try {
      const userData = JSON.parse(localStorage.getItem("user") || "null")
      if (!userData) {
        router.push("/signin")
        return
      }
      setUser(userData)
    } catch (error) {
      console.error("Error loading user data:", error)
      toast.error("Error loading user data")
      router.push("/signin")
    }
  }, [router])

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => {
      const newDarkMode = !prev
      localStorage.setItem("darkMode", String(newDarkMode))
      if (newDarkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      return newDarkMode
    })
  }, [])

  const handleLogout = useCallback(() => {
    localStorage.removeItem("user")
    router.push("/signin")
    toast.success("Logged out successfully")
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <SidebarProvider>
        <div className="flex h-screen overflow-hidden">
          <Sidebar>
            <SidebarHeader className="px-4 py-2">
              <div className="flex items-center gap-2">
                <Image src="/logoref1.png" alt="Logo" width={40} height={40} className="h-10 w-10" />
                <h1 className="font-bold text-xl">TalentNextGen</h1>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>
                        <Home className="h-5 w-5" />
                        <span>Dashboard</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <User className="h-5 w-5" />
                        <span>Profile</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Calendar className="h-5 w-5" />
                        <span>Webinars</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <MessageSquare className="h-5 w-5" />
                        <span>Messages</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              
              <SidebarSeparator />
              
              <SidebarGroup>
                <SidebarGroupLabel>Learning</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <BookOpen className="h-5 w-5" />
                        <span>Courses</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <FileText className="h-5 w-5" />
                        <span>Resources</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <BarChart3 className="h-5 w-5" />
                        <span>Progress</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              
              <SidebarSeparator />
              
              <SidebarGroup>
                <SidebarGroupLabel>Account</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings className="h-5 w-5" />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <CreditCard className="h-5 w-5" />
                        <span>Billing</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={handleLogout}>
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          
          <div className="flex flex-col flex-1 overflow-y-auto">
            <Header 
              user={user}
              darkMode={darkMode}
              notifications={notifications}
              onToggleDarkMode={toggleDarkMode}
              onLogout={handleLogout}
            />
            
            <main className="flex-1 p-6">
              <div className="flex flex-col gap-6">
                <UserProfile user={user} />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <DashboardCard
                    title="Learning Progress"
                    value="75%"
                    subtitle="3 of 4 courses completed"
                    progress={75}
                  />
                  <DashboardCard
                    title="Upcoming Webinars"
                    value={MOCK_WEBINARS.length}
                    subtitle={`Next: ${MOCK_WEBINARS[0]?.title} on ${MOCK_WEBINARS[0]?.date}`}
                  />
                  <DashboardCard
                    title="Profile Completion"
                    value="90%"
                    subtitle="Add skills to complete your profile"
                    progress={90}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <WebinarList webinars={MOCK_WEBINARS} />
                  <ActivityList
                    activities={MOCK_ACTIVITIES}
                    title="Recent Activity"
                    description="Your latest platform activities"
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}