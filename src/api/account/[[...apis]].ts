import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const d = "a";
    res.status(200).json({ data: d } as any);
  } catch (e: any) {
    console.error("Error", JSON.stringify(e));
    res.status(500).json(e);
  }
}
