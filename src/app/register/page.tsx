'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';

export default function Register() {
  const [formData, setFormData] = useState({
    // Personal Details
    age: '',
    gender: '',
    height: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',

    // Health Background
    medicalConditions: '',
    medications: '',
    allergies: '',
    surgeries: '',
    familyHistory: '',

    // Fitness History
    activityLevel: '',
    exerciseExperience: '',
    exerciseTypes: '',
    pastInjuries: '',

    // Body Measurements
    bodyFatPercent: '',
    waistCircumference: '',
    hipCircumference: '',
    clothingSizes: '',

    // Lifestyle Factors
    dailySteps: '',
    sleepQuality: '',
    sleepDuration: '',
    stressLevels: '',
    occupation: '',
    alcoholUse: '',
    tobaccoUse: '',

    // Dietary Information
    eatingHabits: '',
    foodPreferences: '',
    foodRestrictions: '',
    waterIntake: '',
    supplements: '',

    // Specific Goals
    goal: '',
    targetWeight: '',
    targetBodyFat: '',
    timeline: '',
    specificEvents: '',
    performanceGoals: '',

    // Preferences & Limitations
    preferredTimes: '',
    availableEquipment: '',
    workoutAvailability: '',
    exercisePreferences: '',

    // Motivation & Mindset
    pastChallenges: '',
    biggestChallenges: '',
    supportSystem: '',
    motivationReason: '',

    // Note: 'calories', 'currentWeight' from original form
    currentWeight: '',
    calories: '',
    weightGoal: 'gain' // burn or gain
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.height) newErrors.height = 'Height is required';
    if (!formData.contactEmail) newErrors.contactEmail = 'Email is required';
    if (!formData.contactPhone) newErrors.contactPhone = 'Phone is required';
    if (!formData.goal) newErrors.goal = 'Goal is required';
    if (!formData.currentWeight) newErrors.currentWeight = 'Current weight is required';
    if (!formData.weightGoal) newErrors.weightGoal = 'Weight goal is required';
    if (!formData.calories) newErrors.calories = 'Calories is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Submit data (for now, just log)
    console.log('Form Data:', formData);
    setSubmitted(true);
    // You can add API call here
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main>
          <section className="section text-center">
            <div className="container">
              <h1 className="h1">Registration Successful!</h1>
              <p>Your information has been submitted. We will contact you soon to start your fitness journey.</p>
            </div>
          </section>
        </main>
        <Footer />
        <BackToTop />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <h2 className="h2 section-title text-center">Register for Personal Training</h2>
            <form onSubmit={handleSubmit} className="register-form">
              {/* Personal Details */}
              <fieldset>
                <legend className="h3">Personal Details</legend>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="input-field"
                  />
                  {errors.age && <span className="error">{errors.age}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <span className="error">{errors.gender}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="height">Height (cm)</label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="input-field"
                  />
                  {errors.height && <span className="error">{errors.height}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="currentWeight">Current Weight (kg)</label>
                  <input
                    type="number"
                    id="currentWeight"
                    name="currentWeight"
                    value={formData.currentWeight}
                    onChange={handleChange}
                    className="input-field"
                  />
                  {errors.currentWeight && <span className="error">{errors.currentWeight}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="contactEmail">Email</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    className="input-field"
                  />
                  {errors.contactEmail && <span className="error">{errors.contactEmail}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="contactPhone">Phone</label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className="input-field"
                  />
                  {errors.contactPhone && <span className="error">{errors.contactPhone}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="weightGoal">Weight Goal</label>
                  <select
                    id="weightGoal"
                    name="weightGoal"
                    value={formData.weightGoal}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="gain">Gain Weight</option>
                    <option value="burn">Burn Weight</option>
                  </select>
                  {errors.weightGoal && <span className="error">{errors.weightGoal}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="calories">Daily Calories Goal</label>
                  <input
                    type="number"
                    id="calories"
                    name="calories"
                    value={formData.calories}
                    onChange={handleChange}
                    className="input-field"
                  />
                  {errors.calories && <span className="error">{errors.calories}</span>}
                </div>
              </fieldset>

              {/* Health Background */}
              <fieldset>
                <legend className="h3">Health Background</legend>
                <div className="form-group">
                  <label htmlFor="medicalConditions">Medical Conditions</label>
                  <textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., heart issues, diabetes, injuries"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="medications">Current Medications</label>
                  <textarea
                    id="medications"
                    name="medications"
                    value={formData.medications}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="allergies">Allergies</label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="surgeries">Previous Surgeries or Injuries</label>
                  <textarea
                    id="surgeries"
                    name="surgeries"
                    value={formData.surgeries}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="familyHistory">Family Medical History</label>
                  <textarea
                    id="familyHistory"
                    name="familyHistory"
                    value={formData.familyHistory}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </fieldset>

              {/* Fitness History */}
              <fieldset>
                <legend className="h3">Fitness History</legend>
                <div className="form-group">
                  <label htmlFor="activityLevel">Current Activity Level</label>
                  <select
                    id="activityLevel"
                    name="activityLevel"
                    value={formData.activityLevel}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select Level</option>
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Light</option>
                    <option value="moderate">Moderate</option>
                    <option value="active">Active</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exerciseExperience">Exercise Experience</label>
                  <textarea
                    id="exerciseExperience"
                    name="exerciseExperience"
                    value={formData.exerciseExperience}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exerciseTypes">Types of Exercise Familiar With</label>
                  <textarea
                    id="exerciseTypes"
                    name="exerciseTypes"
                    value={formData.exerciseTypes}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., cardio, strength, yoga"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pastInjuries">Past Injuries Related to Exercise</label>
                  <textarea
                    id="pastInjuries"
                    name="pastInjuries"
                    value={formData.pastInjuries}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </fieldset>

              {/* Body Measurements */}
              <fieldset>
                <legend className="h3">Body Measurements</legend>
                <div className="form-group">
                  <label htmlFor="bodyFatPercent">Body Fat Percentage (if known)</label>
                  <input
                    type="number"
                    id="bodyFatPercent"
                    name="bodyFatPercent"
                    value={formData.bodyFatPercent}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="%"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="waistCircumference">Waist Circumference (cm)</label>
                  <input
                    type="number"
                    id="waistCircumference"
                    name="waistCircumference"
                    value={formData.waistCircumference}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="hipCircumference">Hip Circumference (cm)</label>
                  <input
                    type="number"
                    id="hipCircumference"
                    name="hipCircumference"
                    value={formData.hipCircumference}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="clothingSizes">Current Clothing Sizes</label>
                  <input
                    type="text"
                    id="clothingSizes"
                    name="clothingSizes"
                    value={formData.clothingSizes}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </fieldset>

              {/* Lifestyle Factors */}
              <fieldset>
                <legend className="h3">Lifestyle Factors</legend>
                <div className="form-group">
                  <label htmlFor="dailySteps">Daily Step Count Average</label>
                  <input
                    type="number"
                    id="dailySteps"
                    name="dailySteps"
                    value={formData.dailySteps}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sleepQuality">Sleep Quality (1-10)</label>
                  <input
                    type="number"
                    id="sleepQuality"
                    name="sleepQuality"
                    value={formData.sleepQuality}
                    onChange={handleChange}
                    className="input-field"
                    min="1"
                    max="10"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sleepDuration">Sleep Duration (hours)</label>
                  <input
                    type="number"
                    id="sleepDuration"
                    name="sleepDuration"
                    value={formData.sleepDuration}
                    onChange={handleChange}
                    className="input-field"
                    step="0.5"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="stressLevels">Stress Levels (1-10)</label>
                  <input
                    type="number"
                    id="stressLevels"
                    name="stressLevels"
                    value={formData.stressLevels}
                    onChange={handleChange}
                    className="input-field"
                    min="1"
                    max="10"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="occupation">Occupation</label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="desk job, physical labor, etc."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="alcoholUse">Alcohol Use</label>
                  <textarea
                    id="alcoholUse"
                    name="alcoholUse"
                    value={formData.alcoholUse}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tobaccoUse">Tobacco Use</label>
                  <textarea
                    id="tobaccoUse"
                    name="tobaccoUse"
                    value={formData.tobaccoUse}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </fieldset>

              {/* Dietary Information */}
              <fieldset>
                <legend className="h3">Dietary Information</legend>
                <div className="form-group">
                  <label htmlFor="eatingHabits">Current Eating Habits</label>
                  <textarea
                    id="eatingHabits"
                    name="eatingHabits"
                    value={formData.eatingHabits}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="foodPreferences">Food Preferences</label>
                  <textarea
                    id="foodPreferences"
                    name="foodPreferences"
                    value={formData.foodPreferences}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="foodRestrictions">Food Restrictions</label>
                  <textarea
                    id="foodRestrictions"
                    name="foodRestrictions"
                    value={formData.foodRestrictions}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="waterIntake">Water Intake (liters per day)</label>
                  <input
                    type="number"
                    id="waterIntake"
                    name="waterIntake"
                    value={formData.waterIntake}
                    onChange={handleChange}
                    className="input-field"
                    step="0.1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="supplements">Supplement Use</label>
                  <textarea
                    id="supplements"
                    name="supplements"
                    value={formData.supplements}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </fieldset>

              {/* Specific Goals */}
              <fieldset>
                <legend className="h3">Specific Goals</legend>
                <div className="form-group">
                  <label htmlFor="goal">Overall Goal</label>
                  <textarea
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="input-field"
                  />
                  {errors.goal && <span className="error">{errors.goal}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="targetWeight">Target Weight (kg)</label>
                  <input
                    type="number"
                    id="targetWeight"
                    name="targetWeight"
                    value={formData.targetWeight}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="targetBodyFat">Target Body Fat (%)</label>
                  <input
                    type="number"
                    id="targetBodyFat"
                    name="targetBodyFat"
                    value={formData.targetBodyFat}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="timeline">Timeline for Goals</label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., 3 months"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="specificEvents">Specific Events (e.g., marathon, wedding)</label>
                  <textarea
                    id="specificEvents"
                    name="specificEvents"
                    value={formData.specificEvents}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="performanceGoals">Performance Goals (e.g., lift X weight)</label>
                  <textarea
                    id="performanceGoals"
                    name="performanceGoals"
                    value={formData.performanceGoals}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </fieldset>

              {/* Preferences & Limitations */}
              <fieldset>
                <legend className="h3">Preferences & Limitations</legend>
                <div className="form-group">
                  <label htmlFor="preferredTimes">Preferred Workout Times</label>
                  <textarea
                    id="preferredTimes"
                    name="preferredTimes"
                    value={formData.preferredTimes}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="availableEquipment">Available Equipment</label>
                  <textarea
                    id="availableEquipment"
                    name="availableEquipment"
                    value={formData.availableEquipment}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="gym access, home equipment"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="workoutAvailability">Time Availability for Workouts</label>
                  <textarea
                    id="workoutAvailability"
                    name="workoutAvailability"
                    value={formData.workoutAvailability}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exercisePreferences">Exercise Preferences</label>
                  <textarea
                    id="exercisePreferences"
                    name="exercisePreferences"
                    value={formData.exercisePreferences}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="cardio vs. strength, indoor vs. outdoor"
                  />
                </div>
              </fieldset>

              {/* Motivation & Mindset */}
              <fieldset>
                <legend className="h3">Motivation & Mindset</legend>
                <div className="form-group">
                  <label htmlFor="pastChallenges">What Has/Hasn't Worked in the Past</label>
                  <textarea
                    id="pastChallenges"
                    name="pastChallenges"
                    value={formData.pastChallenges}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="biggestChallenges">Biggest Challenges</label>
                  <textarea
                    id="biggestChallenges"
                    name="biggestChallenges"
                    value={formData.biggestChallenges}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="supportSystem">Support System</label>
                  <textarea
                    id="supportSystem"
                    name="supportSystem"
                    value={formData.supportSystem}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="motivationReason">Why Now?</label>
                  <textarea
                    id="motivationReason"
                    name="motivationReason"
                    value={formData.motivationReason}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </fieldset>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 justify-items-center">
                <button type="submit" className="btn btn-primary text-xs py-0.5 px-1">Submit Registration</button>
                <a href="/admin-demo" className="btn btn-secondary text-xs py-0.5 px-1" style={{backgroundColor: '#dc2626', color: 'white'}}>Admin Demo</a>
                <a href="/user-demo" className="btn btn-secondary text-xs py-0.5 px-1" style={{backgroundColor: '#dc2626', color: 'white'}}>User Demo</a>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
