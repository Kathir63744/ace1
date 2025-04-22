"use client"

import { Bell, Moon, Sun } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/app/components/ui/sidebar"


export default function Header({ user, darkMode, notifications, onToggleDarkMode, onLogout }) {
  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onToggleDarkMode}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <NotificationsDropdown notifications={notifications} />
          <UserDropdown user={user} onLogout={onLogout} />
        </div>
      </div>
    </header>
  )
}

function NotificationsDropdown({ notifications }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notifications > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              {notifications}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <NotificationsList />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function NotificationsList() {
  const notifications = [
    {
      title: "New webinar available",
      description: "Technical Interview Preparation webinar is now available",
      time: "2 hours ago"
    },
    {
      title: "Profile review completed",
      description: "Your profile has been reviewed by our team",
      time: "1 day ago"
    },
    {
      title: "New course recommendation",
      description: 'Based on your interests, we recommend "Advanced React Patterns"',
      time: "2 days ago"
    }
  ]

  return (
    <div className="max-h-80 overflow-y-auto">
      {notifications.map((notification, index) => (
        <DropdownMenuItem key={index} className="cursor-pointer">
          <div className="flex flex-col gap-1">
            <p className="font-medium">{notification.title}</p>
            <p className="text-sm text-muted-foreground">{notification.description}</p>
            <p className="text-xs text-muted-foreground">{notification.time}</p>
          </div>
        </DropdownMenuItem>
      ))}
      <DropdownMenuSeparator />
      <DropdownMenuItem className="cursor-pointer justify-center font-medium">
        View all notifications
      </DropdownMenuItem>
    </div>
  )
}

function UserDropdown({ user, onLogout }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage 
              src={user?.profilePicture || "/placeholder.svg?height=32&width=32"} 
              alt={user?.name || "User"} 
            />
            <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name || "User"}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email || "user@example.com"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}