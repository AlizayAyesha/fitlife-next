'use client'

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Sample data for admin analytics
const userGrowthData = [
  { month: 'Jan', users: 400, activeUsers: 240 },
  { month: 'Feb', users: 600, activeUsers: 380 },
  { month: 'Mar', users: 800, activeUsers: 520 },
  { month: 'Apr', users: 1200, activeUsers: 780 },
  { month: 'May', users: 1600, activeUsers: 1050 },
  { month: 'Jun', users: 2000, activeUsers: 1320 },
];

const revenueData = [
  { month: 'Jan', revenue: 4000, subscriptions: 240 },
  { month: 'Feb', revenue: 3000, subscriptions: 198 },
  { month: 'Mar', revenue: 5000, subscriptions: 320 },
  { month: 'Apr', revenue: 4500, subscriptions: 298 },
  { month: 'May', revenue: 6000, subscriptions: 420 },
  { month: 'Jun', revenue: 5500, subscriptions: 390 },
];

const programPerformanceData = [
  { program: 'Beginner Workouts', value: 85, fullMark: 100 },
  { program: 'Advanced Training', value: 92, fullMark: 100 },
  { program: 'Nutrition Plans', value: 78, fullMark: 100 },
  { program: 'Meditation & Mindfulness', value: 96, fullMark: 100 },
  { program: 'Yoga Flow', value: 88, fullMark: 100 },
  { program: 'Strength Circuit', value: 84, fullMark: 100 },
];

const contentStatsData = [
  { name: 'Fitness Guides', articles: 145, views: 8500 },
  { name: 'Workout Plans', articles: 89, views: 6200 },
  { name: 'Nutrition Tips', articles: 67, views: 4100 },
  { name: 'Success Stories', articles: 34, views: 2800 },
];

const statusColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function AdminDemo() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const sampleUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', joinDate: '2024-01-15', plan: 'Premium' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', joinDate: '2024-02-20', plan: 'Basic' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'Active', joinDate: '2024-01-08', plan: 'Pro' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', status: 'Active', joinDate: '2024-03-12', plan: 'Premium' },
    { id: 5, name: 'David Brown', email: 'david@example.com', status: 'Banned', joinDate: '2023-11-05', plan: 'Basic' },
  ];

  const handleUserAction = (action: string, userId: number) => {
    console.log(`${action} user ${userId}`);
    // Implement user management actions here
  };

  return (
    <>
      {/* Separate Navbar for Admin Dashboard */}
      <header className="admin-navbar">
        <div className="admin-navbar-container">
          <a href="/" className="admin-navbar-logo">
            {React.createElement('ion-icon', { name: 'barbell-sharp', 'aria-hidden': true })}
            <span>AdminPanel</span>
          </a>
          <div className="admin-navbar-menu">
            <a href="/leader-dashboard" className="admin-navbar-link">Leader Dashboard</a>
            <a href="/rollover-balance" className="admin-navbar-link">Rollover Balance</a>
            <a href="/banks-accounts" className="admin-navbar-link">Banks Accounts</a>
            <a href="/admin-demo" className="admin-navbar-link active">Admin Panel</a>
          </div>
        </div>
      </header>

      <main>
        <section className="admin-dashboard">
          <div className="container">
            <h1 className="admin-h1">Admin Dashboard</h1>

            {/* Quick Stats */}
            <div className="admin-stats-grid">
              <div className="admin-stat-card total-users">
                <div className="admin-stat-title">Total Users</div>
                <div className="admin-stat-value">2,847</div>
                <div className="admin-stat-change">+12.3% from last month</div>
              </div>
              <div className="admin-stat-card revenue">
                <div className="admin-stat-title">Revenue</div>
                <div className="admin-stat-value">$23,450</div>
                <div className="admin-stat-change">+8.1% from last month</div>
              </div>
              <div className="admin-stat-card active-sessions">
                <div className="admin-stat-title">Active Sessions</div>
                <div className="admin-stat-value">1,324</div>
                <div className="admin-stat-change">+15.7% from yesterday</div>
              </div>
              <div className="admin-stat-card content-items">
                <div className="admin-stat-title">Content Items</div>
                <div className="admin-stat-value">335</div>
                <div className="admin-stat-change">+5 new this week</div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="admin-tabs">
              <div className="admin-tab-bar">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`admin-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`admin-tab-btn ${activeTab === 'users' ? 'active' : ''}`}
                >
                  User Management
                </button>
                <button
                  onClick={() => setActiveTab('content')}
                  className={`admin-tab-btn ${activeTab === 'content' ? 'active' : ''}`}
                >
                  Content Management
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`admin-tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
                >
                  Analytics
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`admin-tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
                >
                  Settings
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="admin-tab-content">
              {activeTab === 'overview' && (
                <div>
                  <div className="admin-content-grid">
                    {/* User Growth Chart */}
                    <div className="admin-chart-card">
                      <h3 className="admin-chart-title">User Growth</h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={userGrowthData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Area type="monotone" dataKey="users" stackId="1" stroke="#8884d8" fill="#8884d8" />
                          <Area type="monotone" dataKey="activeUsers" stackId="2" stroke="#82ca9d" fill="#82ca9d" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Revenue Chart */}
                    <div className="admin-chart-card">
                      <h3 className="admin-chart-title">Revenue & Subscriptions</h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis yAxisId="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <Tooltip />
                          <Legend />
                          <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#ff7c7c" strokeWidth={3} name="Revenue ($)" />
                          <Line yAxisId="right" type="monotone" dataKey="subscriptions" stroke="#8dd1e1" strokeWidth={2} name="Subscriptions" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Program Performance Radar */}
                  <div className="admin-chart-card admin-full-width">
                    <h3 className="admin-chart-title">Program Performance Effectiveness</h3>
                    <ResponsiveContainer width="100%" height={400}>
                      <RadarChart data={programPerformanceData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="program" />
                        <PolarRadiusAxis angle={0} domain={[0, 100]} />
                        <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="h2" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>User Management</h2>
                  <div className="flex gap-2">
                    <button className="btn btn-primary" style={{backgroundColor: '#3182ce', color: 'white', padding: '8px 16px'}}>Export Users</button>
                    <button className="btn btn-secondary">Add New User</button>
                  </div>
                </div>

                <div className="dashboard-section">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead style={{backgroundColor: '#f7fafc'}}>
                        <tr>
                          <th className="px-4 py-3 text-left" style={{fontSize: '0.875rem', fontWeight: '600', color: '#4a5568'}}>Name</th>
                          <th className="px-4 py-3 text-left" style={{fontSize: '0.875rem', fontWeight: '600', color: '#4a5568'}}>Email</th>
                          <th className="px-4 py-3 text-left" style={{fontSize: '0.875rem', fontWeight: '600', color: '#4a5568'}}>Status</th>
                          <th className="px-4 py-3 text-left" style={{fontSize: '0.875rem', fontWeight: '600', color: '#4a5568'}}>Plan</th>
                          <th className="px-4 py-3 text-left" style={{fontSize: '0.875rem', fontWeight: '600', color: '#4a5568'}}>Join Date</th>
                          <th className="px-4 py-3 text-left" style={{fontSize: '0.875rem', fontWeight: '600', color: '#4a5568'}}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sampleUsers.map((user) => (
                          <tr key={user.id} style={{borderBottom: '1px solid #e2e8f0'}}>
                            <td className="px-4 py-4 whitespace-nowrap" style={{fontSize: '0.875rem', color: '#2d3748'}}>{user.name}</td>
                            <td className="px-4 py-4 whitespace-nowrap" style={{fontSize: '0.875rem', color: '#2d3748'}}>{user.email}</td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <span
                                style={{
                                  padding: '4px 8px',
                                  display: 'inline-flex',
                                  fontSize: '0.75rem',
                                  fontWeight: '600',
                                  borderRadius: '9999px',
                                  backgroundColor: user.status === 'Active' ? '#f0fff4' : user.status === 'Inactive' ? '#fffaf0' : '#fed7d7',
                                  color: user.status === 'Active' ? '#22543d' : user.status === 'Inactive' ? '#744210' : '#742a2a'
                                }}
                              >
                                {user.status}
                              </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap" style={{fontSize: '0.875rem', color: '#2d3748'}}>{user.plan}</td>
                            <td className="px-4 py-4 whitespace-nowrap" style={{fontSize: '0.875rem', color: '#2d3748'}}>{user.joinDate}</td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleUserAction('edit', user.id)}
                                  style={{
                                    fontSize: '0.875rem',
                                    color: '#3182ce',
                                    transition: 'color 0.3s ease',
                                    cursor: 'pointer',
                                    background: 'none',
                                    border: 'none'
                                  }}
                                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#2c5aa0'}
                                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#3182ce'}
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleUserAction('suspend', user.id)}
                                  style={{
                                    fontSize: '0.875rem',
                                    color: '#d69e2e',
                                    transition: 'color 0.3s ease',
                                    cursor: 'pointer',
                                    background: 'none',
                                    border: 'none'
                                  }}
                                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#b7791f'}
                                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#d69e2e'}
                                >
                                  Suspend
                                </button>
                                <button
                                  onClick={() => handleUserAction('delete', user.id)}
                                  style={{
                                    fontSize: '0.875rem',
                                    color: '#e53e3e',
                                    transition: 'color 0.3s ease',
                                    cursor: 'pointer',
                                    background: 'none',
                                    border: 'none'
                                  }}
                                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#c71111'}
                                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#e53e3e'}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="h2" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Content Management</h2>
                  <div className="flex gap-2">
                    <button className="btn btn-primary" style={{backgroundColor: '#3182ce', color: 'white', padding: '8px 16px'}}>Create Content</button>
                    <button className="btn btn-secondary">Import CSV</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="dashboard-section">
                    <h3 className="text-lg font-semibold mb-4" style={{color: '#2d3748', fontSize: '1.125rem', fontWeight: '600'}}>Content Statistics</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={contentStatsData}
                          dataKey="views"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                        >
                          {contentStatsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={statusColors[index % statusColors.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="dashboard-section">
                    <h3 className="text-lg font-semibold mb-4" style={{color: '#2d3748', fontSize: '1.125rem', fontWeight: '600'}}>Recent Activity</h3>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px'
                      }}>
                        <div>
                          <p style={{fontWeight: '500', color: '#2d3748'}}>New yoga tutorial published</p>
                          <p style={{fontSize: '0.875rem', color: '#4a5568'}}>2 hours ago</p>
                        </div>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#48bb78',
                          borderRadius: '50%'
                        }}></span>
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px'
                      }}>
                        <div>
                          <p style={{fontWeight: '500', color: '#2d3748'}}>User feedback moderation</p>
                          <p style={{fontSize: '0.875rem', color: '#4a5568'}}>4 hours ago</p>
                        </div>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#d69e2e',
                          borderRadius: '50%'
                        }}></span>
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px'
                      }}>
                        <div>
                          <p style={{fontWeight: '500', color: '#2d3748'}}>System backup completed</p>
                          <p style={{fontSize: '0.875rem', color: '#4a5568'}}>6 hours ago</p>
                        </div>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#3182ce',
                          borderRadius: '50%'
                        }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h2 className="h2 mb-6" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Detailed Analytics</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="dashboard-section">
                    <h3 className="text-lg font-semibold mb-4" style={{color: '#2d3748', fontSize: '1.125rem', fontWeight: '600'}}>User Engagement Metrics</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={userGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="activeUsers" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="dashboard-section">
                    <h3 className="text-lg font-semibold mb-4" style={{color: '#2d3748', fontSize: '1.125rem', fontWeight: '600'}}>System Performance</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span style={{color: '#4a5568'}}>Server Uptime</span>
                        <span style={{color: '#2d3748', fontWeight: '600'}}>99.8%</span>
                      </div>
                      <div style={{
                        width: '100%',
                        backgroundColor: '#e2e8f0',
                        borderRadius: '9999px',
                        height: '8px'
                      }}>
                        <div style={{
                          backgroundColor: '#48bb78',
                          height: '8px',
                          borderRadius: '9999px',
                          width: '99.8%'
                        }}></div>
                      </div>

                      <div className="flex justify-between">
                        <span style={{color: '#4a5568'}}>API Response Time</span>
                        <span style={{color: '#2d3748', fontWeight: '600'}}>120ms</span>
                      </div>
                      <div style={{
                        width: '100%',
                        backgroundColor: '#e2e8f0',
                        borderRadius: '9999px',
                        height: '8px'
                      }}>
                        <div style={{
                          backgroundColor: '#3182ce',
                          height: '8px',
                          borderRadius: '9999px',
                          width: '80%'
                        }}></div>
                      </div>

                      <div className="flex justify-between">
                        <span style={{color: '#4a5568'}}>Database Performance</span>
                        <span style={{color: '#2d3748', fontWeight: '600'}}>94.2%</span>
                      </div>
                      <div style={{
                        width: '100%',
                        backgroundColor: '#e2e8f0',
                        borderRadius: '9999px',
                        height: '8px'
                      }}>
                        <div style={{
                          backgroundColor: '#d69e2e',
                          height: '8px',
                          borderRadius: '9999px',
                          width: '94.2%'
                        }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="h2 mb-6" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>System Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="dashboard-section">
                    <h3 className="text-lg font-semibold mb-4" style={{color: '#2d3748', fontSize: '1.125rem', fontWeight: '600'}}>General Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          marginBottom: '8px',
                          color: '#4a5568'
                        }}>Site Status</label>
                        <label style={{
                          position: 'relative',
                          display: 'inline-flex',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}>
                          <input type="checkbox" style={{position: 'absolute', left: '-9999px'}} defaultChecked />
                          <div style={{
                            width: '44px',
                            height: '24px',
                            backgroundColor: '#e2e8f0',
                            borderRadius: '12px',
                            position: 'relative',
                            transition: 'background-color 0.3s ease'
                          }}>
                            {/* Toggle button circle - this would need JavaScript to work properly */}
                          </div>
                          <span style={{
                            marginLeft: '12px',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            color: '#1a202c'
                          }}>Maintenance Mode</span>
                        </label>
                      </div>

                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          marginBottom: '8px',
                          color: '#4a5568'
                        }}>Email Notifications</label>
                        <label style={{
                          position: 'relative',
                          display: 'inline-flex',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}>
                          <input type="checkbox" style={{position: 'absolute', left: '-9999px'}} defaultChecked />
                          <div style={{
                            width: '44px',
                            height: '24px',
                            backgroundColor: '#3182ce',
                            borderRadius: '12px',
                            position: 'relative'
                          }}>
                            {/* Toggle button circle */}
                          </div>
                          <span style={{
                            marginLeft: '12px',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            color: '#1a202c'
                          }}>Enabled</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-section">
                    <h3 className="text-lg font-semibold mb-4" style={{color: '#2d3748', fontSize: '1.125rem', fontWeight: '600'}}>Security Settings</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span style={{color: '#4a5568'}}>Two-Factor Authentication</span>
                        <select style={{
                          padding: '4px 12px',
                          border: '1px solid #cbd5e0',
                          borderRadius: '6px'
                        }}>
                          <option>Required</option>
                          <option>Optional</option>
                          <option>Disabled</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center">
                        <span style={{color: '#4a5568'}}>Session Timeout</span>
                        <select style={{
                          padding: '4px 12px',
                          border: '1px solid #cbd5e0',
                          borderRadius: '6px'
                        }}>
                          <option>30 minutes</option>
                          <option>1 hour</option>
                          <option>2 hours</option>
                        </select>
                      </div>

                      <button className="rollover-btn-save">
                        Save Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
