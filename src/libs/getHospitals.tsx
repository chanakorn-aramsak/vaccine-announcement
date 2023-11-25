import { IHospitalsResponse } from "@/interfaces/IHospitalsResponse";

export default async function getHospitals(): Promise<IHospitalsResponse> {
  // add timeout for loading delay testing
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`${process.env.BACKEND_URL}/api/v1/hospitals`,  {next: {tags: ['hospitals']}});
  if (!response.ok) {
    throw new Error("Something went wrong while fetching the hospitals data.");
  }

  return await response.json();
}
