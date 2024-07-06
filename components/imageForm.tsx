"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addImage, fetchImages, removeImage } from  "@/actions/Image.actions"
import { useState } from "react"

export default function ImageForm({userId}: {userId: String}) {
  const [inputValue, setInputValue] = useState('');
  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (inputValue !== '') {
      await addImage(
        'placeholder_url',
        userId,
        new Date(),
        new Date()
      )
    }
     
  }
  return (
     <div className="min-h-screen w-full h-full flex">
       <form 
         className="w-full min-w-full flex flex-row justify-center items-center gap-8"
         onSubmit={submitHandler}
        >
         <Label htmlFor="prompt">Cht7eb</Label> 
         <Input
           type="text"
           className="w-2/4 p-2 border rounded"
           placeholder="Prompt"
           id="prompt"
           value={inputValue}
         />
         <Button type="reset" >Generate</Button>
       </form>
     </div>
  )
}
