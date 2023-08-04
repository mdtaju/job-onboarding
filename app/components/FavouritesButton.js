import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

const FavouritesButton = () => {

    const [clearState, setclearState] = useState(false);
    let dummyData = [1,2,3,4,5,6,7,8,9];


  return (
    <>
    <Menu as="div" className="sm:relative inline-block text-left">
        <div>
          <Menu.Button className="customShadow flex items-center gap-3 rounded-lg bg-white border-2 border-gray-200 overflow-hidden h-[45px] transition hover:bg-[#f2f2f2] px-3">
          <img src="/images/heart.svg" alt="heart" className="min-w-[18px] max-w-[18px]" />
          <div className="font-semibold text-[14px]">Favourites</div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={`absolute right-0 lg4:right-auto lg4:left-0 mt-2 origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ${clearState === false ? "w-full sm:w-[400px] lg4:w-[500px]" : "w-full sm:w-[400px]"}`}>
           <div className="p-1.5">
            {
                clearState === false ?
                <>
                <div className="flex items-center justify-end gap-2">
             <div onClick={()=>{setclearState(true)}} className='cursor-pointer px-2 py-1 text-[13px] rounded-full bg-white border-2 border-gray-200 transition hover:bg-[#f2f2f2]'>Clear list</div>
             <Menu.Item>
             <div className='cursor-pointer w-[30px] h-[30px] flex items-center justify-center text-[13px] rounded-full bg-white border-2 border-gray-200 transition hover:bg-[#f2f2f2]'><img src="/images/close.svg" alt="close" className="min-w-[11px] max-w-[11px]" /></div>
             </Menu.Item>
            </div>

            <div className="customScroll flex flex-col gap-2 max-h-[270px] overflow-y-auto pr-1.5 mt-2">
              {
                dummyData.map((ele, index)=>{
                    return(
                      // list of fav jobs
                        <div key={index} className="relative flex items-start sm4:items-center justify-between gap-3 flex-col sm4:flex-row flex-wrap rounded-lg bg-white border-2 border-gray-200 p-2">
              <div className="flex items-start gap-3">
                  <div className="min-w-[60px] max-w-[60px] h-[60px] rounded-xl bg-black text-center flex items-center justify-center text-white translate-y-[1px]">LOGO</div>
                  <div>
                    <div className="flex items-center gap-3 text-[#2b323d] text-[19px] font-[600]">Software Engineer</div>
                    <div className="text-[#7a8497] font-[500] text-[14px] mt-[2px]">Linear Company</div>
                  </div>
               </div>

               <div className="flex sm4:items-end sm4:justify-end flex-col">
                <div className="cursor-pointer absolute top-2 right-2"><HeartIcon/></div>
                <Link href="/" className="flex items-center gap-2 px-2 py-1 text-[13px] rounded-full bg-white border-2 border-gray-200 transition hover:bg-[#f2f2f2] sm4:mt-8">Go to listing <img src="/images/arrow-right.svg" alt="arrow-right" className="w-[6px]" /></Link>
               </div>
              </div>
                    )
                })
              }

            </div>
            </>
            :

             // clear favourite jobs
            <div className="flex items-start gap-3 px-2 py-3 bg-red-50 rounded-md">
              <div className="-translate-y-[2px]"><img src="/images/bin-icon.svg" alt="bin icon" className="min-w-[50px] max-w-[50px]" /></div>
              <div>
                <div className="text-[16px] text-[#B91C1C] whitespace-normal">Are you sure you want to clear your favourites list?</div>
                <div className="flex items-center gap-3 mt-5">
                  <button onClick={()=> {setclearState(false)}} className="flex items-center gap-3 rounded-md text-[15px] text-[#EF4444] font-semibold bg-[#FEE2E2] transition hover:bg-[#fac6c6] px-3 py-2">Clear <svg width="10" height="14" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.0653 0.440239C1.10594 0.399496 1.15422 0.367171 1.20737 0.345115C1.26052 0.32306 1.3175 0.311707 1.37505 0.311707C1.4326 0.311707 1.48958 0.32306 1.54273 0.345115C1.59588 0.367171 1.64416 0.399496 1.6848 0.440239L6.9348 5.69024C6.97554 5.73088 7.00787 5.77916 7.02992 5.83231C7.05198 5.88546 7.06333 5.94244 7.06333 5.99999C7.06333 6.05753 7.05198 6.11452 7.02992 6.16767C7.00787 6.22082 6.97554 6.2691 6.9348 6.30974L1.6848 11.5597C1.60265 11.6419 1.49123 11.688 1.37505 11.688C1.25887 11.688 1.14745 11.6419 1.0653 11.5597C0.983149 11.4776 0.936997 11.3662 0.936997 11.25C0.936997 11.1338 0.983149 11.0224 1.0653 10.9402L6.00642 5.99999L1.0653 1.05974C1.02456 1.0191 0.992231 0.97082 0.970176 0.917668C0.94812 0.864516 0.936768 0.807535 0.936768 0.749989C0.936768 0.692442 0.94812 0.635461 0.970176 0.582309C0.992231 0.529157 1.02456 0.480879 1.0653 0.440239Z" fill="#EF4444"/></svg></button>
                  <div onClick={()=> {setclearState(false)}} className="cursor-pointer flex items-center gap-3 text-[15px] rounded-md bg-transparet text-[#EF4444] font-semibold">Go back</div>
                </div>
              </div>
            </div>
            }


           </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export default FavouritesButton


// for heart icon
export const HeartIcon = () => {
  const [heart, setheart] = useState(true);

  return(
    <>
     <div className="">
       <button onClick={(e)=>{
          e.preventDefault();
          setheart(true);
        }}
        ><img src="/images/heart.svg" alt="heart" className={`min-w-[20px] max-w-[20px] translate-y-1 ${heart === false ? "flex" : "hidden" }`} /></button>
        <button onClick={(e)=>{
          e.preventDefault();
          setheart(false);
        }}
        ><img src="/images/heart-fill.svg" alt="heart" className={`min-w-[20px] max-w-[20px] translate-y-1 ${heart === true ? "flex" : "hidden" }`} /></button>
     </div>
    </>
  )
}
   