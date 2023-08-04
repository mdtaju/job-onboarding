import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
const ShareButton = () => {
  return (
    <>
           <Menu as="div" className="relative inline-block text-left z-10">
        <div>
          {/* button itself starts */}
          <Menu.Button className="customShadow flex items-center justify-center rounded-lg bg-white border-2 border-gray-200 text-[#6B7280] transition hover:bg-[#f2f2f2] px-3 py-1.5">
          <img src="/images/share.svg" alt="share.svg" className="w-[18px]" />
          </Menu.Button>
          {/* button itself end*/}

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
          <Menu.Items className="absolute right-0 mt-2 w-[180px] sm:w-56 origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
           <div className="space-y-1 p-1">
            <Menu.Item>
                  <button className={`w-full py-1.5 px-2 text-left rounded-md bg-white transition hover:bg-[#F3F4F6] font-medium text-[#374151] ]`}>
                    Twitter
                  </button>
              </Menu.Item>
              <Menu.Item>
                  <button className={`w-full py-1.5 px-2 text-left rounded-md bg-white transition hover:bg-[#F3F4F6] font-medium text-[#374151]`}>
                    Facebook
                  </button>
              </Menu.Item>
            <Menu.Item>
                  <button className={`w-full py-1.5 px-2 text-left rounded-md bg-white transition hover:bg-[#F3F4F6] font-medium text-[#374151]`}>
                   Instagram
                  </button>
              </Menu.Item>
              <Menu.Item>
                  <button className={`w-full py-1.5 px-2 text-left rounded-md bg-white transition hover:bg-[#F3F4F6] font-medium text-[#374151] `}>
                    YouTube
                  </button>
              </Menu.Item>
              </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export default ShareButton