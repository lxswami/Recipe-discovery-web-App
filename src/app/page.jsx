// Wide way but easy to Understand



// import React from 'react'
// import Image from 'next/image'
// import { getRecipes } from '@/library/api-call'

// export default async function Home() {
//   // Get all recipes
//   const recipes = await getRecipes();
//   console.log(recipes)

//   // Divide recipes into three groups (each with 4 cards)
//   const topTrending = recipes.slice(0, 4);
//   const topSelling = recipes.slice(4, 8);
//   const dealOfTheDay = recipes.slice(8, 12);

//   return (
//     <div className="p-6">
//       {/* Top banner image */}
//       <Image
//         src="https://dummyjson.com/image/200x100"
//         alt="Banner"
//         width={1400}
//         height={250}
//         className="w-full h-[600px] object-cover"
//       />

//       {/* Top Trending Section */}
//       <h2 className="text-2xl font-bold mt-10 mb-4">Top Trending</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {
//           topTrending.map((item, index) => (
//             <div key={index} className="bg-white p-4 shadow rounded">
//               <Image
//                 src={item.image || 'https://via.placeholder.com/300x200'}
//                 alt={item.name}
//                 width={300}
//                 height={200}
//                 className="w-full h-48 object-cover mb-2"
//               />
//               <h3 className="text-lg font-semibold">{item.name}</h3>
//             </div>
//           ))
//         }
//       </div>

//       {/* Top Selling Section */}
//       <h2 className="text-2xl font-bold mt-10 mb-4">Top Selling</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {
//           topSelling.map((item, index) => (
//             <div key={index} className="bg-white p-4 shadow rounded">
//               <Image
//                 src={item.image || 'https://via.placeholder.com/300x200'}
//                 alt={item.name}
//                 width={300}
//                 height={200}
//                 className="w-full h-48 object-cover mb-2"
//               />
//               <h3 className="text-lg font-semibold">{item.name}</h3>
//             </div>
//           ))
//         }
//       </div>

//       {/* Deal of the Day Section */}
//       <h2 className="text-2xl font-bold mt-10 mb-4">Deal of the Day</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {
//           dealOfTheDay.map((item, index) => (
//             <div key={index} className="bg-white p-4 shadow rounded">
//               <Image
//                 src={item.image || 'https://via.placeholder.com/300x200'}
//                 alt={item.name}
//                 width={300}
//                 height={200}
//                 className="w-full h-48 object-cover mb-2"
//               />
//               <h3 className="text-lg font-semibold">{item.name}</h3>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }




// Simplest way 

import React from 'react'
import Image from 'next/image';
import { getRecipes } from '@/library/api-call'
import Cart from '@/components/cart';

export default async function Home() {
  const recipes = await getRecipes();
  const TopTrending = recipes.slice(0, 4)
  const TopSelling = recipes.slice(4, 8)
  const DealOfTheDay = recipes.slice(8, 12)




  return (
    <div className="p-6">
      <Image
        src="https://dummyjson.com/image/200x100"
        alt="Banner"
        width={1400}
        height={250}
        className="w-full h-[600px]"
      />

      <div>
        <h2 className="text-2xl font-bold mt-10 mb-4">Top trending</h2>
        <Cart items={TopTrending} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-10 mb-4">Top selling</h2>
        <Cart items={TopSelling} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-10 mb-4">Deal of the day</h2>
        <Cart items={DealOfTheDay} />
      </div>

    </div>
  )
}
