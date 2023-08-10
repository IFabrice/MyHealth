import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://boktoqjaqpgmdqxdeuag.supabase.co",
                              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJva3RvcWphcXBnbWRxeGRldWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMTkxMzQsImV4cCI6MjAwNTY5NTEzNH0.bXhTutBUkqBxHboCV55PLU7oJ4IM000YFUuz3KtSaGo");
console.log("the program is here");

export default supabase;
