import Image from 'next/image'
import React, { useDebugValue } from 'react'
import Main from "../../public/main.webp"
import Multiple from "../../public/multiple.jpeg"
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'


function NFTDropPage() {
    // Auth
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect()
    console.log(address)

    return (
        <div className='flex 
        flex-col 
        h-screen 
        lg:grid
        lg:grid-cols-10'>
            {/*left  */}
            <div className='bg-gradient-to-br
             from-cyan-800
              to-rose-500
              lg:col-span-4'>
                <div className='
                flex flex-col
                items-center 
                justify-center
                py-2
                lg:min-h-screen
                '>
                    <div className='
                    bg-gradient-to-br
                    from-yellow-400
                    to-purple-600
                    p-2
                    rounded-xl
                
                    '>
                        <Image className='w-44 
                    rounded-xl 
                    object-cover 
                    lg:h-96
                    lg:w-72
                    ' src={Main} alt='NFT Image' />
                    </div>

                    <div className='
                    text-center 
                    p-5
                    space-y-2
                    '>
                        <h1 className='
                        text-4xl 
                        font-bold 
                        text-white'>APES</h1>
                        <h2 className='
                        text-xl 
                        text-gray-300'>A Collection of NFTs</h2>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
                {/* header */}
                <div className='flex items-center justify-between'>
                    <h1 className='
                    w-52 
                    cursor-pointer 
                    text-xl 
                    font-extralight 
                    sm:w-80'>The
                        <span className='
                    font-extrabold
                    underline
                    decoration-pink-600/50
                    '> {' '}Zule Huma </span>{' '}
                        NFT Marketplace</h1>
                    <button
                        onClick={() => { address ? disconnect() : connectWithMetamask() }}
                        className='rounded-full
                     bg-rose-400 
                     px-4
                     py-2
                     text-xs
                     font-bold
                     text-white
                     lg:px-5
                     lg:py-3
                     lg:text-base
                     '>{address ? "Sign Out" : "Sign In"}</button>
                </div>
                <hr className='my-2 border' />
                {address && (
                    <p>You're logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>
                )}
                {/* content */}
                <div className='mt-10 
                flex
                flex-1 
                flex-col 
                items-center
                space-y-6
                text-center
                lg:space-y-0
                lg:justify-center
                '>
                    <Image
                        className='
                        w-80
                    object-cover
                    pb-10
                    lg:h-40
                    ' src={Multiple} alt='Multiple Image' />
                    <h1 className='text-3xl 
                    font-bold 
                    lg:text-5xl
                    lg:font-extrabold
                    '> The Coding Club | NFT Drop</h1>
                    <p className='pt-2 text-xl text-green-500'> 13/12 NFT's claimed</p>

                </div>
                {/* button */}
                <button className='
                h-16
                w-full
                rounded-full
                bg-red-600
                text-white
                font-bold
                '>Mint NFT</button>

            </div>
        </div>
    )
}

export default NFTDropPage