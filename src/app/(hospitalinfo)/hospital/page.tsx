"use client";
import HospitalCatalog from "@/components/HospitalCatalog";
import { IHospitalsResponse } from "@/interfaces/IHospitalsResponse";
import getHospitals from "@/libs/getHospitals";

import { LinearProgress } from "@mui/material";
import { Suspense, useEffect, useState } from "react";

const HospitalCard = () => {
  const response = getHospitals();

  return (
    <main className="mt-28">
      <Suspense fallback={<LinearProgress />}>
        <HospitalCatalog hospitalsResponse={response} />
      </Suspense>
    </main>
  );
};

export default HospitalCard;
