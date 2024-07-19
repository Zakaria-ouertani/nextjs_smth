import Replicate from "replicate";


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function getModelVersion(model_owner: string, model_name: string) {
  const response = await fetch(`https://api.replicate.com/v1/models/${model_owner}/${model_name}`, {
      headers: {
        Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`
      }
    }
  );
  if (!response.ok) {
    return ""
  }
  const modelInfo = await response.json()
  return await modelInfo.latest_version.id
}

export async function POST(req: Request) {

  const data = await req.formData();
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error(
      "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it."
    );
  }
  const modelName = data.get("model") || ""
  if (modelName.toString() === "") {
    return new Response(
      JSON.stringify({ detail: "Please choose a model to generate  your image." }),
      { status: 500 }
    );
  }
  const modelVersion = await getModelVersion(modelName.toString().split("/")[0], modelName.toString().split("/")[1])
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: ", modelVersion)
  const prediction = await replicate.predictions.create({
    // Pinned to a specific version of Stable Diffusion
    // See 
      // https://replicate.com/stability-ai/sdxl
    version: modelVersion,

    // This is the text prompt that will be submitted by a form on the frontend
    input: { prompt: data.get("prompt") },
  });

  if (prediction?.error) {
    return new Response(
      JSON.stringify({ detail: prediction.error.detail }),
      { status: 500 }
    );
  }

  return new Response(
    JSON.stringify(prediction),
    { status: 201 }
  );
}
