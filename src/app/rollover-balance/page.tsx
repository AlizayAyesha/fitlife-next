'use client'

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface RolloverTransaction {
  id: string;
  date: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  status: 'pending' | 'completed' | 'failed';
}

export default function RolloverBalance() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [selectedTransferAccount, setSelectedTransferAccount] = useState<string>('');

  const mockTransactions: RolloverTransaction[] = [
    {
      id: 'TRX001',
      date: '2025-11-17',
      type: 'income',
      amount: 5000.00,
      description: 'Prize Money - Fitness Challenge Winner',
      status: 'completed'
    },
    {
      id: 'TRX002',
      date: '2025-11-16',
      type: 'income',
      amount: 1200.00,
      description: 'Monthly Subscription Revenue',
      status: 'completed'
    },
    {
      id: 'TRX003',
      date: '2025-11-15',
      type: 'expense',
      amount: -800.00,
      description: 'Server Hosting Fees',
      status: 'completed'
    },
    {
      id: 'TRX004',
      date: '2025-11-14',
      type: 'income',
      amount: 750.00,
      description: 'Equipment Sales',
      status: 'completed'
    },
    {
      id: 'TRX005',
      date: '2025-11-13',
      type: 'expense',
      amount: -300.00,
      description: 'Marketing Expenses',
      status: 'pending'
    }
  ];

  const totalBalance = mockTransactions.reduce((sum, trx) => sum + trx.amount, 0);
  const totalIncome = mockTransactions.filter(trx => trx.type === 'income').reduce((sum, trx) => sum + trx.amount, 0);
  const totalExpenses = Math.abs(mockTransactions.filter(trx => trx.type === 'expense').reduce((sum, trx) => sum + trx.amount, 0));

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
            <a href="/rollover-balance" className="admin-navbar-link active">Rollover Balance</a>
            <a href="/banks-accounts" className="admin-navbar-link">Banks Accounts</a>
            <a href="/admin-demo" className="admin-navbar-link">Admin Panel</a>
          </div>
        </div>
      </header>

      <main>
        <section className="rollover-balance">
          <div className="container">
            <h1 className="rollover-h1">💰 Rollover Balance Management</h1>

            {/* Navigation Tabs */}
            <div className="admin-tabs">
              <div className="admin-tab-bar">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`admin-tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('transactions')}
                  className={`admin-tab-btn ${activeTab === 'transactions' ? 'active' : ''}`}
                >
                  Transactions
                </button>
                <button
                  onClick={() => setActiveTab('reports')}
                  className={`admin-tab-btn ${activeTab === 'reports' ? 'active' : ''}`}
                >
                  Reports
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
              {activeTab === 'dashboard' && (
                <div>
                  {/* Balance Summary Cards */}
                  <div className="rollover-balance-cards">
                    <div className="rollover-card current-balance">
                      <div className="rollover-card-header">
                        <h3>Current Balance</h3>
                        <span className="rollover-icon">💰</span>
                      </div>
                      <div className="rollover-amount">
                        ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                      <div className="rollover-trend">
                        <span className="rollover-trend-positive">↗ +8.2%</span> from last month
                      </div>
                    </div>

                    <div className="rollover-card total-income">
                      <div className="rollover-card-header">
                        <h3>Total Income</h3>
                        <span className="rollover-icon">📈</span>
                      </div>
                      <div className="rollover-amount color-positive">
                        +${totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                      <div className="rollover-period">This month</div>
                    </div>

                    <div className="rollover-card total-expenses">
                      <div className="rollover-card-header">
                        <h3>Total Expenses</h3>
                        <span className="rollover-icon">📉</span>
                      </div>
                      <div className="rollover-amount color-negative">
                        -${totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                      <div className="rollover-period">This month</div>
                    </div>

                    <div className="rollover-card net-profit">
                      <div className="rollover-card-header">
                        <h3>Net Profit</h3>
                        <span className="rollover-icon">💎</span>
                      </div>
                      <div className="rollover-amount">
                        ${(totalIncome - totalExpenses).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                      <div className="rollover-profit-margin">
                        Profit Margin: {totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome * 100).toFixed(1) : 0}%
                      </div>
                    </div>
                  </div>

                  {/* Recent Transactions */}
                  <div className="rollover-section">
                    <div className="rollover-section-header">
                      <h2>Recent Transactions</h2>
                      <a href="#" className="rollover-link">View All →</a>
                    </div>

                    <div className="rollover-transactions-list">
                      {mockTransactions.slice(0, 5).map((transaction) => (
                        <div key={transaction.id} className="rollover-transaction-item">
                          <div className="rollover-transaction-info">
                            <div className="rollover-transaction-date">{transaction.date}</div>
                            <div className="rollover-transaction-desc">{transaction.description}</div>
                          </div>
                          <div className="rollover-transaction-amount">
                            <span className={`transaction-amount ${transaction.type}`}>
                              {transaction.type === 'income' ? '+' : ''}${transaction.amount.toFixed(2)}
                            </span>
                            <span className={`transaction-status status-${transaction.status}`}>
                              {transaction.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'transactions' && (
                <div>
                  <div className="rollover-section-header">
                    <h2>All Transactions</h2>
                    <div className="rollover-actions">
                      <button className="rollover-btn-primary">
                        Add Transaction
                      </button>
                      <button className="rollover-btn-secondary">
                        Export CSV
                      </button>
                    </div>
                  </div>

                  <div className="rollover-table-wrapper">
                    <table className="rollover-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Date</th>
                          <th>Description</th>
                          <th>Type</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockTransactions.map((transaction) => (
                          <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>
                              <span className={`transaction-type type-${transaction.type}`}>
                                {transaction.type}
                              </span>
                            </td>
                            <td>
                              <span className={`transaction-amount ${transaction.type}`}>
                                ${transaction.amount.toFixed(2)}
                              </span>
                            </td>
                            <td>
                              <span className={`transaction-status status-${transaction.status}`}>
                                {transaction.status}
                              </span>
                            </td>
                            <td>
                              <div className="rollover-actions-cell">
                                <button className="rollover-action-btn edit">Edit</button>
                                <button className="rollover-action-btn delete">Delete</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'reports' && (
                <div>
                  <div className="rollover-section-header">
                    <h2>Financial Reports</h2>
                    <div className="rollover-filters">
                      <select className="rollover-select">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 3 months</option>
                        <option>Last year</option>
                      </select>
                    </div>
                  </div>

                  <div className="rollover-reports-grid">
                    <div className="rollover-report-card">
                      <h3>Monthly Summary</h3>
                      <div className="rollover-chart-placeholder">
                        Chart Placeholder - Monthly Revenue Chart
                      </div>
                    </div>

                    <div className="rollover-report-card">
                      <h3>Expense Breakdown</h3>
                      <div className="rollover-chart-placeholder">
                        Chart Placeholder - Expense Categories
                      </div>
                    </div>

                    <div className="rollover-report-card">
                      <h3>Income Sources</h3>
                      <div className="rollover-chart-placeholder">
                        Chart Placeholder - Income Pie Chart
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <div className="rollover-settings-grid">
                    <div className="rollover-settings-card">
                      <h3>Account Settings</h3>
                      <div className="rollover-setting-item">
                        <label>Default Currency</label>
                        <select className="rollover-select">
                          <option>USD ($)</option>
                          <option>EUR (€)</option>
                          <option>GBP (£)</option>
                        </select>
                      </div>

                      <div className="rollover-setting-item">
                        <label>Fiscal Year Start</label>
                        <select className="rollover-select">
                          <option>January</option>
                          <option>April</option>
                          <option>July</option>
                          <option>October</option>
                        </select>
                      </div>
                    </div>

                    <div className="rollover-settings-card">
                      <h3>Notification Settings</h3>
                      <div className="rollover-setting-item">
                        <label>Email Alerts</label>
                        <input type="checkbox" defaultChecked />
                      </div>

                      <div className="rollover-setting-item">
                        <label>Low Balance Alerts</label>
                        <input type="checkbox" defaultChecked />
                      </div>

                      <div className="rollover-setting-item">
                        <label>Large Transaction Alerts</label>
                        <input type="checkbox" defaultChecked />
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
