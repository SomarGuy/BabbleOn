"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"
import { Button } from "./ui/button"
import { Session } from "next-auth"
import { signIn, signOut } from "next-auth/react"
import { useSubscriptionStore } from "@/store/store";
import LoadingSpinner from "./LoadingSpinner";
import { StarIcon } from "lucide-react";
import ManageAccountButton from "./ManageAccountButton";
  
function UserButton({ session }: { session: Session | null}) {
  const subscription = useSubscriptionStore((state) => state.subscription)

  if (!session) return (
    <Button variant={'outline'} onClick={() => signIn()}>
      Sign In
    </Button>
  )

  return session && (
    <DropdownMenu>
  <DropdownMenuTrigger>
    <UserAvatar name={session.user?.name} image={session.user?.image} />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
    <DropdownMenuSeparator />

    {subscription === undefined && (
      <DropdownMenuItem>
        <LoadingSpinner />
      </DropdownMenuItem>
    )}

    {subscription?.role === "pro" && (
      <>
        <DropdownMenuLabel className="text-xs flex items-center justify-center space-x-1 text-[#3574e9] animate-pulse">
          <StarIcon fill="#3574e9" />
          <p>PRO</p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <ManageAccountButton />
        </DropdownMenuItem>
      </>
    )}

    <DropdownMenuItem onClick={() => signOut()}>
      Sign Out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
};

export default UserButton