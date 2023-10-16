import { IHospitalResponse } from "@/interfaces/IHospitalResponse"

export default async function getHospital(id: string): Promise<IHospitalResponse> {
    const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`)
    if (!response.ok) {
        throw new Error("Something went wrong while fetching the hospital data.")
    }

    return await response.json()
}