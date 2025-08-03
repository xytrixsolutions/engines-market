"use server";

export async function submitForm(data: FormData) {
  const response = await fetch("https://your-api-endpoint.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(data)),
  });

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }
}
