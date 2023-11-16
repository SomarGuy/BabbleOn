"use client"

import { useSubscriptionStore } from "@/store/store"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

function UpgradeBanner() {
    const subscription = useSubscriptionStore((state) => state.subscription);
    const isPro =  subscription?.role === "pro";
    const router = useRouter();
    
    if (subscription === undefined || isPro) return null;

  return (
<Button
  onClick={() => router.push("/register")}
  className="w-full rounded-none bg-gradient-to-r from-blue-300 to-blue-800 text-center text-white px-5 py-2
    hover:from-blue-300 hover:to-blue-800 hover:shadow-md hover:opacity-75 transition-all
  "
>
    Upgrade to Pro to unlock all features!
  </Button>
  )
}

export default UpgradeBanner