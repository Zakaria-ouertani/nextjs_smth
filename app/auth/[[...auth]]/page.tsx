import Image from "next/image";
import { SignIn, SignUp } from '@clerk/nextjs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Auth() {
    return (
        <div className="px-1 justify-around flex flex-row items-center h-screen">
            <div>
                <span><b>With our Platform, </b>you can open a new door to a totally new experience of online services</span>
            </div>
            <Tabs defaultValue="signin" className="">
                <TabsList>
                    <TabsTrigger value="signin">Sign in</TabsTrigger>
                    <TabsTrigger value="signup">Sign up</TabsTrigger>
                </TabsList>
                <TabsContent value="signin"><SignIn/></TabsContent>
                <TabsContent value="signup"><SignUp/></TabsContent>
            </Tabs>
        </div>
    );
}
