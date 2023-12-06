import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
        <a href="https://www.mchanga.africa/fundraiser/85304" target="_blank" rel="noopener noreferrer">
        <h2 className="bold-40 lg:bold-40 xl:max-w-[320px] text-green-70">CLick Here To <span className='text-yellow-50'> Donate</span></h2>
        </a>
          <h2 className="bold-32 lg:bold-40 xl:max-w-[320px]">PAYBILL: 247247</h2>
          <h2 className="bold-32 lg:bold-40 xl:max-w-[320px]">ACCOUNT: 0745847995</h2>
          <p className="regular-16 text-gray-10">DIAL: *483*57*85304#</p>


          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            {/*  <Button
              type="button"
              title="Donate"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            /> */}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          {/* <Image src="/phones.png" alt="phones" width={550} height={870} /> */}
        </div>
      </div>
    </section>
  )
}

export default GetApp