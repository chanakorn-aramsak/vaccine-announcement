import HospitalCatalog from "@/components/HospitalCatalog";
import { IHospitalsResponse } from "@/interfaces/IHospitalsResponse";

import { render, screen, waitFor } from '@testing-library/react';

const mockHospitalsResponse: IHospitalsResponse = {
    "success": true,
    "count": 3,
    "pagination": {},
    "data": [
        {
            "id": "651fd49f4de580c9b2df8c49",
            "name": "Chulalongkorn Hospital",
            "address": "1873 Rama IV Rd",
            "district": "Pathum Wan",
            "province": "Bangkok",
            "postalcode": "10330",
            "tel": "026494000",
            "picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
        },
        {
            "id": "651fd5734de580c9b2df8c4c",
            "name": "Rajavithi Hospital",
            "address": "2 Phaya Thai Rd, Thung Phaya Thai",
            "district": "Ratchathewi",
            "province": "Bangkok",
            "postalcode": "10400",
            "tel": "022062900",
            "picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
        },
        {
            "id": "651fd5bf4de580c9b2df8c4f",
            "name": "Thammasat University Hospital",
            "address": "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
            "district": "Khlong Luang",
            "province": "Pathum Thani",
            "postalcode": "12120",
            "tel": "029269999",
            "picture": "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
        },
    ]
}
// Mock useReducer
jest.mock('react', () => {
    const actualReact = jest.requireActual('react');
    return {
        ...actualReact,
        useReducer: (reducer: (state: Map<string, number | null>, action: { type: string, hospitalName: string, rating: number | null }) => Map<string, number | null>, initialArg: Map<string, number | null>) => {
            return [new Map<string, number | null>(), jest.fn()];
        },
    };
});


// Mock next/link
jest.mock('next/link', () => {
    return ({ children }: { children: React.ReactNode }) => {
        return children;
    };
});


describe('Hospital Catalog', () => {
    it('should render hospital catalog', async () => {
        const hospitalCatalog = await HospitalCatalog({ hospitalsResponse: Promise.resolve(mockHospitalsResponse) });
        render(hospitalCatalog);

        await waitFor(
            () => {
                const hospitalImages = screen.queryAllByRole('img');
                expect(hospitalImages.length).toBe(3);

                const chulaHospitalNames = screen.queryByText(/Chulalongkorn Hospital/i);
                expect(chulaHospitalNames).toBeInTheDocument();

                const rajavithiHospitalNames = screen.queryByText(/Rajavithi Hospital/i);
                expect(rajavithiHospitalNames).toBeInTheDocument();

                const thammasatHospitalNames = screen.queryByText(/Thammasat University Hospital/i);
                expect(thammasatHospitalNames).toBeInTheDocument();
            }
        )
    });
})