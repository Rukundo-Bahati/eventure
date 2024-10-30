import Image from "next/image";
import { AuthForm } from "@/components/ui/AuthForm";

export default function SignupPage() {
  return (
    <>
      <div
        className="flex min-h-screen bg-[#F8F8FA]"
        style={{ fontFamily: "Product Sans, sans-serif", fontWeight: 400 }}
      >
        <div className="relative hidden w-2/5 lg:block">
          <div className="absolute inset-0">
            <Image
              src="/signup.png"
              alt="Event background"
              width={1080}
              height={1080}
              className="h-full w-full object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-white">
            <h1 className="text-4xl font-bold">Welcome back</h1>
            <p className="mt-8 text-center text-lg">
              To keep connected with us provide us with your information
            </p>
            <button className="mt-8 rounded-md bg-[#6D717D] px-12 py-3 backdrop-blur-sm transition-colors  duration-300 hover:bg-[#4E545A]">
              Signin
            </button>
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-3/5">
          <AuthForm />
        </div>
      </div>
    </>
  );
}
