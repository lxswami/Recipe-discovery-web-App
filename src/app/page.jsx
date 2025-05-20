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
import Slider from '@/components/slider';
import Link from 'next/link';

export default async function Home() {
  const recipes = await getRecipes();
  const TopTrending = recipes.slice(0, 4);
  const TopSelling = recipes.slice(4, 8);
  const DealOfTheDay = recipes.slice(8, 12);
  const slide = recipes.slice(12, 20);




  return (
    <div className="p-6 max-w-[1500px] m-auto">
      <section className="w-full overflow-hidden bg-white rounded-2xl shadow-lg">
        <h2 className="text-5xl font-bold text-center text-green-500 mb-10">
          Recipe Highlights
        </h2>

        {/* Slider Track */}
        <div className="flex space-x-6 transition-transform duration-500 ease-in-out">
          {/* Slide 1 */}
          <div className="min-w-full grid grid-cols-1 md:grid-cols-5 gap-6 items-center bg-white rounded-2xl shadow-md p-8">
            {/* Text Content */}
            <div className="md:col-span-2 flex flex-col justify-center gap-4 text-center md:text-left">
              <h3 className="text-3xl font-bold text-amber-600">Recipe One</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi atque adipisci soluta,
                illum eum fugit tenetur unde officiis et repellendus itaque fuga molestias dolor? Ab, veniam aliquam.
                Dolores ab iusto consectetur provident repudiandae consequuntur modi obcaecati, natus aut eius pariatur
                illum est error non voluptatem incidunt aliquam maiores. Vitae possimus distinctio, esse ratione nobis
                perferendis aliquam dicta libero architecto. Voluptatibus, numquam possimus quis similique voluptate
                veniam sapiente esse sit dignissimos voluptatem eos iste neque ipsam quo debitis ab harum quae rem qui
                aperiam vero? Eos, nostrum rerum. Libero nisi in eum dignissimos perspiciatis, rerum dolor esse est
                quae beatae consequatur.
              </p>
              <Link href='/recipes'>
                <button className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition">
                  View Recipe
                </button>
              </Link>
            </div>

            {/* Image Content */}
            <Slider data={slide} />
          </div>

        </div>

      </section>


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
