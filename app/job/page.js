"use client"
import {useState, useEffect} from "react"
import { useRouter } from "next/navigation"
import JobCard from "../components/JobCard"
import ApplyForm from "../components/ApplyForm"

import dynamic from 'next/dynamic'
import ShareButton from "../components/ShareButton"
import JobInfoCard from "../components/JobInfoCard"

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
})
const MapModal = dynamic(() => import("../components/MapModal"), {
  ssr: false,
})


export default function Job() {
    const router = useRouter();

    const [loading, setloading] = useState(true);

    useEffect(() => {  
     setTimeout(() => {
     setloading(false)
    }, 1000);
    }, []);

  return (
    <>
     <div className="relative bg-[#F6F6F6]">
      <div className="grid grid-cols-1 lg4:grid-cols-[1fr,1fr] lg6:grid-cols-[1fr,500px] lg8:grid-cols-[1fr,560px] gap-5 my-5">
        {/*left section starts */}
        <div className="customShadow rounded-lg bg-white border-2 border-gray-200 overflow-hidden">
          <div className="bg-[#EBEBFF] p-3">
           <div className="flex items-center justify-between">
           <button onClick={() => router.back()} className="customShadow flex items-center gap-2 rounded-lg bg-white border-2 border-gray-200 text-[#6B7280] text-[14px] font-[500] transition hover:bg-[#f2f2f2] px-3 py-1.5">
            <img src="/images/arrow-left.svg" alt="arrow-left" className="w-[15px]" />
            <div>Go back</div>
           </button>

           <ShareButton/>
           </div>

           <div className="mt-5">
            <JobInfoCard loading={loading}/>
           </div>

          </div>

          <div className="p-3 pt-0s mt-5">
           <div className="text-[19px] font-[700] mb-5">Job Description</div>

           <div className="text-[#6B7280] font-medium leading-[23px]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br/><br/>

<ul className="list-disc ml-5">
  <li className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ex ea commodo consequat</li>
  <li className="mb-5">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
</ul>
<br/><br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </div>

       <ApplyForm/>
           

          </div>
        </div>
        {/*left section end */}




        {/*left section starts */}
            {/* map starts */}
            <div>
           
            <Map loading={loading}/>
            {/* map ends */}
            
            
          <div className="sticky top-5">
             <div className="text-[20px] font-[700] mt-5">Check out similar offers</div>
             <div className="w-full bg-gray-200 h-[1px] my-3"></div>

             <div className="flex flex-col gap-3">
              <JobCard loading={loading} homeView={false}/>
              <JobCard loading={loading} homeView={false}/>
              <JobCard loading={loading} homeView={false}/>
             </div>

            </div>
            </div>
        {/*left section ends */}


      </div>
     </div>

    </>
  )
}