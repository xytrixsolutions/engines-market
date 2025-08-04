import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const API_KEY = process.env.API_KEY || "";
const BASE_URL = process.env.BASE_URL || "";
if (!API_KEY) {
  throw new Error("API_KEY is not defined in environment variables");
}
if (!BASE_URL) {
  throw new Error("BASE_URL is not defined in environment variables");
}

export async function GET(req: NextRequest) {
  console.log("andr aya");
  const searchParams = req.nextUrl.searchParams;
  const regNumber = searchParams.get("reg");
  console.log("reg number ==>", regNumber);

  if (!regNumber) {
    // return NextResponse.json(
    //   { error: "Registration number is required" },
    //   { status: 400 },
    // );
    throw new Error("Registration number is required");
  }

  try {
    console.log("try me aya");

    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&vrm=${regNumber}`,
    );
    return NextResponse.json(response?.data);
  } catch (error) {
    console.log("catch me aya");
    if (axios.isAxiosError(error) && error.response)
      console.error("Error fetching vehicle data:", error.response);
    return NextResponse.json(
      { error: "Failed to fetch vehicle data" },
      { status: 500 },
    );
  }
}
