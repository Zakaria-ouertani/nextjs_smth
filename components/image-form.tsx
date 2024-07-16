import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addImage, fetchImages, removeImage } from "@/actions/Image.actions";
import { useEffect, useState } from "react";
import { ImageProps } from "@/types";
import Replicate from "replicate"

export default async function ImageForm({ userId }: { userId: String }) {
  const [imagePrompt, setInputValue] = useState("");
  const [images, setImages] = useState<ImageProps[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const getImages = async () => {
      try {
        const fetchedImages = await fetchImages(userId);
        setImages(fetchedImages);
      } catch (error) {
        setFetchError("Error fetching images: " + error);
      }
    };
    getImages();
  }, [userId]);

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN
    })
    if (imagePrompt !== "") {
      const input = {
          prompt: imagePrompt,
          scheduler: "K_EULER"
      };
      
      const output = await replicate.run("stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4", { input });
      console.log(output)
      // await addImage(output, userId, new Date(), new Date());
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
          value={imagePrompt}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="w-2/4 p-2 border rounded"
          placeholder="Prompt"
          id="prompt"
        />
        <div id="error"></div>
        <Button type="submit">Generate</Button>
      </form>
      {fetchError && 
      <div className="text-red-500 ">{fetchError}</div>}
      <div className="grid gap-3">
        {images.map((image) => (
          <div key={image._id.toString()}>
            <img
              src={image.url.toString()}
              alt={`Image ${image._id}`}
              className="w-48 h-48 object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
