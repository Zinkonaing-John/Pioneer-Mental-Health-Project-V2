"use client";

import React, { useState } from "react";

const ProfessorSurvey = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => step < 3 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);
  const getProgress = () => (step / 3) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eaf6f8]">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-black mb-2">
          Professor Mental Health Survey
        </h1>
        <p className="mb-4 text-sm text-gray-600">
          This survey aims to assess mental health factors among professors.
          Your responses will help develop personalized VR/AI support systems.
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
          {["Demographics", "Work Stress", "Support Systems"].map(
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
                placeholder="Professor ID (Optional)"
                className="w-full border p-2 rounded"
              />
              <div>
                <label className="block font-semibold text-black mb-1">
                  Age Group
                </label>
                <div className="flex gap-4">
                  {["25–34", "35–44", "45–54", "55+"].map((age) => (
                    <label
                      key={age}
                      className="text-black flex items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 bg-white"
                      />
                      {age} years
                    </label>
                  ))}
                </div>
              </div>
              <select className="w-full border p-2 rounded text-black">
                <option>Select your position</option>
                <option>Lecturer</option>
                <option>Assistant Professor</option>
                <option>Associate Professor</option>
                <option>Professor</option>
              </select>
              <input
                placeholder="Department"
                className="w-full border p-2 rounded"
              />
              <div>
                <label className="block font-semibold text-black mb-1">
                  Gender Identity
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Male", "Female", "Non-binary", "Prefer not to say"].map(
                    (g) => (
                      <label
                        key={g}
                        className="text-black flex items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 bg-white"
                        />
                        {g}
                      </label>
                    )
                  )}
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-4 text-black">
                <label className="block font-semibold text-black mb-1">
                  How would you rate your current teaching load?
                </label>
                <div className="flex justify-between">
                  {[
                    "Very Light",
                    "Light",
                    "Moderate",
                    "Heavy",
                    "Very Heavy",
                  ].map((val) => (
                    <label
                      key={val}
                      className="flex items-center gap-1 text-black"
                      style={{ color: "black" }}
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 bg-white"
                      />
                      {val}
                    </label>
                  ))}
                </div>

                <label className="block font-semibold text-black">
                  How often do you feel burnout symptoms?
                </label>
                <div className="flex justify-between">
                  {["Never", "Rarely", "Sometimes", "Often", "Always"].map(
                    (val) => (
                      <label
                        key={val}
                        className="flex items-center gap-1 text-black"
                      >
                        <input
                          type="radio"
                          name="burnout"
                          className="w-4 h-4 border border-gray-300 bg-white"
                        />
                        {val}
                      </label>
                    )
                  )}
                </div>

                <label className="block font-semibold">
                  Rate your stress level during grading season:
                </label>
                <div className="flex justify-between">
                  {["Very Low", "Low", "Moderate", "High", "Very High"].map(
                    (val) => (
                      <label
                        key={val}
                        className="flex items-center gap-1 text-black"
                      >
                        <input
                          type="radio"
                          name="gradingStress"
                          className="w-4 h-4 border border-gray-300 bg-white"
                        />
                        {val}
                      </label>
                    )
                  )}
                </div>

                <label className="block font-semibold">
                  How concerned are you about balancing teaching and research?
                </label>
                <div className="flex justify-between">
                  {[
                    "Not at all",
                    "Slightly",
                    "Moderately",
                    "Very",
                    "Extremely",
                  ].map((val) => (
                    <label
                      key={val}
                      className="flex items-center gap-1 text-black"
                    >
                      <input
                        type="radio"
                        name="balance"
                        className="w-4 h-4 border border-gray-300 bg-white"
                      />
                      {val}
                    </label>
                  ))}
                </div>

                <textarea
                  placeholder="What are your biggest work-related challenges? (Optional)"
                  className="w-full border p-2 rounded"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <select className="w-full border p-2 rounded text-black">
                <option>Select hours of sleep</option>
                <option>Less than 4</option>
                <option>4–6</option>
                <option>6–8</option>
                <option>8+</option>
              </select>

              <label className="block font-semibold mt-2">
                How would you describe your sleep quality?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Very poor", "Poor", "Fair", "Good", "Very good"].map(
                  (val) => (
                    <label
                      key={val}
                      className="flex items-center gap-1 text-black"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 bg-white"
                      />
                      {val}
                    </label>
                  )
                )}
              </div>

              <label className="block font-semibold mt-2">
                How often do you socialize with colleagues?
              </label>
              <div className="flex justify-between">
                {["Never", "Rarely", "Sometimes", "Often", "Very Often"].map(
                  (val) => (
                    <label
                      key={val}
                      className="flex items-center gap-1 text-black"
                    >
                      <input
                        type="radio"
                        name="social"
                        className="w-4 h-4 border border-gray-300 bg-white"
                      />
                      {val}
                    </label>
                  )
                )}
              </div>

              <label className="block font-semibold mt-2">
                Who do you turn to for support? (Select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Family",
                  "Friends",
                  "Partner/Spouse",
                  "Counselor/Therapist",
                  "Colleagues",
                  "No one",
                ].map((val) => (
                  <label
                    key={val}
                    className="flex items-center gap-1 text-black"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 bg-white"
                    />
                    {val}
                  </label>
                ))}
              </div>

              <label className="block font-semibold mt-2">
                Hobbies or recreational activities
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Reading", "Sports", "Art/Music", "Volunteering", "None"].map(
                  (val) => (
                    <label
                      key={val}
                      className="flex items-center gap-1 text-black"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 bg-white"
                      />
                      {val}
                    </label>
                  )
                )}
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
              className="bg-gray-200 px-4 py-2 text-black rounded"
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

export default ProfessorSurvey;
