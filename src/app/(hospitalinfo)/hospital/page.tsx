import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";
import HospitalCatalog from "@/components/HospitalCatalog";
import { IHospitalsResponse } from "@/interfaces/IHospitalsResponse";
import getHospitals from "@/libs/getHospitals";
import getUserProfile from "@/libs/getUserProfile";

import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense, useEffect, useState } from "react";

const HospitalCard = async () => {
  const response = getHospitals();
  const session = await getServerSession(authOptions);
  var profile = null;
  if (session) {
    profile = await getUserProfile(session.user.token);
  }
  return (
    <main className="mt-28">
      <Suspense fallback={<LinearProgress />}>
        <HospitalCatalog hospitalsResponse={response} />
        {profile?.data?.role === "admin" ? <AddHospitalForm /> : null}
      </Suspense>
    </main>
  );
};

export default HospitalCard;
