import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import PropTypes from "prop-types";

const supabase = createClient("https://boktoqjaqpgmdqxdeuag.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJva3RvcWphcXBnbWRxeGRldWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMTkxMzQsImV4cCI6MjAwNTY5NTEzNH0.bXhTutBUkqBxHboCV55PLU7oJ4IM000YFUuz3KtSaGo");

function SignUp() {
    const {user} = props; 
}

useEffect(()=> {
    getUser();
});

// async function getUser() {
//     const {user_} = await supabase.from("user").select(); 
// }


export default SignUp;





// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient("https://<project>.supabase.co", "<your-anon-key>");

// function App() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     getCountries();
//   }, []);

//   async function getCountries() {
//     const { data } = await supabase.from("countries").select();
//     setCountries(data);
//   }

//   return (
//     <ul>
//       {countries.map((country) => (
//         <li key={country.name}>{country.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;