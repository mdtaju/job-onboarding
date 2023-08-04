import UploadCV from "../components/UploadCV"
import UploadLetter from "../components/UploadLetter"

const ApplyForm = () => {
  return (
    <>
    <div className="mt-8">
            <div className="text-[19px] font-[700] mb-5">Apply for this job</div>

            <div className="flex flex-col gap-5">
                <div>
                  <div className="text-[#6B7280] font-medium mb-2">First and last name*</div>
                  <div className="flex items-center gap-3 rounded-lg border-2 border-gray-200 overflow-hidden h-[45px] focus-within:border-blue-500 transition hover:bg-[#f2f2f2] px-2">
                    <img src="/images/person.svg" alt="person" className="w-[25px]" />
                    <input type="text" placeholder="Your name" className="w-full h-full bg-transparent border-none outline-none" />
                  </div>
                </div>


                <div>
                  <div className="text-[#6B7280] font-medium mb-2">E-mail address*</div>
                  <div className="flex items-center gap-3 rounded-lg border-2 border-gray-200 overflow-hidden h-[45px] focus-within:border-blue-500 transition hover:bg-[#f2f2f2] px-2">
                    <img src="/images/email.svg" alt="email" className="w-[20px]" />
                    <input type="email" placeholder="you@site.com" className="w-full h-full bg-transparent border-none outline-none" />
                  </div>
                </div>


                <div>
                  <div className="text-[#6B7280] font-medium mb-2">Phone number</div>
                  <div className="flex items-center gap-3 rounded-lg border-2 border-gray-200 overflow-hidden h-[45px] focus-within:border-blue-500 transition hover:bg-[#f2f2f2] px-2">
                    <img src="/images/email.svg" alt="email" className="w-[20px]" />
                    <input type="email" placeholder="+0 (000) 000 000 000" className="w-full h-full bg-transparent border-none outline-none" />
                  </div>
                </div>


                <div>
                  <div className="text-[#6B7280] font-medium mb-2">Introduce yourself</div>
                    <textarea className="resize-none w-full h-[120px] rounded-lg border-2 border-gray-200 outline-none focus-within:border-blue-500 transition hover:bg-[#f2f2f2] p-2" placeholder="Introduce yourself"></textarea>
                </div>


                <div>
                  <div className="text-[#6B7280] font-medium mb-2">Upload your CV*</div>
                  <UploadCV/>
                </div>

                <div>
                  <div className="text-[#6B7280] font-medium mb-2">Upload your motivational letter</div>
                  <UploadLetter/>
                </div>

                <button className="w-full px-3 py-2.5 rounded-md text-white flex items-center justify-center text-center bg-blue-500 transition hover:bg-blue-600 mt-2">Apply</button>
 
                <div className="text-sm text-[#6B7280] text-right">*GDPR Lorem ipsum</div>

            </div>
             
           </div>
    </>
  )
}

export default ApplyForm