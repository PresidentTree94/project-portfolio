import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.SANITY_REVALIDATE_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    revalidateTag(body._type, { expire: 0 });
    return NextResponse.json({ revalidated: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}