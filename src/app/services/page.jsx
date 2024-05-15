"use client"
import { motion} from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation'

const Offerings = () => {
    const router = useRouter()
  return (
    <>
    <div className="w-screen flex items-center justify-center  text-center py-10 lg:text-8xl md:text-4xl sm:text-sm">
          Our Offerings
    </div>
    {/* card */}
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
     className="w-screen flex flex-wrap align-center justify-center gap-28 top-32 py-20"
    >
    <div className="relative flex flex-col mt-6 text-gray-700 bg-gradient-to-b from-blue-200 to bg-pink-200 shadow-md bg-clip-border rounded-xl w-96">
  <motion.div
   drag
   dragConstraints={{
     top: -50,
     left: -50,
     right: 50,
     bottom: 50,
   }}
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <Image
      src="/websitedesign.png"
      height={1080}
      width={1080}
      alt="card-image" />
  </motion.div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Website Development
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to  where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
    onClick={()=>router.push('/pricing')}
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Check Pricing
    </button>
  </div>
</div> 
{/* second card */}
<div className="relative flex flex-col mt-6 text-gray-700 bg-gradient-to-b from-blue-200 to bg-pink-200  shadow-md bg-clip-border rounded-xl w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <Image
      src="/application.png"
      height={1080}
      width={1080}
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Aplication Development
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to  where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
    onClick={()=>router.push('/pricing')}
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div>
</div> 
{/* third card */}
<div className="relative flex flex-col mt-6 text-gray-700 bg-gradient-to-b from-blue-200 to bg-pink-200  shadow-md bg-clip-border rounded-xl w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <Image
      src="/seo.png"
      height={1080}
      width={1080}
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Marketing Services
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to  where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div className="p-6 pt-0">
  <button
        onClick={() => router.push('/pricing')}
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Chek Pricing
    </button> 
  </div>
</div> 
{/* fourth card */}
<div className="relative flex flex-col mt-6 text-gray-700 bg-gradient-to-b from-blue-200 to bg-pink-200 shadow-md bg-clip-border rounded-xl w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <Image
      src="/serverrental.png"
      height={1080}
      width={1080}
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Server Rental
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Host your website , Application Backends , REST APIs on our budget friendly specially designed servers
      Capable to take loads from hundred users to a  million uers .
      Scale Automatically paired with built in CDN and DDOS protection. 
    </p>
  </div>
  <div className="p-6 pt-0">
     <button
        onClick={() => router.push('/pricing')}
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Chek Pricing
    </button> 
  
  </div>
</div> 
{/* end card */}
</motion.div> 

</>
  )
}

export default Offerings