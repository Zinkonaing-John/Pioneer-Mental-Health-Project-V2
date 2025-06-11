"use client";

import React, { useState } from "react";

const StudentSurvey = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => step < 3 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  const getProgress = () => (step / 3) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eaf6f8]">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold  text-black mb-2">
          Student Mental Health Survey
        </h1>
        <p className="mb-4 text-sm text-gray-600">
          This survey aims to assess mental health factors among college
          students. Your responses will help develop personalized VR/AI support
          systems.
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-purple-500 h-2 rounded-full"
            style={{ width: `${getProgress()}%` }}
          />
        </div>

        {/* Step Tabs */}
        <div className="flex justify-between mb-6">
          {["Personal Information", "Academic Stress", "Lifestyle Factors"].map(
            (label, i) => (
              <button
                key={label}
                className={`px-4 py-2 text-sm font-semibold rounded ${step === i + 1 ? "bg-purple-600 text-white" : "text-gray-500"}`}
                onClick={() => setStep(i + 1)}
              >
                {label}
              </button>
            )
          )}
        </div>

        {/* Step Forms */}
        <div className="space-y-4">
          {step === 1 && (
            <>
              <input
                placeholder="Student ID (Optional)"
                className="w-full border p-2 rounded"
              />
              <div>
                <label className="block font-semibold  text-black mb-1">
                  Age Group
                </label>
                <div className="flex gap-4  text-black">
                  {["18–20", "21–23", "24–26", "27+"].map((age) => (
                    <label key={age}>
                      <input type="checkbox" className="mr-1" /> {age} years
                    </label>
                  ))}
                </div>
              </div>
              <select className="w-full border p-2 rounded">
                <option>Select your year</option>
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
              </select>
              <input
                placeholder="Department/Major"
                className="w-full border p-2 rounded"
              />
              <div>
                <label className="block font-semibold  text-black">
                  Gender Identity
                </label>
                <div className="grid grid-cols-2 gap-2  text-black">
                  {["Male", "Female", "Non-binary", "Prefer not to say"].map(
                    (g) => (
                      <label key={g}>
                        <input type="checkbox" className="mr-1" /> {g}
                      </label>
                    )
                  )}
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-2  text-black">
                <label>How would you rate your current course load?</label>
                <div className="flex justify-between  text-black">
                  {[
                    "Very Light",
                    "Light",
                    "Moderate",
                    "Heavy",
                    "Very Heavy",
                  ].map((val) => (
                    <label key={val}>
                      <input type="radio" name="load" /> {val}
                    </label>
                  ))}
                </div>

                <label>How often do you feel overwhelmed by deadlines?</label>
                <div className="flex justify-between">
                  {["Never", "Rarely", "Sometimes", "Often", "Always"].map(
                    (val) => (
                      <label key={val}>
                        <input type="radio" name="deadlines" /> {val}
                      </label>
                    )
                  )}
                </div>

                <label>Rate your anxiety before exams:</label>
                <div className="flex justify-between ">
                  {["Very Low", "Low", "Moderate", "High", "Very High"].map(
                    (val) => (
                      <label key={val}>
                        <input type="radio" name="anxiety" /> {val}
                      </label>
                    )
                  )}
                </div>

                <label>
                  How concerned are you about your academic performance?
                </label>
                <div className="flex justify-between">
                  {[
                    "Not at all",
                    "Slightly",
                    "Moderately",
                    "Very",
                    "Extremely",
                  ].map((val) => (
                    <label key={val}>
                      <input type="radio" name="performance" /> {val}
                    </label>
                  ))}
                </div>

                <textarea
                  placeholder="What are your biggest academic challenges? (Optional)"
                  className="w-full border p-2 rounded"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <select className="w-full border p-2 rounded  text-black">
                <option>Select hours of sleep</option>
                <option>Less than 4</option>
                <option>4–6</option>
                <option>6–8</option>
                <option>8+</option>
              </select>

              <label className="block font-semibold mt-2  text-black">
                How would you describe your sleep quality?
              </label>
              <div className="grid grid-cols-3 gap-2  text-black">
                {["Very poor", "Poor", "Fair", "Good", "Very good"].map(
                  (val) => (
                    <label key={val}>
                      <input type="checkbox" className="mr-1" /> {val}
                    </label>
                  )
                )}
              </div>

              <label className="block font-semibold mt-2  text-black">
                How often do you socialize?
              </label>
              <div className="flex justify-between  text-black">
                {["Never", "Rarely", "Sometimes", "Often", "Very Often"].map(
                  (val) => (
                    <label key={val}>
                      <input type="radio" name="social" /> {val}
                    </label>
                  )
                )}
              </div>

              <label className="block font-semibold mt-2  text-black">
                Who do you turn to for support? (Select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-2  text-black">
                {[
                  "Family",
                  "Friends",
                  "Partner/Spouse",
                  "Counselor/Therapist",
                  "Professor/Advisor",
                  "No one",
                ].map((val) => (
                  <label key={val}>
                    <input type="checkbox" className="mr-1" /> {val}
                  </label>
                ))}
              </div>

              <label className="block font-semibold mt-2  text-black ">
                Extracurricular activities
              </label>
              <div className="grid grid-cols-2 gap-2  text-black">
                {[
                  "Sports/Athletics",
                  "Clubs/Organizations",
                  "Volunteer Work",
                  "Part-time Job",
                  "None",
                ].map((val) => (
                  <label key={val}>
                    <input type="checkbox" className="mr-1" /> {val}
                  </label>
                ))}
              </div>

              <textarea
                placeholder="What strategies do you use to cope with stress? (Optional)"
                className="w-full border p-2 rounded mt-2"
              />
            </>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="bg-gray-200 px-4 py-2  text-black rounded"
            >
              Previous
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={nextStep}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => alert("Survey submitted!")}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Submit Survey
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentSurvey;
