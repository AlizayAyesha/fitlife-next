"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from 'react';

const MaleBeginnerTasks = () => {
  // Get current date
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // State for tracking task completion
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const dailyTasks = [
    {
      id: "5-min-warmup",
      icon: "🏃",
      name: "5-minute warm-up",
      duration: "5 minutes",
      description: "Dynamic movements to prepare your body and mind for exercise",
      detailsPage: "/male-beginner-tasks/5-minute-warm-up"
    },
    {
      id: "bodyweight-squats",
      icon: "💪",
      name: "Bodyweight squats",
      duration: "2-3 sets of 8-12 reps",
      description: "Stand with feet shoulder-width apart, lower as if sitting back into a chair, then stand up",
      detailsPage: "/male-beginner-tasks/bodyweight-squats"
    },
    {
      id: "push-ups",
      icon: "✋",
      name: "Push-ups (modified)",
      duration: "2-3 sets of 6-10 reps",
      description: "Start on knees if needed, or do wall push-ups. Lower chest toward ground, then push back up",
      detailsPage: "/male-beginner-tasks/push-ups"
    },
    {
      id: "walking",
      icon: "🚶",
      name: "Walking 5000 steps",
      duration: "45-60 minutes",
      description: "Brisk walking to build cardiovascular endurance and burn calories",
      detailsPage: "/male-beginner-tasks/walking-5000-steps"
    }
  ];

  const toggleTaskCompletion = (taskId: string) => {
    setCompletedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };

  const completedCount = completedTasks.size;
  const totalTasks = dailyTasks.length;

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Daily Task Tracker Header */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  📅 Daily Task Tracker
                </h1>
                <p className="text-lg text-gray-600 mb-1">{formattedDate}</p>
                <p className="text-sm text-gray-500 font-medium">Level: Beginner • Male</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">{completedCount}</p>
                <p className="text-sm text-gray-500">of {totalTasks} tasks completed</p>
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="space-y-4">
            {dailyTasks.map((task) => (
              <div key={task.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-3xl">{task.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">{task.name}</h3>
                      <p className="text-gray-600 mb-2">{task.description}</p>
                      <p className="text-sm font-medium text-blue-600">{task.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href={task.detailsPage}
                      className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline"
                    >
                      Click to learn more about this task
                    </Link>
                    <button
                      onClick={() => toggleTaskCompletion(task.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        completedTasks.has(task.id)
                          ? 'bg-green-500 text-white hover:bg-green-600'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      {completedTasks.has(task.id) ? '✅ Mark Done' : '❌ Not Done'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6 mt-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Progress Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              {dailyTasks.map((task) => (
                <div key={task.id} className="flex items-center gap-2">
                  <span className="text-2xl">{task.icon}</span>
                  <div>
                    <p className="font-medium text-sm">{task.name}</p>
                    <p className={`text-xs ${completedTasks.has(task.id) ? 'text-green-600' : 'text-red-500'}`}>
                      {completedTasks.has(task.id) ? '✓ Complete' : '○ Incomplete'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                Keep up the great work! Consistency is key for building healthy habits. 💪
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Advance Your Fitness Journey?</h3>
              <p className="text-lg mb-6">
                Great job completing today's tasks! Every consistent step brings you closer to your goals.
                Tomorrow's challenges await with even more growth opportunities.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="/"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Back to Home
                </Link>
                <Link
                  href="/male-beginner-tasks"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  View All Tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MaleBeginnerTasks;
