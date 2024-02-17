"use client";

import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  useSession,
} from "next-auth/react";
import { useEffect, useState } from "react";
import { BuiltInProviderType } from "next-auth/providers/index";

const Navbar = () => {
  const { data: session } = useSession();
  const [provider, setProvider] = useState<any>(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProvider(response);
    };
    setUpProviders();
  });

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Albin Travel"
            width={158}
            height={58}
            className="object-contain"
          />
        </Link>
        {/* <Link href='/login'>
        <CustomButton
          title="Masuk"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          />
        </Link> */}
        {provider &&
          Object.values(provider).map((p: any) => (
            <button
              type="button"
              key={p.name}
              onClick={() => signIn(p.id)}
              className="text-white lg:text-primary-blue rounded-full p-2 lg:p-3 bg-primary-blue lg:bg-white min-w-[100px] lg:min-w-[130px]"
            >
              Sign In
            </button>
          ))}
      </nav>
    </header>
  );
};

export default Navbar;
