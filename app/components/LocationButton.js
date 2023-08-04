import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

const LocationButton = () => {
 
    const [locationNotApplied, setlocationNotApplied] = useState('none');
    const [locationApplied, setlocationApplied] = useState('');
    const [showSuggestion, setshowSuggestion] = useState('false');

  return (
    <>
    <Menu as="div" className="sm:relative inline-block text-left z-10">
        <div>
          {/* button ifself starts */}
          <Menu.Button className={`customShadow flex items-center gap-3 rounded-lg border-2 border-gray-200 overflow-hidden h-[45px] transition px-3 ${locationApplied === "" ? "bg-white hover:bg-[#f2f2f2]" : "bg-black text-white hover:bg-opacity-70"}`}>
           <svg width="18" height="18" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_36_9147)"><path fillRule="evenodd" clipRule="evenodd" d="M2.7125 10.3C2.75325 10.2457 2.80609 10.2016 2.86684 10.1712C2.92759 10.1408 2.99458 10.125 3.0625 10.125H5.25C5.36603 10.125 5.47731 10.1711 5.55936 10.2531C5.64141 10.3352 5.6875 10.4465 5.6875 10.5625C5.6875 10.6785 5.64141 10.7898 5.55936 10.8719C5.47731 10.9539 5.36603 11 5.25 11H3.28125L1.3125 13.625H12.6875L10.7188 11H8.75C8.63397 11 8.52269 10.9539 8.44064 10.8719C8.35859 10.7898 8.3125 10.6785 8.3125 10.5625C8.3125 10.4465 8.35859 10.3352 8.44064 10.2531C8.52269 10.1711 8.63397 10.125 8.75 10.125H10.9375C11.0054 10.125 11.0724 10.1408 11.1332 10.1712C11.1939 10.2016 11.2467 10.2457 11.2875 10.3L13.9125 13.8C13.9612 13.865 13.9909 13.9423 13.9982 14.0232C14.0055 14.1041 13.9901 14.1855 13.9538 14.2582C13.9175 14.3308 13.8616 14.3919 13.7925 14.4347C13.7234 14.4774 13.6437 14.5 13.5625 14.5H0.4375C0.356251 14.5 0.276607 14.4774 0.207493 14.4347C0.138378 14.3919 0.082524 14.3308 0.0461883 14.2582C0.00985267 14.1855 -0.00552861 14.1041 0.00176801 14.0232C0.00906462 13.9423 0.0387508 13.865 0.0875002 13.8L2.7125 10.3Z" fill={locationApplied === "" ? "#374151" : "white"}/><path fillRule="evenodd" clipRule="evenodd" d="M7 1.37492C6.65528 1.37492 6.31394 1.44282 5.99546 1.57474C5.67698 1.70665 5.3876 1.90001 5.14385 2.14376C4.90009 2.38752 4.70674 2.6769 4.57482 2.99538C4.4429 3.31386 4.375 3.6552 4.375 3.99992C4.375 4.34464 4.4429 4.68598 4.57482 5.00446C4.70674 5.32294 4.90009 5.61232 5.14385 5.85608C5.3876 6.09983 5.67698 6.29318 5.99546 6.4251C6.31394 6.55702 6.65528 6.62492 7 6.62492C7.69619 6.62492 8.36387 6.34836 8.85616 5.85608C9.34844 5.36379 9.625 4.69611 9.625 3.99992C9.625 3.30373 9.34844 2.63605 8.85616 2.14376C8.36387 1.65148 7.69619 1.37492 7 1.37492V1.37492ZM3.5 3.99992C3.50006 3.32637 3.69448 2.66714 4.05991 2.10134C4.42534 1.53554 4.94627 1.0872 5.56019 0.810113C6.17411 0.533031 6.85494 0.438978 7.52099 0.539239C8.18704 0.639501 8.81001 0.929818 9.31516 1.37535C9.8203 1.82089 10.1862 2.40272 10.3688 3.05103C10.5515 3.69934 10.5432 4.38659 10.345 5.03031C10.1468 5.67403 9.767 6.24688 9.25128 6.68013C8.73555 7.11337 8.10577 7.3886 7.4375 7.47279V12.3124C7.4375 12.4285 7.39141 12.5397 7.30936 12.6218C7.22731 12.7038 7.11603 12.7499 7 12.7499C6.88397 12.7499 6.77269 12.7038 6.69064 12.6218C6.60859 12.5397 6.5625 12.4285 6.5625 12.3124V7.47367C5.71634 7.36706 4.93823 6.95518 4.37431 6.31538C3.8104 5.67557 3.49949 4.85189 3.5 3.99904V3.99992Z" fill={locationApplied === "" ? "#374151" : "white"}/></g><defs><clipPath id="clip0_36_9147"><rect width="14" height="14" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
           <div className="font-semibold text-[14px]">{locationApplied === "" ? "Location" : locationApplied}</div>
          </Menu.Button>
          {/* button ifself ends */}

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
          <Menu.Items className="absolute right-0 lg4:right-auto lg4:left-0 mt-2 origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full sm:w-[400px]">
           <div className="">
          {/* close icon starts */}
           <div className="flex items-center justify-end gap-2 p-1.5">
             <div onClick={()=> {
                setlocationNotApplied("none");
                setlocationApplied("");
             }} className='cursor-pointer px-2 py-1 text-[13px] rounded-full bg-white border-2 border-gray-200 transition hover:bg-[#f2f2f2]'>Clear filters</div>
             <Menu.Item>
             <div className='cursor-pointer w-[30px] h-[30px] flex items-center justify-center text-[13px] rounded-full bg-white border-2 border-gray-200 transition hover:bg-[#f2f2f2]'><img src="/images/close.svg" alt="close" className="min-w-[11px] max-w-[11px]" /></div>
             </Menu.Item>

            </div>
          {/* close ifself ends */}


            <div className="flex flex-col gap-2 px-3 pb-3 mt-2">
               <div className="text-[18px] text-[#1F2937] font-bold mb-[2px]">Search</div>
              {/* input field starts */}




                <div className="relative flex items-center gap-2 rounded-lg border-2 border-gray-200 focus-within:border-blue-500 overflow-visible transition hover:bg-[#f2f2f2] py-2 px-2">
                 <img src="/images/search.svg" alt="Search" />
                   {
                    locationNotApplied !== "none" ?
                    <div className='cursor-pointer px-2 py-1 text-[13px] rounded-full bg-black text-white border-2 border-gray-200'>{locationNotApplied}</div>
                    :
                    <input type="text" onFocus={()=> {setshowSuggestion(true)}} onBlur={()=> {setTimeout(() => {setshowSuggestion(false)}, 200);}}  placeholder="Search location" className="w-full h-full bg-transparent border-none outline-none" />
                   }

                {/* suggested locations when user is typing starts */}
                  
                 {
                    showSuggestion === true ?
                    <div className="customScroll absolute top-[calc(100%+3px)] left-0 w-full p-1 flex flex-col space-y-1 bg-white border-2 border-gray-200 rounded-lg max-h-[130px] overflow-y-auto">
                     <button onClick={()=> {setlocationNotApplied("Paris")}} className="w-full py-1.5 px-2 text-left rounded-md hover:bg-[#F3F4F6] font-medium text-[#374151]">Paris</button>
                     <button onClick={()=> {setlocationNotApplied("Milan")}} className="w-full py-1.5 px-2 text-left rounded-md hover:bg-[#F3F4F6] font-medium text-[#374151]">Milan</button>
                     <button onClick={()=> {setlocationNotApplied("Helsinki")}} className="w-full py-1.5 px-2 text-left rounded-md hover:bg-[#F3F4F6] font-medium text-[#374151]">Helsinki</button>
                     <button onClick={()=> {setlocationNotApplied("Paris")}} className="w-full py-1.5 px-2 text-left rounded-md hover:bg-[#F3F4F6] font-medium text-[#374151]">Paris</button>
                     <button onClick={()=> {setlocationNotApplied("Milan")}} className="w-full py-1.5 px-2 text-left rounded-md hover:bg-[#F3F4F6] font-medium text-[#374151]">Milan</button>
                     <button onClick={()=> {setlocationNotApplied("Helsinki")}} className="w-full py-1.5 px-2 text-left rounded-md hover:bg-[#F3F4F6] font-medium text-[#374151]">Helsinki</button>
                    </div>
                    :
                    null
                 }

                {/* suggested locations when user is typing ends */}


                </div>
             {/* input field ends */}



                {/* popular location */}

               <div className="text-[18px] text-[#1F2937] font-bold mt-2 mb-[2px]">Most popular locations</div>
               <div className="flex items-center gap-3 flex-wrap whitespace-nowrap">
                 <button onClick={()=> {setlocationNotApplied("London")}} className={`cursor-pointer px-2.5 py-1 text-[15px] rounded-full border-2 border-gray-200 transition ${locationNotApplied === "London" ? "bg-black text-white hover:bg-black hover:bg-opacity-70" : "bg-white hover:bg-[#f2f2f2]"}`}>London</button>
                 <button onClick={()=> {setlocationNotApplied("New York")}} className={`cursor-pointer px-2.5 py-1 text-[15px] rounded-full border-2 border-gray-200 transition ${locationNotApplied === "New York" ? "bg-black text-white hover:bg-black hover:bg-opacity-70" : "bg-white hover:bg-[#f2f2f2]te"}`}>New York</button>
                 <button onClick={()=> {setlocationNotApplied("Berlin")}} className={`cursor-pointer px-2.5 py-1 text-[15px] rounded-full border-2 border-gray-200 transition ${locationNotApplied === "Berlin" ? "bg-black text-white hover:bg-black hover:bg-opacity-70" : "bg-white hover:bg-[#f2f2f2]"}`}>Berlin</button>
               </div>

               <div className="flex items-center justify-end mt-2">
                {/* search button starts */}
                <Menu.Item>
                 <button onClick={()=> {
                   if(locationNotApplied !== "none") {
                     setlocationApplied(locationNotApplied);
                   }
                 }} className="flex items-center gap-3 rounded-xl text-white bg-[#6B7280] font-medium border-2 border-gray-200 w-fit transition hover:bg-[#585858] px-3 py-2">Search <svg width="10" height="14" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.0653 0.440239C1.10594 0.399496 1.15422 0.367171 1.20737 0.345115C1.26052 0.32306 1.3175 0.311707 1.37505 0.311707C1.4326 0.311707 1.48958 0.32306 1.54273 0.345115C1.59588 0.367171 1.64416 0.399496 1.6848 0.440239L6.9348 5.69024C6.97554 5.73088 7.00787 5.77916 7.02992 5.83231C7.05198 5.88546 7.06333 5.94244 7.06333 5.99999C7.06333 6.05753 7.05198 6.11452 7.02992 6.16767C7.00787 6.22082 6.97554 6.2691 6.9348 6.30974L1.6848 11.5597C1.60265 11.6419 1.49123 11.688 1.37505 11.688C1.25887 11.688 1.14745 11.6419 1.0653 11.5597C0.983149 11.4776 0.936997 11.3662 0.936997 11.25C0.936997 11.1338 0.983149 11.0224 1.0653 10.9402L6.00642 5.99999L1.0653 1.05974C1.02456 1.0191 0.992231 0.97082 0.970176 0.917668C0.94812 0.864516 0.936768 0.807535 0.936768 0.749989C0.936768 0.692442 0.94812 0.635461 0.970176 0.582309C0.992231 0.529157 1.02456 0.480879 1.0653 0.440239Z" fill="white"/></svg></button>
                </Menu.Item>
                {/* search button ends */}

               </div>



           </div>

           </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export default LocationButton