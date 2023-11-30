import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88"><span className="text-green-50">Jamii</span> Ya <span className="text-yellow-400">Jadeite</span> <span className="text-orange-50">Foundation</span></h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">Welcome to our Montessori System Daycare! At our daycare, we go above and beyond to provide a nurturing environment where children can thrive and grow. We understand the challenges that parents face in balancing work and family life, and our goal is to make your life easier by offering a comprehensive range of services that cater to the needs of both children and parents.
</p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            <span className="regular-16 lg:regular-20 ml-1 text-orange-50">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
        <Button 
             type="button" 
             title="Location" 
             variant="btn_green" 
             onclick="window.location.href='https://www.google.com/maps/place/Jadeite+day+care+center+Ruaka/@-1.2054162,36.7790913,17z/data=!3m1!4b1!4m6!3m5!1s0x182f23fc30f5f451:0x3cb08d183ab5d785!8m2!3d-1.2054216!4d36.7816662!16s%2Fg%2F11v0p8ktw2?entry=ttu'"
            />

          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-yellow-50">Kiambu, Ruaka.</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">13.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero