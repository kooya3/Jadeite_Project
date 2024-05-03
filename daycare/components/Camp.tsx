import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
      <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
      <CampSite
          backgroundImage="bg-bg-img-5"
          title="Jamii Ya Jadeite Foundation Summer Camp"
          subtitle="Kiambu, Ruaka"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-6"
          title="Jamii Ya Jadeite Foundation Daycare Playtime"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-7"
          title="Jamii Ya Jadeite Foundation Girl Mentorship Program"
          subtitle="Somewhere in Ruaka"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-8"
          title="Jamii Ya Jadeite Foundation Sports Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-9"
          title="Jamii Ya Jadeite Foundation Relief Donation"
          subtitle="Kiambu, Ruaka"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-10"
          title="Jamii Ya Jadeite Foundation Partners"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-11"
          title="Jamii Ya Jadeite Foundation Art Exhibition"
          subtitle="Somewhere in Ruaka"
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-4"
          title="Jamii Ya Jadeite Foundation Daycare"
          subtitle="Kiambu, Ruaka"
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Jamii Ya Jadeite Foundation Girls Mentorship"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-3"
          title="Jamii Ya Jadeite Foundation Youth Mentorship"
          subtitle="Somewhere in Ruaka"
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Jamii Ya Jadeite Foundation"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
        
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong><span className="text-yellow-50">Feeling Lost</span></strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            we are dedicated to making a positive impact in the lives of children, families, and the community. Through our diverse programs and initiatives, we strive to create an inclusive and nurturing environment where everyone can flourish.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp