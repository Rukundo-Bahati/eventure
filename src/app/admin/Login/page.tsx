"use client";

import Image from "next/image";
import { SigninForm } from "@/components/ui/SigninForm";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-1 h-screen bg-[#F8F8FA]">
      <SigninForm />

      <div className="relative hidden lg:block lg:w-2/5">
        <Image
          src="/signin.png"
          alt="Event crowd"
          width={1080}
          height={1080}
          className="h-full w-full object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl text-center font-bold mb-8">
            Welcome Back to the Event Management Portal!
          </h1>
          <p className="text-center text-lg mb-8 max-w-md px-4">
            We’re excited to help you create, organize, and manage your events
            seamlessly. Please log in using your credentials below to get
            started.
          </p>
          <p className="text-center text-base max-w-md px-4">Don't have an account yet? </p>
          <Link
            href={"/admin/signup"}
            className="mt-4 rounded-md bg-[#6D717D] px-12 py-3 backdrop-blur-sm transition-colors  duration-300 hover:bg-[#4E545A]"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
