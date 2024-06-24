import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { HomeIcon, DashboardIcon} from '@radix-ui/react-icons'

export default function Sidebar() {
  return (
    <div className="flex h-screen sticky top-0">
      <div className="w-16 flex flex-col items-center justify-between pt-1">
         <Popover>
           <PopoverTrigger asChild>
             <div className="flex justify-center w-full">
               <Avatar>
                 <AvatarImage src="" />
                 <AvatarFallback>CN</AvatarFallback>
               </Avatar>
             </div>
           </PopoverTrigger>
           <PopoverContent side="right" className="w-80">
                Test
           </PopoverContent>
        </Popover>
       <div className="flex items-center h-full">
         <div  className="flex flex-col items-center justify-center justify-between h-32 w-10 border rounded py-2">
            <Button  className="w-8 p-0" variant="ghost" asChild>
                <Link href="/"><HomeIcon/></Link>
            </Button>
            <Button className="w-8 p-0" variant="ghost" asChild>
                <Link href="/idk"><DashboardIcon/></Link>
            </Button>
            <Button className="w-8 p-0" variant="ghost" asChild>
                <Link href="/support"></Link>
            </Button>
         </div>
       </div>
      </div>
      <div className="flex-1 overflow-auto" />
    </div>
  )
}
