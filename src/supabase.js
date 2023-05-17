
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hpzdxsobstktcpnagain.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwemR4c29ic3RrdGNwbmFnYWluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0OTA1MjIsImV4cCI6MTk4ODA2NjUyMn0.tAa77PB0QSlhpKQbA0AlwSbBWYa20NOGB8RgyzTQLQo"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;