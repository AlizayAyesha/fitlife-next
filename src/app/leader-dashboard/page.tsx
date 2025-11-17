'use client'

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface LeaderEntry {
  id: string;
  name: string;
  points: number;
  category: string;
  avatar?: string;
  badge: string | null;
  achievement: string;
  joinDate: string;
  status: 'active' | 'inactive';
  position?: number;
}

export default function LeaderDashboard() {
  const [activeTab, setActiveTab] = useState('admin-control');

  const [leaderEntries, setLeaderEntries] = useState<LeaderEntry[]>([
    {
      id: '1',
      name: 'Alex Johnson',
      points: 2500,
      category: 'Fat Burner',
      badge: 'gold',
      achievement: 'Most Weight Lost',
      joinDate: '2025-01-15',
      status: 'active',
      position: 1
    },
    {
      id: '2',
      name: 'Sarah Wilson',
      points: 2300,
      category: 'Muscle Gainer',
      badge: 'silver',
      achievement: 'Best Progress',
      joinDate: '2025-02-20',
      status: 'active',
      position: 2
    },
    {
      id: '3',
      name: 'Mike Chen',
      points: 2100,
      category: 'Fat Burner',
      badge: 'silver',
      achievement: 'Dedicated Athlete',
      joinDate: '2025-01-08',
      status: 'active',
      position: 3
    },
    {
      id: '4',
      name: 'Emma Davis',
      points: 2000,
      category: 'Muscle Gainer',
      badge: 'bronze',
      achievement: 'Rising Star',
      joinDate: '2025-03-12',
      status: 'active',
      position: 4
    },
    {
      id: '5',
      name: 'David Brown',
      points: 1900,
      category: 'Fat Burner',
      badge: null,
      achievement: 'Consistent Performer',
      joinDate: '2025-01-05',
      status: 'active',
      position: 5
    },
    {
      id: '6',
      name: 'Lisa Anderson',
      points: 1800,
      category: 'Muscle Gainer',
      badge: null,
      achievement: 'Health Focused',
      joinDate: '2025-02-10',
      status: 'active',
      position: 6
    },
    {
      id: '7',
      name: 'Tom Wilson',
      points: 1750,
      category: 'Fat Burner',
      badge: null,
      achievement: 'Goal Achiever',
      joinDate: '2025-04-03',
      status: 'active',
      position: 7
    },
    {
      id: '8',
      name: 'Michelle Garcia',
      points: 1700,
      category: 'Muscle Gainer',
      badge: null,
      achievement: 'Motivational Seeker',
      joinDate: '2025-03-20',
      status: 'active',
      position: 8
    },
    {
      id: '9',
      name: 'Steve Martinez',
      points: 1650,
      category: 'Fat Burner',
      badge: null,
      achievement: 'Fitness Champion',
      joinDate: '2025-02-28',
      status: 'active',
      position: 9
    },
    {
      id: '10',
      name: 'Amy Taylor',
      points: 1600,
      category: 'Muscle Gainer',
      badge: null,
      achievement: 'Wellness Warrior',
      joinDate: '2025-04-15',
      status: 'active',
      position: 10
    }
  ]);

  const [newLeader, setNewLeader] = useState<Partial<LeaderEntry>>({
    name: '',
    points: 0,
    category: 'Fat Burner',
    badge: null,
    achievement: '',
    joinDate: new Date().toISOString().split('T')[0],
    status: 'active'
  });

  const handleAddLeader = () => {
    if (!newLeader.name || newLeader.points === 0) return;

    const newEntry: LeaderEntry = {
      id: Date.now().toString(),
      name: newLeader.name!,
      points: newLeader.points!,
      category: newLeader.category!,
      badge: newLeader.badge || null,
      achievement: newLeader.achievement!,
      joinDate: newLeader.joinDate!,
      status: newLeader.status as 'active',
      position: leaderEntries.length + 1
    };

    setLeaderEntries([...leaderEntries, newEntry]);
    setNewLeader({
      name: '',
      points: 0,
      category: 'Fat Burner',
      badge: null,
      achievement: '',
      joinDate: new Date().toISOString().split('T')[0],
      status: 'active'
    });
  };

  const handleUpdateLeader = (id: string, updates: Partial<LeaderEntry>) => {
    setLeaderEntries(entries =>
      entries.map(entry =>
        entry.id === id ? { ...entry, ...updates } : entry
      )
    );
  };

  const handleDeleteLeader = (id: string) => {
    setLeaderEntries(entries =>
      entries.filter(entry => entry.id !== id)
    );
  };

  const getBadgeIcon = (badge: string | null) => {
    switch (badge) {
      case 'gold':
        return '🥇';
      case 'silver':
        return '🥈';
      case 'bronze':
        return '🥉';
      default:
        return '';
    }
  };

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case 'gold':
        return '#FFD700';
      case 'silver':
        return '#C0C0C0';
      case 'bronze':
        return '#CD7F32';
      default:
        return '#6B7280';
    }
  };

  const publicLeaderboard = leaderEntries
    .filter(entry => entry.status === 'active')
    .sort((a, b) => b.points - a.points)
    .slice(0, 10);

  return (
    <>
      {/* Admin Navbar */}
      <header className="admin-navbar">
        <div className="admin-navbar-container">
          <a href="/" className="admin-navbar-logo">
            {React.createElement('ion-icon', { name: 'barbell-sharp', 'aria-hidden': true })}
            <span>AdminPanel</span>
          </a>
          <div className="admin-navbar-menu">
            <a href="/leader-dashboard" className="admin-navbar-link active">Leader Dashboard</a>
            <a href="/rollover-balance" className="admin-navbar-link">Rollover Balance</a>
            <a href="/banks-accounts" className="admin-navbar-link">Banks Accounts</a>
            <a href="/admin-demo" className="admin-navbar-link">Admin Panel</a>
          </div>
        </div>
      </header>

      <main>
        <section className="leader-dashboard-section">
          <div className="container">
            <h1 className="leader-admin-h1">🎯 Leader Dashboard Admin Control</h1>

            {/* Navigation Tabs */}
            <div className="admin-tabs">
              <div className="admin-tab-bar">
                <button
                  onClick={() => setActiveTab('admin-control')}
                  className={`admin-tab-btn ${activeTab === 'admin-control' ? 'active' : ''}`}
                >
                  Admin Control
                </button>
                <button
                  onClick={() => setActiveTab('public-view')}
                  className={`admin-tab-btn ${activeTab === 'public-view' ? 'active' : ''}`}
                >
                  Public View
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`admin-tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
                >
                  Analytics
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="admin-tab-content">
              {activeTab === 'admin-control' && (
                <div>
                  {/* Add New Leader Form */}
                  <div className="leader-admin-form">
                    <h2>Add/Manage Leaders</h2>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          value={newLeader.name || ''}
                          onChange={(e) => setNewLeader({...newLeader, name: e.target.value})}
                          placeholder="Enter participant name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Points</label>
                        <input
                          type="number"
                          value={newLeader.points || 0}
                          onChange={(e) => setNewLeader({...newLeader, points: parseInt(e.target.value) || 0})}
                          placeholder="Enter points"
                        />
                      </div>
                      <div className="form-group">
                        <label>Category</label>
                        <select
                          value={newLeader.category}
                          onChange={(e) => setNewLeader({...newLeader, category: e.target.value})}
                        >
                          <option value="Fat Burner">Fat Burner</option>
                          <option value="Muscle Gainer">Muscle Gainer</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Badge</label>
                        <select
                          value={newLeader.badge || ''}
                          onChange={(e) => setNewLeader({...newLeader, badge: e.target.value || null})}
                        >
                          <option value="">No Badge</option>
                          <option value="gold">Gold (1st)</option>
                          <option value="silver">Silver (2nd/3rd)</option>
                          <option value="bronze">Bronze (4th)</option>
                        </select>
                      </div>
                      <div className="form-group full-width">
                        <label>Achievement</label>
                        <input
                          type="text"
                          value={newLeader.achievement || ''}
                          onChange={(e) => setNewLeader({...newLeader, achievement: e.target.value})}
                          placeholder="Enter achievement description"
                        />
                      </div>
                      <div className="form-group">
                        <label>Join Date</label>
                        <input
                          type="date"
                          value={newLeader.joinDate}
                          onChange={(e) => setNewLeader({...newLeader, joinDate: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label>Status</label>
                        <select
                          value={newLeader.status}
                          onChange={(e) => setNewLeader({...newLeader, status: e.target.value as 'active' | 'inactive'})}
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                    <button className="leader-admin-btn-primary" onClick={handleAddLeader}>
                      Add Leader
                    </button>
                  </div>

                  {/* Current Leaders Management */}
                  <div className="leader-admin-list">
                    <h2>Current Leaders ({leaderEntries.length})</h2>
                    <div className="leader-admin-table-wrapper">
                      <table className="leader-admin-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Points</th>
                            <th>Category</th>
                            <th>Badge</th>
                            <th>Achievement</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {leaderEntries.map((leader) => (
                            <tr key={leader.id}>
                              <td>
                                <input
                                  type="text"
                                  value={leader.name}
                                  onChange={(e) => handleUpdateLeader(leader.id, { name: e.target.value })}
                                  className="leader-admin-input"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  value={leader.points}
                                  onChange={(e) => handleUpdateLeader(leader.id, { points: parseInt(e.target.value) || 0 })}
                                  className="leader-admin-input"
                                />
                              </td>
                              <td>
                                <select
                                  value={leader.category}
                                  onChange={(e) => handleUpdateLeader(leader.id, { category: e.target.value })}
                                  className="leader-admin-select"
                                >
                                  <option value="Fat Burner">Fat Burner</option>
                                  <option value="Muscle Gainer">Muscle Gainer</option>
                                </select>
                              </td>
                              <td>
                                <select
                                  value={leader.badge || ''}
                                  onChange={(e) => handleUpdateLeader(leader.id, { badge: e.target.value || null })}
                                  className="leader-admin-select"
                                >
                                  <option value="">No Badge</option>
                                  <option value="gold">Gold</option>
                                  <option value="silver">Silver</option>
                                  <option value="bronze">Bronze</option>
                                </select>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={leader.achievement}
                                  onChange={(e) => handleUpdateLeader(leader.id, { achievement: e.target.value })}
                                  className="leader-admin-input"
                                />
                              </td>
                              <td>
                                <select
                                  value={leader.status}
                                  onChange={(e) => handleUpdateLeader(leader.id, { status: e.target.value as 'active' | 'inactive' })}
                                  className={`leader-admin-select status-${leader.status}`}
                                >
                                  <option value="active">Active</option>
                                  <option value="inactive">Inactive</option>
                                </select>
                              </td>
                              <td>
                                <button
                                  onClick={() => handleDeleteLeader(leader.id)}
                                  className="leader-admin-btn-danger"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'public-view' && (
                <div>
                  <h2>Public Leaderboard Preview</h2>
                  <div className="public-leaderboard-preview">
                    <div className="leader-grid">
                      {/* Top Rankings */}
                      <div className="leader-section">
                        <h2 className="leader-section-title">Top 10 Leaders</h2>
                        <div className="leader-list">
                          {publicLeaderboard.map((entry, index) => (
                            <div
                              key={entry.id}
                              className={`leader-item ${index < 4 ? 'top-ranked' : ''}`}
                            >
                              <div className="leader-info">
                                <div
                                  className="leader-rank"
                                  style={{
                                    backgroundColor: getBadgeColor(entry.badge)
                                  }}
                                >
                                  {index + 1}
                                </div>
                                {entry.badge && (
                                  <span className="leader-badge">
                                    {getBadgeIcon(entry.badge)}
                                  </span>
                                )}
                                <div>
                                  <h3 className="leader-name">{entry.name}</h3>
                                  <span className="leader-category">{entry.category}</span>
                                </div>
                              </div>
                              <div className="leader-details">
                                <p className="leader-points">{entry.points} pts</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Badge Winners */}
                      <div className="leader-section">
                        <h2 className="leader-section-title">Digital Badge Winners</h2>
                        <div className="badge-winners">
                          {publicLeaderboard.slice(0, 4).map((entry, index) => (
                            <div
                              key={entry.id}
                              className="badge-card"
                              style={{
                                backgroundColor: getBadgeColor(entry.badge)
                              }}
                            >
                              <div className="badge-icon">{getBadgeIcon(entry.badge)}</div>
                              <h3 className="badge-name">{entry.name}</h3>
                              <p className="badge-category">{entry.category}</p>
                              <div>
                                <p className="badge-points">{entry.points} pts</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="leader-stats">
                      <div className="stat-card">
                        <h3 className="stat-label">Total Leaders</h3>
                        <p className="stat-number total-leaders">{publicLeaderboard.length}</p>
                      </div>
                      <div className="stat-card">
                        <h3 className="stat-label">Fat Burners</h3>
                        <p className="stat-number fat-burners">
                          {publicLeaderboard.filter(l => l.category === 'Fat Burner').length}
                        </p>
                      </div>
                      <div className="stat-card">
                        <h3 className="stat-label">Muscle Gainers</h3>
                        <p className="stat-number gain-makers">
                          {publicLeaderboard.filter(l => l.category === 'Muscle Gainer').length}
                        </p>
                      </div>
                      <div className="stat-card">
                        <h3 className="stat-label">Badge Winners</h3>
                        <p className="stat-number badge-winners">
                          {publicLeaderboard.filter(l => l.badge).length}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div>
                  <div className="leader-analytics-grid">
                    <div className="leader-analytics-card">
                      <h3>Leaderboard Analytics</h3>
                      <div className="analytics-metrics">
                        <div className="metric">
                          <span className="metric-value">{leaderEntries.length}</span>
                          <span className="metric-label">Total Entries</span>
                        </div>
                        <div className="metric">
                          <span className="metric-value">
                            {leaderEntries.filter(l => l.status === 'active').length}
                          </span>
                          <span className="metric-label">Active Leaders</span>
                        </div>
                        <div className="metric">
                          <span className="metric-value">
                            {leaderEntries.filter(l => l.badge).length}
                          </span>
                          <span className="metric-label">Badge Winners</span>
                        </div>
                        <div className="metric">
                          <span className="metric-value">
                            {Math.max(...leaderEntries.map(l => l.points))}
                          </span>
                          <span className="metric-label">Highest Score</span>
                        </div>
                      </div>
                    </div>

                    <div className="leader-analytics-card">
                      <h3>Category Distribution</h3>
                      <div className="category-distribution">
                        <div className="category-item">
                          <span className="category-name">Fat Burners</span>
                          <span className="category-count">
                            {leaderEntries.filter(l => l.category === 'Fat Burner').length}
                          </span>
                        </div>
                        <div className="category-item">
                          <span className="category-name">Muscle Gainers</span>
                          <span className="category-count">
                            {leaderEntries.filter(l => l.category === 'Muscle Gainer').length}
                          </span>
                        </div>
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
