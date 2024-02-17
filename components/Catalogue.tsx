"use client";
import { CarCard, CustomFilter, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Catalogue = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") router.push("dashboard");
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  //search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  //pagination states
  const [limit, setLimit] = useState(8);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 12,
        model: model || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [session, fuel, year, limit, manufacturer, model]);
  return (
    <div
      className="mt-16 padding-x padding-y bg-[rgb(54,166,201)]"
      id="discover"
    >
      <div className="home__text-container">
        <h1 className="text-4xl text-white font-extrabold">Catalogue</h1>
        <h2 className="text-lg text-white ">
          Jelajahi mobil yang mungkin Anda sukai
        </h2>
      </div>

      {allCars.length > 0 ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car, i) => (
              <CarCard key={i} car={car} />
            ))}
          </div>
          {loading && (
            <div className="mt-16 w-full flex-center">
              <Image
                src="/loader.svg"
                alt="loader"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          )}
          <ShowMore
            pageNumber={limit / 10}
            isNext={limit > allCars.length}
            setLimit={setLimit}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, No result</h2>
        </div>
      )}
    </div>
  );
};

export default Catalogue;
