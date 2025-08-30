"use server";

import { redirect } from "next/navigation";

export async function submitRegistrationAction(formData: FormData) {
  const registration = formData.get("registration") as string;

  if (registration) {
    // Normalize registration format
    const normalizedReg = registration
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .trim();

    redirect(`/contact?reg=${encodeURIComponent(normalizedReg)}&source=form`);
  }

  // Fallback redirect if no registration
  redirect("/contact?source=form");
}
