'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Link from 'next/link'

export function SigninForm() {

  return (
    <div className="flex w-full items-center justify-center lg:w-3/5">
    <div className="w-full max-w-md space-y-6 p-8">
      <div className="text-center">
        <h2 className="text-xl font-bold">
          Event<span className="text-[#7C3AED]">Hive</span>
        </h2>
        <h3 className="mt-6 text-2xl font-bold">
          Sign In to Event Hive
        </h3>
      </div>
      <form className="space-y-6">
        <div className="space-y-3">
          <label className="block text-base font-medium">YOUR EMAIL</label>
          <Input 
            type="email"
            placeholder="Enter your mail" 
            className="w-full rounded-md border placeholder:text-[#687C94] focus:ring-none focus:border-none bg-white border-gray-200 px-4 py-6"
          />
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="block text-base font-medium">PASSWORD</label>
            <Link href="/forgot-password" className="text-sm text-[#687C94] hover:text-[#7C3AED]">
              Forgot your password?
            </Link>
          </div>
          <Input 
            type="password" 
            placeholder="Enter your password"
            className="w-full rounded-md border placeholder:text-[#687C94] focus:border-none bg-white border-gray-200 px-4 py-6"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full justify-center text-base items-center rounded-md bg-[#7C3AED] py-4 text-white hover:bg-[#6D28D9]"
        >
          Sign In
        </Button>
      </form>
      <div className="text-center text-sm text-gray-500">
        Or
      </div>
      <Button  
        variant="outline" 
        className="w-full flex items-center justify-center gap-2 rounded-lg border py-3"
      >
        <Image 
          src="/google.svg" 
          alt="Google" 
          width={20} 
          height={20} 
        />
        Sign in with Google
      </Button>
    </div>
  </div>
  )
}