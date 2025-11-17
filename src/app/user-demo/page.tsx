'use client'

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/user-dashboard.css';

const dailyWeightData = [
  { day: 'Day 1', weight: 70.5 },
  { day: 'Day 2', weight: 70.1 },
  { day: 'Day 3', weight: 69.8 },
  { day: 'Day 4', weight: 69.5 },
  { day: 'Day 5', weight: 69.2 },
  { day: 'Day 6', weight: 68.9 },
  { day: 'Day 7', weight: 68.6 },
];

const consistencyData = [
  { day: 1, actual: 1, target: 1 }, { day: 2, actual: 1, target: 1 }, { day: 3, actual: 0, target: 1 },
  { day: 4, actual: 1, target: 1 }, { day: 5, actual: 1, target: 1 }, { day: 6, actual: 1, target: 1 },
  { day: 7, actual: 0, target: 1 }, { day: 8, actual: 1, target: 1 }, { day: 9, actual: 1, target: 1 },
  { day: 10, actual: 0, target: 1 }, { day: 11, actual: 1, target: 1 }, { day: 12, actual: 1, target: 1 },
  { day: 13, actual: 1, target: 1 }, { day: 14, actual: 0, target: 1 }, { day: 15, actual: 1, target: 1 },
  { day: 16, actual: 1, target: 1 }, { day: 17, actual: 0, target: 1 }, { day: 18, actual: 1, target: 1 },
  { day: 19, actual: 1, target: 1 }, { day: 20, actual: 0, target: 1 }, { day: 21, actual: 1, target: 1 },
  { day: 22, actual: 1, target: 1 }, { day: 23, actual: 1, target: 1 }, { day: 24, actual: 0, target: 1 },
  { day: 25, actual: 1, target: 1 }, { day: 26, actual: 1, target: 1 }, { day: 27, actual: 0, target: 1 },
  { day: 28, actual: 1, target: 1 }, { day: 29, actual: 1, target: 1 }, { day: 30, actual: 1, target: 1 },
];

const calorieData = [
  { day: 'Mon', calories: 1800 },
  { day: 'Tue', calories: 1950 },
  { day: 'Wed', calories: 2100 },
  { day: 'Thu', calories: 2000 },
  { day: 'Fri', calories: 2200 },
];

const macroData = [
  { name: 'Protein', value: 25, color: '#ff7f50' },
  { name: 'Carbohydrates', value: 50, color: '#32cd32' },
  { name: 'Fat', value: 25, color: '#1e90ff' },
];

const COLORS = ['#ff7f50', '#32cd32', '#1e90ff'];

const insightData = [
  { name: 'Calories', target: 2000, actual: 1950 },
  { name: 'Protein', target: 150, actual: 160 },
  { name: 'Water', target: 8, actual: 7 },
];

export default function UserDemo() {
  const [profileSettings, setProfileSettings] = useState<{
    name: string;
    email: string;
    phone: string;
    notifications: boolean;
    profilePic: string | null;
  }>({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    notifications: false,
    profilePic: null
  });

  const [experienceLevel, setExperienceLevel] = useState('beginner');
  const [gender, setGender] = useState('male');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSettingsChange = (field: string, value: any) => {
    setProfileSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleTaskComplete = (taskName: string) => {
    setCompletedTasks(prev => [...prev, taskName]);
  };

  const handleTaskUndo = (taskName: string) => {
    setCompletedTasks(prev => prev.filter(task => task !== taskName));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileSettings(prev => ({ ...prev, profilePic: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTodayTasks = () => {
    const tasks = [];

    if (gender === 'male') {
      if (experienceLevel === 'beginner') {
        tasks.push(
          { id: 'warm-up', name: '5-minute warm-up', emoji: '🏃' },
          { id: 'bodyweight-squats', name: 'Bodyweight squats', emoji: '💪' },
          { id: 'push-ups', name: 'Push-ups (modified)', emoji: '✋' },
          { id: 'walking-steps', name: 'Walking 5000 steps', emoji: '🚶' }
        );
      } else if (experienceLevel === 'intermediate') {
        tasks.push(
          { id: 'cardio-run', name: 'Cardio: 20-minute run', emoji: '🏃' },
          { id: 'bench-press', name: 'Weights: Bench press', emoji: '🏋️' },
          { id: 'planks', name: 'Core: Planks', emoji: '🏆' },
          { id: 'track-macros', name: 'Track macros', emoji: '📊' }
        );
      } else if (experienceLevel === 'advanced') {
        tasks.push(
          { id: 'hiit-workout', name: 'HIIT workout', emoji: '⚡' },
          { id: 'deadlifts', name: 'Deadlifts', emoji: '🏋️' },
          { id: 'cross-training', name: 'Cross-training', emoji: '🔄' },
          { id: 'protein-optimization', name: 'Protein optimization', emoji: '💊' }
        );
      } else if (experienceLevel === 'expert') {
        tasks.push(
          { id: 'powerlifting-session', name: 'Powerlifting session', emoji: '🏋️' },
          { id: 'metabolic-conditioning', name: 'Metabolic conditioning', emoji: '⚡' },
          { id: 'recovery-protocols', name: 'Recovery protocols', emoji: '🛏️' },
          { id: 'advanced-form-coaching', name: 'Advanced form coaching', emoji: '📹' }
        );
      }
    } else { // female
      if (experienceLevel === 'beginner') {
        tasks.push(
          { id: 'yoga-stretches', name: 'Yoga stretches', emoji: '🧘' },
          { id: 'march-in-place', name: 'March in place', emoji: '🏃' },
          { id: 'drink-water', name: 'Drink 8 glasses of water', emoji: '💧' },
          { id: 'mindfulness-meditation', name: 'Mindfulness meditation', emoji: '🙏' }
        );
      } else if (experienceLevel === 'intermediate') {
        tasks.push(
          { id: 'pilates-workout', name: 'Pilates workout', emoji: '🧘' },
          { id: 'light-cardio-dance', name: 'Light cardio dance', emoji: '💃' },
          { id: 'meal-prep-planning', name: 'Meal prep planning', emoji: '🍳' },
          { id: 'flexibility-training', name: 'Flexibility training', emoji: '🤸' }
        );
      } else if (experienceLevel === 'advanced') {
        tasks.push(
          { id: 'strength-circuit', name: 'Strength circuit', emoji: '💪' },
          { id: 'yoga-flow', name: 'Yoga flow', emoji: '🧘' },
          { id: 'calisthenics', name: 'Calisthenics', emoji: '🤸' },
          { id: 'hormone-tracking', name: 'Hormone tracking', emoji: '🌙' }
        );
      } else if (experienceLevel === 'expert') {
        tasks.push(
          { id: 'elite-fitness-programs', name: 'Elite fitness programs', emoji: '🏆' },
          { id: 'injury-prevention', name: 'Injury prevention', emoji: '🩺' },
          { id: 'mentor-coaching', name: 'Mentor coaching', emoji: '👩‍🏫' },
          { id: 'peak-performance', name: 'Peak performance', emoji: '🌟' }
        );
      }
    }

    return tasks;
  };

  return (
    <>
      {/* Responsive User Dashboard Navbar */}
      <header className="user-dashboard-navbar">
        <div className="user-navbar-container">
          <a href="/" className="user-logo">
            {React.createElement('ion-icon', { name: 'barbell-sharp', 'aria-hidden': true })}
            <span>UserDashboard</span>
          </a>

          <button
            className={`user-nav-open-btn ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="user-line"></div>
            <div className="user-line"></div>
            <div className="user-line"></div>
          </button>

          <div className={`user-navbar-menu ${menuOpen ? 'active' : ''}`}>
            <button
              className="user-nav-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              {React.createElement('ion-icon', { name: 'close-sharp' })}
            </button>

            <a href="/leader-dashboard" className="user-navbar-link" onClick={() => setMenuOpen(false)}>
              🏆 Leader Dashboard
            </a>
            <a href="/admin-demo" className="user-navbar-link" onClick={() => setMenuOpen(false)}>
              ⚙️ Admin Demo
            </a>
            <a href="/account" className="user-navbar-link" onClick={() => setMenuOpen(false)}>
              👤 Profile
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="section pt-20 bg-black">
          <div className="container">
            <h1 className="h1 section-title text-center" style={{ color: 'black', fontSize: '3rem', fontWeight: 900 }}>User Dashboard Demo</h1>

            {/* Main Content */}
            <div className="dashboard-main">
              {/* Charts Section */}
              <div className="dashboard-section mb-8">
                <h2 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Progress Charts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-5" style={{gap: '40px'}}>
                  <div className="dashboard-section">
                    <h3 style={{fontSize: '1.125rem', fontWeight: '600'}}>Weight Progress</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={dailyWeightData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`${value} kg`, 'Weight']} />
                        <Line type="monotone" dataKey="weight" stroke="#ff0000" strokeWidth={2} dot={{ fill: '#ff0000', strokeWidth: 2, r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="dashboard-section">
                    <h3 style={{fontSize: '1.125rem', fontWeight: '600'}}>Workout Consistency</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={consistencyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="actual" stroke="#32cd32" strokeWidth={2} name="Workouts Completed" />
                        <Line type="monotone" dataKey="target" stroke="#1e90ff" strokeWidth={2} strokeDasharray="5 5" name="Daily Target" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="dashboard-section">
                    <h3 style={{fontSize: '1.125rem', fontWeight: '600'}}>Calorie Intake</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={calorieData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="calories" fill="#1e90ff" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="dashboard-section">
                    <h3 style={{fontSize: '1.125rem', fontWeight: '600'}}>Macro Nutrients</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={macroData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => percent !== undefined ? `${name} ${(percent * 100).toFixed(0)}%` : name}
                        >
                          {macroData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="dashboard-section">
                    <h3 style={{fontSize: '1.125rem', fontWeight: '600'}}>Insights</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={insightData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="target" fill="#8884d8" name="Target" />
                        <Bar dataKey="actual" fill="#82ca9d" name="Actual" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Tracker Settings */}
              <div className="dashboard-section mb-8" style={{backgroundColor: '#f8f9fa', padding: '24px', borderRadius: '12px', border: '1px solid #e9ecef'}}>
                <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#495057'}}>Tracker Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold mb-3" style={{color: '#6c757d'}}>Experience Level</label>
                    <select
                      id="experience"
                      value={experienceLevel}
                      onChange={(e) => setExperienceLevel(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        backgroundColor: 'white',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#495057',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#007bff'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    >
                      <option value="beginner">New Beginner (0-1 years)</option>
                      <option value="intermediate">1-3 Years</option>
                      <option value="advanced">4-6 Years</option>
                      <option value="expert">7-10 Years</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-sm font-semibold mb-3" style={{color: '#6c757d'}}>Gender</label>
                    <select
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        backgroundColor: 'white',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#495057',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#007bff'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                {/* Calendar Card with Daily Tasks */}
                <div className="daily-task-tracker">
                  <div className="tracker-header">
                    <div className="calendar-icon">📅</div>
                    <h3 className="tracker-title">Daily Task Tracker</h3>
                    <p className="tracker-subtitle">
                      {getCurrentDate()}
                    </p>
                    <p className="tracker-level">
                      Level: {experienceLevel.charAt(0).toUpperCase() + experienceLevel.slice(1)} • {gender.charAt(0).toUpperCase() + gender.slice(1)}
                    </p>
                  </div>

                  <div className="task-list">
                    {getTodayTasks().map((task) => (
                      <div key={task.id} className={`task-item ${completedTasks.includes(task.id) ? 'completed' : ''}`}>
                        <div className="task-content mobile">
                          <span className="task-emoji">{task.emoji}</span>
                          <div className="task-details">
                            <a
                              href={`/${task.id}`}
                              className="task-link"
                            >
                              {task.name}
                            </a>
                            <div className="task-description mobile">
                              Tap to learn more
                            </div>
                            <div className="task-description desktop">
                              Click to learn more
                            </div>
                          </div>
                        </div>

                        <div className="task-actions">
                          {completedTasks.includes(task.id) && (
                            <>
                              <span className="task-status">✅ Done</span>
                              <button
                                onClick={() => handleTaskUndo(task.id)}
                                className="undo-button"
                                title="Undo completion"
                              >
                                Undo
                              </button>
                            </>
                          )}
                          {!completedTasks.includes(task.id) && (
                            <>
                              <button
                                onClick={() => handleTaskComplete(task.id)}
                                className="task-button"
                              >
                                Mark Done
                              </button>
                              <span className="task-status not-done">❌ Not Done</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{textAlign: 'center'}}>
                    <div className="progress-summary">
                      <p className="progress-text mobile">
                        <span className="progress-number">{completedTasks.length}</span> of{' '}
                        <span className="progress-number">{getTodayTasks().length}</span>{' '}
                        done
                      </p>
                      <p className="progress-text desktop">
                        <span className="progress-number">{completedTasks.length}</span> of{' '}
                        <span className="progress-number">{getTodayTasks().length}</span>{' '}
                        tasks completed
                      </p>
                    </div>
                  </div>
                </div>








              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
