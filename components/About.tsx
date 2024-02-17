const About = () => {
  return (
    <div
      className={`bg-gray-100 py-12 mt-20 min-h-100 bg-cover bg-center bg-no-repeat
        
      }`}
      style={{ backgroundImage: "url(bgabout.jpg" }}
    >
      <p className="mt-10 text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl uppercase">
        Mengapa Memilih Kami ??
      </p>
      <div className="max-w-8xl w-50 mt-12 flex sm:flex-col justify-between mx-auto px-4 sm:px-6 lg:pl-12 ">
        <div className="text-start w-30 font-semibold lg:font-bold lg:text-xl my-auto mb-6 capitalize ">
          <p className="mt-4 sm:max-w-sm lg:max-w-xl  text-gray-900">
            Apakah Anda mencari pengalaman petualangan yang tak terlupakan? Kami
            di AlbinTrans siap membantu mewujudkannya!
          </p>
          <p className="mt-4 max-w-[250px]  md:max-w-[350px] lg:max-w-xl text-gray-900">
            Dengan armada kami yang berkualitas dan beragam, Anda dapat
            menjelajahi destinasi favorit Anda dengan nyaman dan aman. Dari
            perjalanan santai di kota hingga petualangan off-road yang
            mendebarkan, kami memiliki mobil dan trail yang sesuai dengan
            kebutuhan dan keinginan Anda.
          </p>
          <p className="mt-4 sm:max-w-sm lg:max-w-xl text-gray-900">
            Hubungi kami hari ini dan mulailah petualangan Anda bersama kami!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
