import { createClient } from '@supabase/supabase-js'

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnon) {
  throw new Error(
    'Missing Supabase env vars. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnon)

const TABLE  = process.env.NEXT_PUBLIC_SUPABASE_TABLE         ?? 'waitlist'
const COLUMN = process.env.NEXT_PUBLIC_SUPABASE_EMAIL_COLUMN  ?? 'email'

export type WaitlistResult = { duplicate: boolean }

export async function insertWaitlistEmail(email: string): Promise<WaitlistResult> {
  const { error, status } = await supabase
    .from(TABLE)
    .insert({ [COLUMN]: email })

  if (error) {
    // 23505 = unique_violation (duplicate email)
    if (error.code === '23505' || status === 409) return { duplicate: true }
    throw new Error(error.message)
  }

  return { duplicate: false }
}