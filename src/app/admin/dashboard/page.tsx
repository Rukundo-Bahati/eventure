import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function profilePage () {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({
    cookies: () => cookieStore
  })

  const {
    data: { session }
  } = await supabase.auth.getSession()  

  if (!session) {
    redirect("/admin/login")
  }

  const user = session.user

  return <h2>User Profile</h2>
}