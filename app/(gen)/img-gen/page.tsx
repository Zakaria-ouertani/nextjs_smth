"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Prediction } from "replicate";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function Home() {

  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [error, setError] = useState(null);


  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/replicate", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });

    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/replicate/" + prediction.id, { cache: 'no-store' });
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({ prediction })
      setPrediction(prediction);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex p-10">

        <form onSubmit={submitHandler} className="flex flex-row items-center w-full gap-4">
          <Label htmlFor="prompt" className="text-lg">
            Cht7eb
          </Label>
          <Input
            type="text"
            name="prompt"
            placeholder="Type something"
            className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
         <Select name="model">
           <SelectTrigger className="w-[180px]">
             <SelectValue placeholder="Select a fruit" />
           </SelectTrigger>
           <SelectContent>
             <SelectGroup>
               <SelectLabel>Fruits</SelectLabel>
               <SelectItem value="apple">Apple</SelectItem>
               <SelectItem value="banana">Banana</SelectItem>
               <SelectItem value="blueberry">Blueberry</SelectItem>
               <SelectItem value="grapes">Grapes</SelectItem>
               <SelectItem value="pineapple">Pineapple</SelectItem>
             </SelectGroup>
           </SelectContent>
         </Select>
          <Button type="submit">Go!</Button>
        </form>

        {error && <div className="mt-4 text-red-500">{error}</div>}

        {prediction && (
          <div className="mt-4">
            {prediction.output && (
              <div className="flex flex-col items-center justify-center w-full">
                <Image
                  src={prediction.output[prediction.output.length - 1]}
                  alt="output"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full rounded-md border-gray-300"
                />
              </div>
            )}
            <p className="mt-4 text-lg text-gray-700">status: {prediction.status}</p>
          </div>
        )}
      </div>
    </main>
  )
}
