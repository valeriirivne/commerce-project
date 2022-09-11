// import { createContext, useState, useEffect } from 'react';

// import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

// // import SHOP_DATA from '../shop-data.js';

// export const CategoriesContext = createContext({
//   // categoriesMap: {},
// });
// CategoriesContext.displayName = 'CategoriesContext';

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({}); //categoriesMap is : {hats: Array(9), jackets: Array(5), mens: Array(6), sneakers: Array(8), womens: Array(7)}

//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments();

//       setCategoriesMap(categoryMap);
//     };

//     getCategoriesMap();
//   }, []);

//   const value = { categoriesMap };
//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
