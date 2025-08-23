import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const API_KEY = process.env.API_KEY || "";
const BASE_URL = process.env.BASE_URL || "";

if (!API_KEY)
  throw new Error("API_KEY is not defined in environment variables");
if (!BASE_URL)
  throw new Error("BASE_URL is not defined in environment variables");

export async function GET(req: NextRequest) {
  const regNumber = req.nextUrl.searchParams.get("reg");
  if (!regNumber) {
    return NextResponse.json(
      { error: "Registration number is required" },
      { status: 400 },
    );
  }

  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&vrm=${regNumber}`,
    );
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", {
        message: error.message,
        response: error.response?.data,
      });
    } else {
      console.error("Unknown error:", error);
    }

    return NextResponse.json(
      { error: "Failed to fetch vehicle data" },
      { status: 500 },
    );
  }
}
