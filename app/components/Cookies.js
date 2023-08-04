"use client"
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'

const Cookies = () => {
 
    const [modal, setmodal] = useState(true)
    function closeModal() {
        setmodal(false)
    }
    
  return (
    <>
    <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#6B7280] bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-5 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[380px] transform overflow-hidden rounded-xl bg-white pt-4 text-center align-middle transition-all">
                  
                 <div className="flex items-center justify-end px-4">
                  <button onClick={closeModal} className="text-not-white outline-none"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>
                 </div>                  
                  
                  <div className="mt-3">
                   <div className="px-4">
                   <img src="/images/cookies.svg" alt="cookies" className="mx-auto"  />
                   <div className="text-[22px] text-[#1F2937] font-bold mt-4">Cookies!</div>
                   <div className="text-[15px] text-[#6B7280] mt-2.5">This website uses cookies to make your experience better.</div>
                   </div>
                   <div className="grid grid-cols-2 h-[50px] mt-5">
                    <Link href="/" className="flex items-center justify-center text-gray-800 bg-gray-200 transition hover:bg-gray-300">Privacy Policy</Link>
                    <button onClick={closeModal} className="flex items-center justify-center text-white bg-blue-500 transition hover:bg-blue-600">Got it</button>
                   </div>
                  </div>
               
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Cookies