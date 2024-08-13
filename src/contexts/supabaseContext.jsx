// import { createContext, useContext, useEffect, useState } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { AuthContext } from '@/contexts/firebaseContext';


// const SupabaseContext = createContext();

// export const SupabaseProvider = ({ children }) => {
//     const { user } = useContext(AuthContext);

//     const supabaseUrl = user.supabaseUrl;
//     const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
//     const supabase = createClient(supabaseUrl, supabaseKey);

//   return (
//     <SupabaseContext.Provider value={supabase}>
//       {children}
//     </SupabaseContext.Provider>
//   );
// };

// export const useSupabase = () => {
//   return useContext(SupabaseContext);
// };