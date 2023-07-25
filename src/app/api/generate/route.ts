import axios from "axios";
import { NextRequest } from "next/server";
import { version } from "os";

export const POST = async (req: Request) => {
  const { body } = await req.json();
  const config = {
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  };

  await axios.post(
    "https://api.replicate.com/v1/predictions",
    {
      input: { prompt: body.prompt },
      // Pinned to a specific version of Stable Diffusion
      // See https://replicate.com/stability-ai/stable-diffussion/versions
      version:
        "6359a0cab3ca6e4d3320c33d79096161208e9024d174b2311e5a21b6c7e1131c",
    },
    config
  );
};
