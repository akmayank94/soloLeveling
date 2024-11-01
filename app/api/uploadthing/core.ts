import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = async() => {
    // dikkat arhi h to chrome gpt se pucah h usne await dalne ko bola h 
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
    return { userId: userId};
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1}})
        .middleware(async() => await handleAuth())
        .onUploadComplete(() => {}),
    messageFile: f(["image","pdf"])
        .middleware(async() => await handleAuth())
        .onUploadComplete(() => {})
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
