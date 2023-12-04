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
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">Welcome to Jamii Ya Jadeite Foundation, your trusted partner in community development. At our center, we manage a variety of projects, with a special focus on a Montessori-based daycare program. Our commitment goes beyond basic care; we provide nourishment, tender love, and attention to ensure children thrive. Explore the multitude of projects we offer, each designed to make a positive impact on our community.
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
            <span className="regular-16 lg:regular-20 ml-1 text-black">Excellent Reviews</span>
          </p>
        </div>
        

        <div className="flex flex-col w-full gap-3 sm:flex-row">

          <Button
            type="button"
            title="Location"
            variant="btn_green"
            icon="/loca.svg"
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
        <div className="relative z-20 flex w-[270px] flex-col gap-8 rounded-3xl bg-yellow-50 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-18 text-green-70">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-black">Kiambu, Ruaka.</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-18 block text-green-70">Distance</p>
              <p className="bold-20 text-black">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-18 block text-green-70">Elevation</p>
              <p className="bold-20 text-black">13.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero