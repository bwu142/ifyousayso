"use client";
import {useState} from "react";
import SignupModal from "@/components/SignupModal";

export default function LoginPage() {

  const [showSignup, setShowSignup] = useState(false);

    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5EFE8]">

        {/* blue box */}
        <div className={`flex w-[90vw] h-[80vh] overflow-hidden rounded-xl bg-[#659BB9] shadow-lg 
          transition-transform duration-300
          animate-in fade-in zoom-in duration-500
          bg-gradient-to-br from-[#567cbd] to-[#659BB9]
          ${showSignup ? "-translate-y-1 shadow-2xl" : "hover:-translate-y-1 hover:shadow-2xl"}`}>


          {/* LEFT column: mascot + tagline */}
          <div className="flex-1 hidden md:flex flex-col justify-between p-10">
            <div className="flex flex-1 items-center justify-center">
              {/* mascot image goes here later */}
            </div>
            <h2 className="text-5xl font-medium leading-tight text-white font-caladea">
              Say it. Do it.
              <br />
              Inspire Together.
            </h2>
          </div>
  
          {/* RIGHT column: form */}
          <div className="flex flex-1 w-full flex-col gap-3 p-10 pt-25 font-alexandria">
            {/* username and password input*/}
            <h1 className="mb-4 text-center text-6xl mb-6 text-white font-medium font-alumni">
              ifyousayso
            </h1>

            <input 
              className="bg-[#E8F0FE] rounded-md px-4 py-3 w-[80%] mx-auto text-black focus:outline-none focus:ring-2 focus:ring-[#122c4f]" 
              type="text" 
              placeholder="email" 
            />
            <input
              className="bg-[#E8F0FE] rounded-md px-4 py-3 w-[80%] mx-auto text-black focus:outline-none focus:ring-2 focus:ring-[#122c4f]"
              type="password"
              placeholder="password"
            />

            {/* login button*/}
            <button className="rounded-3xl mt-4 mb-4 bg-[#383533] opacity-100 hover:opacity-90 w-[60%] mx-auto py-3 text-white">
              login
            </button>
  
            <div className="flex items-center gap-3 text-xs text-white/80 justify-center">
              <span className="h-px basis-3/10 bg-white/40" />
              or log in with
              <span className="h-px basis-3/10 bg-white/40" />
            </div>

            {/* google login button*/}
            <button className="rounded-3xl w-[60%] mt-4 opacity-100 hover:opacity-80 mx-auto bg-[#E8F0FE] py-3 font-medium">
              GOOGLE
            </button>
  
            {/* sign up button*/}
            <p className="mt-2 text-center text-xs text-white/80">
              New here?{" "} 
              <button onClick={() => setShowSignup(true)} className="underline hover:font-semibold">
                Sign Up
              </button>
            </p>
          </div>
        </div>

        {/* Signup modal — its open/closed state lives here, the UI lives in the component */}
        <SignupModal open={showSignup} onClose={() => setShowSignup(false)} />
      </main>
    );
  }