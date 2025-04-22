"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Button } from "@/app/components/ui/button"



export default function UserProfile({ user }) {
  return (
    <div className="bg-card rounded-lg shadow p-6">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage 
            src={user?.profilePicture || "/placeholder.svg?height=96&width=96"} 
            alt={user?.name || "User"} 
          />
          <AvatarFallback className="text-2xl">
            {user?.name?.charAt(0) || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">
            Welcome, {user?.name || "User"}!
          </h2>
          <p className="text-muted-foreground">
            {user?.title || "Talent NextGen Member"}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <div className="text-sm">
              <span className="font-medium">Email:</span> {user?.email || "user@example.com"}
            </div>
            <div className="text-sm">
              <span className="font-medium">Member since:</span> {user?.joinDate || "March 2025"}
            </div>
            <div className="text-sm">
              <span className="font-medium">Subscription:</span> {user?.subscription || "Premium"}
            </div>
          </div>
        </div>
        <Button className="mt-4 md:mt-0">Edit Profile</Button>
      </div>
    </div>
  )
}