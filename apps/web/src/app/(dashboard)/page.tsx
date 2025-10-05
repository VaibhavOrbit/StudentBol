import React from "react";
import WaitlistForm from "../componets/WishList";
const LandingPage = () => {
  return (
    <section className="flex justify-center mt-10 px-6 py-16">
      <div className="w-full max-w-6xl">
        {/* Headline */}
        <div className="text-center">

          <h1 className="mt-2 md:text-6xl text-4xl  text-black ">
            Real Students. Real Insights. <br /> Real Earnings.
          </h1>
          <p className="mt-6 md:text-xl text-base max-w-2xl mx-auto text-black">
            On <span className="font-semibold text-indigo-600">StudentBol</span>,
            students earn money by picking calls while users get authentic
            knowledge about colleges directly from students.
          </p>
        </div>

        {/* Content Section */}
        <div className="">

          <div className="text-black text-2xl flex justify-center p-6">
            <div className="">
              <span className="md:text-4xl text-3xl  text-center  ">
                <div className="p-6">
                     How It Works
                  <hr />
                </div> 
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row w-full items-center justify-center gap-10">
          {/* Card 1 */}
          <div className="max-w-md bg-black shadow-md rounded-2xl p-6 text-center border border-gray-200 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-600 mb-3">
              For Students (Earn Side)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Earn by sharing your real experiences. Guide students with
              authentic insights and get paid for your time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="max-w-md bg-black shadow-md rounded-2xl p-6 text-center border border-gray-200 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-600 mb-3">
              For Users / Clients
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Get genuine information about colleges directly from current
              students no agencies, no filters, just real voices.
            </p>
          </div>
        </div>

        </div>

        
     <div className='flex text-black justify-center  mx-auto items-center'>
        <p className='font-thin text-xl text-center mt-30 '>
            We’re starting StudentBol once we reach our <span className='text-blue-500'> 
                first 100 users/student.
                </span>   Be the first to know when we launch. Drop your email below
        </p>
    </div>


      <div className="bg-white flex justify-center rounded-4xl mt-10" >
      <WaitlistForm/>
      </div>
    
      </div>
    </section>
  );
};

export default LandingPage;
