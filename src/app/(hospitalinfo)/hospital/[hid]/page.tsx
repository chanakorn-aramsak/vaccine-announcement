// pages/hospital/[hid].tsx

interface Hospital {
  id: number;
  name: string;
  imageSrc: string;
}

const hospitalData: Hospital[] = [
  { id: 1, name: "Chulalongkorn Hospital", imageSrc: "/chula.jpg" },
  { id: 2, name: "Rajavithi Hospital", imageSrc: "/rajavithi.jpg" },
  { id: 3, name: "Thammasat University Hospital", imageSrc: "/thammasat.jpg" },
  // Add more hospitals as needed
];

const HospitalDetail = ({ params }: { params: { hid: string } }) => {
  const hospital = hospitalData.find(
    (hospital) => hospital.id === parseInt(params.hid as string)
  );

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Hospital Details</h1>
      {hospital ? (
        <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
          <div className="mr-6">
            <img
              src={hospital.imageSrc}
              alt={hospital.name}
              className="max-w-xs h-auto"
            />
          </div>
          <div>
            <p className="text-xl font-semibold">ID: {hospital.id}</p>
            <p className="text-xl">Name: {hospital.name}</p>
          </div>
        </div>
      ) : (
        <p className="text-2xl font-bold text-red-500">Hospital not found</p>
      )}
    </div>
  );
};

export default HospitalDetail;
