import React, { useState } from "react";
import waitlistPhoneUi from "../assets/waitlist-phone-ui.png";
import waitlistPhoto from "../assets/waitlist-photo.jpg";
import { Link } from "react-router-dom";

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FCFCFC] text-gray-900 font-sans overflow-x-hidden pt-32 sm:pt-48 pb-16">
      {/* ── TOP SECTION (Text/Cards Left + Phone Right) ───────────────── */}
      <section className="w-full md:max-w-[1157px] md:h-[880px]  mx-auto px-4 sm:px-1  mb-20 sm:mb-28">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-10 md:space-x-16  lg:gap-16 items-center justify-between ">
          {/* Left Column */}
          <div className="flex flex-col space-y-8 gap-8 md:gap-[72px] ">
            <div className=" w-[379px] h-[292px] flex flex-col md:gap-5 md:w-[637px] md:h-[148px] ">
              <div className="">
                <h1 className="text-3xl sm:text-4xl md:text-[48px]  lg:text-[48px] font-semibold sm:font-medium text-gray-900 leading-[1.18] mb-4">
                  We Built ExamDash for
                  <br />
                  the Question Study
                  <br />
                  Tools Leave Unanswered.
                </h1>
                
              </div>

              <div className="">
                <p className="text-gray-500 font-poppins text-xs sm:text-[20px] md:text-base leading-relaxed max-w-[573px]">
                  Candidates can track hours, chapters and scores. The
                  harder question is what all of that means for exam
                  readiness.
                </p>

                <Link
                  to="/features"
                  className="inline-block mt-10 md:hidden bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white font-semibold font-poppins text-[20px] px-12 py-3 rounded-full shadow-md transition-all duration-200"
                >
                  Explore Features
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-28 md:pt-10">
              {/* Early Access Card */}
              <div className="md:w-[637px] md:h-fit bg-[#f5f5f5] p-[32px] rounded-[16px]">
                <h3 className="text-[30px] sm:text-[30px] font-roboto font-semibold sm:font-bold text-gray-900 mb-2">
                  Early Access
                </h3>
                <p className="text-gray-500 font-poppins text-[20px]sm:text-[20px] md:text-[15px] leading-relaxed max-w-[573px]">
                  Access to the current product experience on the first live
                  pathway while ExamDash continues improving features and
                  content.
                </p>
              </div>

              {/* Exclusive Updates Card */}
              <div className="md:w-[637px] md:h-fit bg-[#f5f5f5] p-[32px] rounded-[16px]">
                <h3 className="text-[30px] sm:text-[30px] font-roboto font-semibold sm:font-bold text-gray-900 mb-2">
                  Exclusive Updates
                </h3>
                <p className="text-gray-500 font-poppins text-[20px] sm:text-[20px] md:text-[15px] leading-relaxed max-w-[573px]">
                  Release changes, pathway additions, methodology updates and
                  known limitations — each stating its date and explaining the
                  candidate impact in plain language.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Phone in Grey Container) */}
          <div className="flex justify-center md:w-[477px] md:h-[808px] mt-20 md:mt-0 ">
            <div className="bg-[#F5F5F7] border border-gray-200/80 rounded-[28px] sm:rounded-[16px] p-6 sm:p-1 lg:p-10 w-full flex items-center  justify-center min-h-[380px] sm:min-h-[460px]  overflow-hidden shadow-2xs hover:shadow-xs transition-shadow">
              <img
                src={waitlistPhoneUi}
                alt="ExamDash App UI"
                className="max-h-[550.48px] w-[352px] sm:max-h-[700px] md:w-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM SECTION (Photo Left + Form Right) ────────────────────── */}
      <section className="w-full max-w-[1176px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24  items-center">
          {/* Photo */}
          <div className="rounded-[24px] sm:rounded-[32px]  overflow-hidden shadow-xl min-h-[320px] sm:min-h-[400px] md:w-[565px] md:h-[466px]">
            <img
              src={waitlistPhoto}
              alt="ExamDash Drill Practice"
              className="w-[565px] h-[466px] object-cover object-center rounded-[24px] sm:rounded-[3  2px]"
            />
          </div>

          {/* Form */}
          <div className="flex flex-col  justify-center">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center">
                <div className="text-3xl mb-2">🎉</div>
                <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
                <p className="text-sm text-emerald-700">
                  Thank you for joining. We will notify you as soon as early access spots open up.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs md:text-[14.25px] font-roboto1 font-semibold text-[#68727D]">
                    Full Name (required)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your Full Name"
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 transition-all shadow-2xs"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs md:text-[14.25px] font-roboto1 font-semibold text-[#68727D]">
                    Email Address (required)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your Email Address"
                    className="bg-white border h-[49px] p-[16px] border-gray-200 rounded-xl    text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 transition-all shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-12 font-poppins bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] text-white font-semibold text-xs sm:text-sm py-3.5 rounded-full shadow-lg transition-all duration-200 md:mt-2"
                >
                  Join Waitlist
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
