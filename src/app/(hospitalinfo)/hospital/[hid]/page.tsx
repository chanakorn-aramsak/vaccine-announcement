// pages/hospital/[hid].tsx
import getHospital from "@/libs/getHospital";
const HospitalDetail = async ({ params }: { params: { hid: string } }) => {
  const response = await getHospital(params.hid); // fetch hospital data using the provided function
  const hospital = response.data; // cast the response data to the Hospital interface

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Hospital Details</h1>
      {hospital ? (
        <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
          <div className="mr-6">
            <img
              src={hospital.picture}
              alt={hospital.name}
              className="max-w-xs h-auto"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="text-3xl font-bold mx-5"> Name: {hospital.name} </div>
            <br></br>
            <div className="text-lg mx-5"> Address: {hospital.address} </div>
            <div className="text-lg mx-5"> District: {hospital.district} </div>
            <div className="text-lg mx-5"> Province: {hospital.province} </div>
            <div className="text-lg mx-5">
              {" "}
              Postal Code: {hospital.postalcode}{" "}
            </div>
            <div className="text-lg mx-5"> Tel: {hospital.tel} </div>
          </div>
        </div>
      ) : (
        <p className="text-2xl font-bold text-red-500">Hospital not found</p>
      )}
    </div>
  );
};

export default HospitalDetail;
