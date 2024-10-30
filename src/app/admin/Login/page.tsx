'use client'

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { SigninForm } from '@/components/ui/SigninForm'

export default function SignInPage() {
  return (
    <div className="flex flex-1 min-h-screen">
      <SigninForm />

      <div className="relative hidden lg:block lg:w-2/5">
        <Image
          src="/signin.png"
          alt="Event crowd"
          width={1080}
          height={1080}
          className="h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Hello Friend</h1>
          <p className="text-center text-lg mb-8 max-w-md px-4">
            To keep connected with us provide us with your information
          </p>
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white/10"
            onClick={() => window.location.href = '/admin/signup'}
          >
            Signup
          </Button>
        </div>
      </div>
    </div>
  )
}