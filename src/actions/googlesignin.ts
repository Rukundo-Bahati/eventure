import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export async function signInWithGoogle() {
    const supabase = createClientComponentClient()
    
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${window.location.origin}/admin/dashboard`
        }
    })
    
    return { data, error }
}
