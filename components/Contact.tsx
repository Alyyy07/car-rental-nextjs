// 'use client';

import Image from "next/image";

// import { Loader } from "@googlemaps/js-api-loader";
// import { useEffect, useRef } from "react";

const LinkLogo = () => {
  return (
    <Image
      src="/external-link.png"
      alt="arrow logo"
      width={20}
      height={20}
      className="object-contain inline-block ml-2 mb-[6px]"
    />
  );
};

const Contact = () => {
  // const mapRef = useRef<HTMLDivElement>(null);

  // useEffect(()=>{
  //   const initMap = async () =>{
  //     const loader = new Loader({
  //       apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  //       version: "weekly",
  //     });

  //     const {Map} = await loader.importLibrary('maps');
  //     const position = {lat: 37.422, lng: -122.084};
  //     const mapOptions : google.maps.MapOptions = {
  //       center: position,
  //       zoom:13,
  //       mapId:"MY_NEXTJS_MAPID"
  //     }

  //     const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

  //   }
  //   initMap();
  // },[])

  return (
    <div className="mt-24 mb-0">
      <div className="home__text-container max-width">
        <h1 className="text-4xl font-extrabold">Temukan Kami</h1>
        <h2 className="text-lg">
          Kunjungi kantor kami atau hubungi kami melalui kontak di bawah ini
        </h2>
      </div>
      <iframe
        src="https://maps.google.com/maps?q=-7.928759%2C112.625828&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        width="100%"
        height="400"
        className="mt-10"
        allowFullScreen
      ></iframe>
      <div
        className="h-[500px] object-contain bg-fixed bg-center bg-no-repeat bg-cover relative bg-primary-blue-100 bg-opacity-20 bg-blend-overlay"
        style={{ backgroundImage: "url(bgcontact.jpg" }}
      >
        <div className="grid grid-cols-2 gap-8 items-center ms-48">
          <div className="mt-24">
            <h2 className="text-4xl font-bold text-white mb-8">Kontak Kami</h2>
            <a
              href="https://api.whatsapp.com/send?phone=6281354400100&text=Halo%2C%20saya%20tertarik%20untuk%20menyewa%20mobil.%20Apakah%20Anda%20memiliki%20mobil%20yang%20tersedia%20untuk%20disewa%3F%20Saya%20ingin%20mengetahui%20informasi%20lebih%20lanjut%20tentang%20tarif%2C%20jenis%20mobil%20yang%20tersedia%2C%20dan%20persyaratan%20penyewaan.%20Terima%20kasih%21"
              className="mb-2 text-lg text-white"
            >
              Whatsapp: +62 813-5440-0100
              <LinkLogo />
            </a>
            <p className="mb-2 text-lg text-white">
              Email: albintrans@gmail.com
            </p>
          </div>
          <div className="mt-24">
            <h2 className="text-4xl font-bold text-white mb-8">Alamat</h2>
            <a href="https://maps.app.goo.gl/vZ3G9DaSgeGQ8mvt6">
              <p className="mb-1 text-lg text-white max-w-xl">
                Jl. Sudimoro Utara No.30-36, Mojolangu, Kec. Lowokwaru,
              </p>
              <p className="mb-1 text-lg text-white max-w-xl">
                Kota Malang, Jawa Timur 65142
                <LinkLogo />
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
