// Imports
import Hospital from "@/db/models/Hospital";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

// Helper Function: Extract form data
const extractFormData = (form: FormData) => ({
  name: form.get("name"),
  address: form.get("address"),
  district: form.get("district"),
  province: form.get("province"),
  postalcode: form.get("postalCode"),
  tel: form.get("tel"),
  picture: form.get("picture"),
});

// Helper Function: addHospital
const addHospital = async (addHospitalForm: FormData) => {
  "use server";
  const formData = extractFormData(addHospitalForm);

  try {
    await dbConnect();
    await Hospital.create(formData);
  } catch (error) {
    console.log(error);
  }

  revalidateTag("hospitals");
  redirect("/hospital");
};

// Input style
const inputClass =
  "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";

// Component
const AddHospitalForm: React.FC = () => {

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold mb-2"> Hospital Form </h1>
      <form className="w-full max-w-lg" action={addHospital}>
        {[
          { label: "Name of Hospital", id: "name", placeholder: "Name" },
          { label: "Address (Road)", id: "address", placeholder: "Address" },
          { label: "District", id: "district", placeholder: "District" },
          { label: "Province", id: "province", placeholder: "Province" },
          {
            label: "Postal Code",
            id: "postalCode",
            placeholder: "Postal Code",
          },
          { label: "Telephone No.", id: "tel", placeholder: "08x-xxx-xxxx" },
          {
            label: "Picture URL",
            id: "picture",
            placeholder: "https://drive.google.com/....",
          },
        ].map((field) => (
          <div key={field.id} className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {field.label}
              </label>
              <input
                className={inputClass}
                required
                id={field.id}
                name={field.id}
                type="text"
                placeholder={field.placeholder}
              />
            </div>
          </div>
        ))}
        <div className="flex flex-wrap -mx-3 mb-6 justify-center items-center">
          <div className="w-auto px-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddHospitalForm;
