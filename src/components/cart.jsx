import React from 'react'
import Image from 'next/image'

export default function Cart({ items }) {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {
                items.map(
                    (item, index) => {
                        return (
                            <div key={index} className="bg-white p-4 shadow rounded">
                                <Image
                                    src={item.image || 'https://via.placeholder.com/300x200'}
                                    alt={item.name}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover mb-2 rounded-3xl"
                                />
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                            </div>
                        )
                    }

                )
            }
        </div>


    )
}
