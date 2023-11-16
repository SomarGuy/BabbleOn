'use client'
import { subscriptionRef } from "@/lib/converters/Subscription";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function SubscriptionProvider() {
    const { data: session } = useSession();

    useEffect(() => {
        if (!session) return;

        return onSnapshot(subscriptionRef(session?.user.id), (snapshot) => {
            if (snapshot.empty) {
                console.log("User has NO subscription");
                return;
            }
        })
    }, [session]);

    return <div>SubscriptionProvider</div>;
}
export default SubscriptionProvider