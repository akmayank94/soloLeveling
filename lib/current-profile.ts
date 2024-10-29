import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const currentProfile = async() => {
    // added await bcz error ara tha
    const { userId } = await auth();

    if(!userId) {
        return null;
    }

    const profile = await db.profile.findUnique({
        where: {
            userId
        }
    });

    return profile;
}