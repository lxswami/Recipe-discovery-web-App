'use client'
import React, { useEffect, useState } from 'react'


export default function Slider({ data }) {
    const [current, setCurrent] = useState(0)

    useEffect(
        () => {
            const clear = setInterval(
                () => {
                    setCurrent(
                        (current) => {
                            return (
                                current === data.length - 1 ? 0 : current + 1
                            )
                        }
                    )
                }, 4000);
                return()=>{
                    clearInterval(clear) //cleanup function
                }
        }, []
    )

    const prevSlide = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1)
    }

    return (
        <div className="relative w-full md:col-span-3 h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
            {/* Slides */}

            {data.map(
                (d, i) => {
                    return (
                        (
                            <div
                                key={i}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${current === i
                                    ? 'opacity-100 scale-100 z-10'
                                    : 'opacity-0 scale-95 z-0'
                                    }`}
                            >
                                <img
                                    src={d.image}
                                    alt={`Recipe ${i + 1}`}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        )
                    )
                })}



            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {data.map((_, i) => (
                    <button
                        key={i}
                        className={`w-2 h-2 rounded-full ${current === i ? 'bg-gray-600' : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
