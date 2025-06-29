import React, { useState } from "react";

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [step, setStep] = useState(1);

  const [personal, setPersonal] = useState({ first: "", last: "", dob: "", gender: "" });
  const [contact, setContact] = useState({ email: "", mobile: "" });
  const [confirm, setConfirm] = useState({ verifyEmail: "", accepted: false, confirmed: false });

  const canGoNext = () => {
    if (step === 1) {
      const { first, last, dob, gender } = personal;
      return first && last && dob && gender;
    }
    if (step === 2) {
      const { email, mobile } = contact;
      return email && mobile;
    }
    if (step === 3) {
      const { verifyEmail, accepted, confirmed } = confirm;
      return verifyEmail && accepted && confirmed;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex flex-col items-center justify-center px-4 py-10">
    
      <img
        src="https://pbs.twimg.com/media/GcfFXk-XkAAMdwf.jpg:large"
        alt="Parul University Logo"
        className="w-24 md:w-28 mb-6"
      />

      
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        
        <div className="flex justify-between text-center text-sm font-medium border-b border-gray-200">
          <button
            className={`w-1/2 py-3 transition ${
              !isRegistering ? "bg-[royalblue] text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => {
              setIsRegistering(false);
              setStep(1);
            }}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-3 transition ${
              isRegistering ? "bg-[royalblue] text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => setIsRegistering(true)}
          >
            Register
          </button>
        </div>

        
        <div className="relative h-[540px]">
          <div
            className={`flex w-[200%] transition-transform duration-500 ${
              isRegistering ? "-translate-x-1/2" : "translate-x-0"
            }`}
          >
           
            <form className="w-1/2 p-8 space-y-6">
              <h2 className="text-2xl font-bold">Welcome Back</h2>
              <input type="email" placeholder="Email" required className="w-full p-3 border border-gray-300 rounded-md" />
              <input type="password" placeholder="Password" required className="w-full p-3 border border-gray-300 rounded-md" />
              <button type="submit" className="w-full bg-[royalblue] text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition">
                Login
              </button>
            </form>

            
            <form className="w-1/2 p-8 space-y-6">
              
              <div className="flex justify-between gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-2 rounded-full ${s <= step ? "bg-[royalblue]" : "bg-gray-200"}`}
                  />
                ))}
              </div>
              <h2 className="text-2xl font-bold text-center">Create an Account</h2>

              {step === 1 && (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={personal.first}
                    onChange={(e) => setPersonal({ ...personal, first: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={personal.last}
                    onChange={(e) => setPersonal({ ...personal, last: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  <input
                    type="date"
                    value={personal.dob}
                    onChange={(e) => setPersonal({ ...personal, dob: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  <div className="flex gap-4 text-sm text-gray-700">
                    {["Male", "Female", "Other"].map((g) => (
                      <label key={g} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          checked={personal.gender === g}
                          onChange={() => setPersonal({ ...personal, gender: g })}
                        />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={contact.mobile}
                    onChange={(e) => setContact({ ...contact, mobile: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 text-sm">
                  <input
                    type="email"
                    placeholder="Re-enter Email for Verification"
                    value={confirm.verifyEmail}
                    onChange={(e) => setConfirm({ ...confirm, verifyEmail: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      checked={confirm.accepted}
                      onChange={(e) => setConfirm({ ...confirm, accepted: e.target.checked })}
                      className="mt-1"
                    />
                    I accept that the entire details are real.
                  </label>
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      checked={confirm.confirmed}
                      onChange={(e) => setConfirm({ ...confirm, confirmed: e.target.checked })}
                      className="mt-1"
                    />
                    I confirm all the details sent are correct.
                  </label>
                </div>
              )}

        
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="text-sm text-gray-600"
                  disabled={step === 1}
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                >
                  Back
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    disabled={!canGoNext()}
                    className={`py-2 px-6 rounded-md font-semibold transition ${
                      canGoNext()
                        ? "bg-[royalblue] text-white hover:bg-blue-800"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={() => canGoNext() && setStep((s) => Math.min(3, s + 1))}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canGoNext()}
                    className={`py-2 px-6 rounded-md font-semibold transition ${
                      canGoNext()
                        ? "bg-[royalblue] text-white hover:bg-blue-800"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Register
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;