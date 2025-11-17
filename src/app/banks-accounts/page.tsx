'use client'

import React, { useState } from 'react';
import Footer from '../../components/Footer';

interface BankAccount {
  id: string;
  bankName: string;
  accountType: string;
  accountNumber: string;
  routingNumber?: string;
  balance: number;
  currency: string;
  status: 'active' | 'inactive' | 'pending';
  lastUpdated: string;
}

interface Transaction {
  id: string;
  accountId: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
  category: string;
}

export default function BanksAccounts() {
  const [activeTab, setActiveTab] = useState('accounts');
  const [showLinkAccountModal, setShowLinkAccountModal] = useState(false);
  const [showViewAccountModal, setShowViewAccountModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<BankAccount | null>(null);

  const mockAccounts: BankAccount[] = [
    {
      id: 'ACC001',
      bankName: 'Chase Bank',
      accountType: 'Checking',
      accountNumber: '****1234',
      routingNumber: '021000021',
      balance: 15420.50,
      currency: 'USD',
      status: 'active',
      lastUpdated: '2025-11-17'
    },
    {
      id: 'ACC002',
      bankName: 'Bank of America',
      accountType: 'Savings',
      accountNumber: '****5678',
      routingNumber: '121000358',
      balance: 45000.00,
      currency: 'USD',
      status: 'active',
      lastUpdated: '2025-11-17'
    },
    {
      id: 'ACC003',
      bankName: 'Wells Fargo',
      accountType: 'Business',
      accountNumber: '****9012',
      routingNumber: '121000248',
      balance: 25800.75,
      currency: 'USD',
      status: 'active',
      lastUpdated: '2025-11-16'
    },
    {
      id: 'ACC004',
      bankName: 'Citibank',
      accountType: 'Investment',
      accountNumber: '****3456',
      routingNumber: '322271627',
      balance: 87650.25,
      currency: 'USD',
      status: 'inactive',
      lastUpdated: '2025-11-15'
    }
  ];

  const mockTransactions: Transaction[] = [
    {
      id: 'TXN001',
      accountId: 'ACC001',
      type: 'credit',
      amount: 5000.00,
      description: 'Prize Money Transfer',
      date: '2025-11-17',
      category: 'Prize'
    },
    {
      id: 'TXN002',
      accountId: 'ACC001',
      type: 'debit',
      amount: 1200.00,
      description: 'Server Hosting Fees',
      date: '2025-11-16',
      category: 'Expenses'
    },
    {
      id: 'TXN003',
      accountId: 'ACC002',
      type: 'credit',
      amount: 2500.00,
      description: 'Monthly Interest',
      date: '2025-11-17',
      category: 'Interest'
    },
    {
      id: 'TXN004',
      accountId: 'ACC003',
      type: 'debit',
      amount: 850.00,
      description: 'Equipment Purchase',
      date: '2025-11-16',
      category: 'Equipment'
    },
    {
      id: 'TXN005',
      accountId: 'ACC003',
      type: 'credit',
      amount: 1200.00,
      description: 'Subscription Revenue',
      date: '2025-11-15',
      category: 'Revenue'
    }
  ];

  const totalBalance = mockAccounts.filter(acc => acc.status === 'active').reduce((sum, acc) => sum + acc.balance, 0);

  const handleViewAccount = (account: BankAccount) => {
    console.log('View button clicked for account:', account.bankName);
    setSelectedAccount(account);
    setShowViewAccountModal(true);
  };

  const handleLinkNewAccount = () => {
    console.log('Link New Account button clicked');
    console.log('Setting showLinkAccountModal to true');
    setShowLinkAccountModal(true);
    console.log('showLinkAccountModal should now be true:', showLinkAccountModal); // Note: this will log the previous value
  };

  const handleTransfer = (account: BankAccount) => {
    console.log('Transfer button clicked for account:', account.bankName);
    setSelectedAccount(account);
    setShowTransferModal(true);
  };

  const closeModals = () => {
    console.log('Closing all modals');
    setShowLinkAccountModal(false);
    setShowViewAccountModal(false);
    setShowTransferModal(false);
    setSelectedAccount(null);
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
            <a href="/banks-accounts" className="admin-navbar-link active">Banks Accounts</a>
            <a href="/admin-demo" className="admin-navbar-link">Admin Panel</a>
          </div>
        </div>
      </header>

      <main>
        <section className="banks-accounts">
          <div className="container">
            <h1 className="banks-h1">🏦 Bank Accounts Management</h1>

            {/* Navigation Tabs */}
            <div className="admin-tabs">
              <div className="admin-tab-bar">
                <button
                  onClick={() => setActiveTab('accounts')}
                  className={`admin-tab-btn ${activeTab === 'accounts' ? 'active' : ''}`}
                >
                  Accounts Overview
                </button>
                <button
                  onClick={() => setActiveTab('transactions')}
                  className={`admin-tab-btn ${activeTab === 'transactions' ? 'active' : ''}`}
                >
                  Transactions
                </button>
                <button
                  onClick={() => setActiveTab('transfers')}
                  className={`admin-tab-btn ${activeTab === 'transfers' ? 'active' : ''}`}
                >
                  Money Transfers
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`admin-tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
                >
                  Account Settings
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="admin-tab-content">
              {activeTab === 'accounts' && (
                <div>
                  {/* Total Balance Summary */}
                  <div className="banks-summary-card">
                    <div className="banks-summary-content">
                      <div className="banks-summary-text">
                        <h2>Total Account Balance</h2>
                        <p>Across all active bank accounts</p>
                      </div>
                      <div className="banks-total-amount">
                        ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div className="banks-summary-icon">💳</div>
                  </div>

                  {/* Bank Accounts Grid */}
                  <div className="banks-accounts-grid">
                    {mockAccounts.map((account) => (
                      <div key={account.id} className={`banks-account-card status-${account.status}`}>
                        <div className="banks-account-header">
                          <div className="banks-account-info">
                            <h3>{account.bankName}</h3>
                            <span className={`account-type type-${account.accountType.toLowerCase()}`}>
                              {account.accountType}
                            </span>
                          </div>
                          <div className={`account-status status-${account.status}`}>
                            {account.status.toUpperCase()}
                          </div>
                        </div>

                        <div className="banks-account-details">
                          <div className="account-number">
                            <span className="account-label">Account #</span>
                            <span className="account-value">{account.accountNumber}</span>
                          </div>
                          {account.routingNumber && (
                            <div className="routing-number">
                              <span className="account-label">Routing #</span>
                              <span className="account-value">{account.routingNumber}</span>
                            </div>
                          )}
                        </div>

                        <div className="banks-account-balance">
                          <div className="balance-section">
                            <span className="balance-currency">{account.currency}</span>
                            <span className="balance-amount">
                              {account.balance.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                              })}
                            </span>
                          </div>
                          <div className="balance-actions">
                            <button
                              className="banks-action-btn view"
                              onClick={() => handleViewAccount(account)}
                            >
                              View
                            </button>
                            <button
                              className="banks-action-btn transfer"
                              onClick={() => handleTransfer(account)}
                            >
                              Transfer
                            </button>
                          </div>
                        </div>

                        <div className="banks-account-footer">
                          <span className="last-updated">Last updated: {account.lastUpdated}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="banks-actions-bar">
                    <button className="banks-btn-primary" onClick={handleLinkNewAccount}>
                      Link New Account
                    </button>
                    <button className="rollover-btn-export">
                      Export Statements
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'transactions' && (
                <div>
                  <div className="banks-section-header">
                    <h2>Recent Transactions</h2>
                    <div className="banks-filters">
                      <select className="banks-select">
                        <option>All Accounts</option>
                        {mockAccounts.map(account => (
                          <option key={account.id} value={account.id}>
                            {account.bankName} ({account.accountNumber})
                          </option>
                        ))}
                      </select>
                      <select className="banks-select">
                        <option>All Categories</option>
                        <option>Prize</option>
                        <option>Revenue</option>
                        <option>Expenses</option>
                        <option>Interest</option>
                      </select>
                    </div>
                  </div>

                  <div className="banks-transactions-wrapper">
                    <table className="banks-transactions-table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Description</th>
                          <th>Category</th>
                          <th>Account</th>
                          <th>Type</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockTransactions.map((transaction) => {
                          const account = mockAccounts.find(acc => acc.id === transaction.accountId);
                          return (
                            <tr key={transaction.id}>
                              <td>{transaction.date}</td>
                              <td>{transaction.description}</td>
                              <td>
                                <span className={`transaction-category category-${transaction.category.toLowerCase()}`}>
                                  {transaction.category}
                                </span>
                              </td>
                              <td>
                                <div className="transaction-account">
                                  <div className="account-name">{account?.bankName}</div>
                                  <div className="account-number">{account?.accountNumber}</div>
                                </div>
                              </td>
                              <td>
                                <span className={`transaction-type type-${transaction.type}`}>
                                  {transaction.type.toUpperCase()}
                                </span>
                              </td>
                              <td>
                                <span className={`transaction-amount ${transaction.type}`}>
                                  {transaction.type === 'credit' ? '+' : '-'}
                                  ${Math.abs(transaction.amount).toFixed(2)}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'transfers' && (
                <div>
                  <div className="banks-section-header">
                    <h2 style={{ color: 'black' }}>Money Transfers</h2>
                    <span style={{ color: 'black' }}>New Transfer</span>
                  </div>

                  <div className="banks-transfers-grid">
                    <div className="banks-transfer-card">
                      <h3>Internal Transfer</h3>
                      <p>Transfer between your own accounts</p>
                      <div className="transfer-form">
                        <select className="banks-select">
                          <option>From Account</option>
                          {mockAccounts.map(account => (
                            <option key={account.id}>
                              {account.bankName} - {account.accountNumber}
                            </option>
                          ))}
                        </select>
                        <select className="banks-select">
                          <option>To Account</option>
                          {mockAccounts.map(account => (
                            <option key={account.id}>
                              {account.bankName} - {account.accountNumber}
                            </option>
                          ))}
                        </select>
                        <input type="number" placeholder="Amount" className="banks-input" />
                        <button className="banks-transfer-btn">Transfer Money</button>
                      </div>
                    </div>

                    <div className="banks-transfer-card">
                      <h3>External Transfer</h3>
                      <p>Send money to another person or business</p>
                      <div className="transfer-pending">
                        <p>External transfers require additional verification.</p>
                        <button className="banks-btn-secondary">Contact Support</button>
                      </div>
                    </div>

                    <div className="banks-transfer-card">
                      <h3>Scheduled Transfers</h3>
                      <p>Set up recurring or future transfers</p>
                      <div className="scheduled-transfers">
                        <div className="no-scheduled">
                          <p>No scheduled transfers</p>
                          <button className="banks-btn-outline">Schedule Transfer</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <div className="banks-settings-grid">
                    <div className="banks-settings-card">
                      <h3>Security Settings</h3>
                      <div className="banks-setting-item">
                        <label>Two-Factor Authentication</label>
                        <div className="setting-controls">
                          <input type="checkbox" defaultChecked readOnly />
                          <span className="setting-status enabled">Enabled</span>
                        </div>
                      </div>

                      <div className="banks-setting-item">
                        <label>Spending Limits</label>
                        <div className="setting-controls">
                          <input type="number" defaultValue={5000} className="banks-input" />
                          <span>per day</span>
                        </div>
                      </div>

                      <div className="banks-setting-item">
                        <label>Transaction Alerts</label>
                        <div className="setting-controls">
                          <input type="checkbox" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="banks-settings-card">
                      <h3>Notification Preferences</h3>
                      <div className="banks-setting-item">
                        <label>Email Notifications</label>
                        <div className="setting-controls">
                          <input type="checkbox" defaultChecked />
                        </div>
                      </div>

                      <div className="banks-setting-item">
                        <label>SMS Alerts</label>
                        <div className="setting-controls">
                          <input type="checkbox" />
                        </div>
                      </div>

                      <div className="banks-setting-item">
                        <label>Large Transaction Threshold</label>
                        <div className="setting-controls">
                          <input type="number" defaultValue={1000} className="banks-input" />
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

      {/* Link New Account Modal */}
      {showLinkAccountModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-header">Link New Bank Account</h3>
            <div className="modal-form-group">
              <label className="modal-form-group-label">Bank Name</label>
              <select className="modal-select">
                <option>Chase Bank</option>
                <option>Bank of America</option>
                <option>Wells Fargo</option>
                <option>Citibank</option>
                <option>Capital One</option>
                <option>TD Bank</option>
              </select>
            </div>
            <div className="modal-form-group">
              <label className="modal-form-group-label">Account Type</label>
              <select className="modal-select">
                <option>Checking</option>
                <option>Savings</option>
                <option>Business</option>
                <option>Investment</option>
              </select>
            </div>
            <div className="modal-form-group">
              <label className="modal-form-group-label">Account Number</label>
              <input
                type="text"
                className="modal-input"
                placeholder="Enter account number"
              />
            </div>
            <div className="modal-form-group">
              <label className="modal-form-group-label">Routing Number</label>
              <input
                type="text"
                className="modal-input"
                placeholder="Enter routing number"
              />
            </div>
            <div className="modal-buttons">
              <button
                onClick={closeModals}
                className="modal-btn-cancel"
              >
                Cancel
              </button>
              <button className="modal-btn-primary">
                Link Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Account Modal */}
      {showViewAccountModal && selectedAccount && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-header">Account Details</h3>
            <div className="modal-account-info">
              <div className="modal-account-row">
                <span className="modal-account-label">Bank Name:</span>
                <span className="modal-account-value">{selectedAccount.bankName}</span>
              </div>
              <div className="modal-account-row">
                <span className="modal-account-label">Account Type:</span>
                <span className="modal-account-value">{selectedAccount.accountType}</span>
              </div>
              <div className="modal-account-row">
                <span className="modal-account-label">Account Number:</span>
                <span className="modal-account-value">{selectedAccount.accountNumber}</span>
              </div>
              {selectedAccount.routingNumber && (
                <div className="modal-account-row">
                  <span className="modal-account-label">Routing Number:</span>
                  <span className="modal-account-value">{selectedAccount.routingNumber}</span>
                </div>
              )}
              <div className="modal-account-row">
                <span className="modal-account-label">Currency:</span>
                <span className="modal-account-value">{selectedAccount.currency}</span>
              </div>
              <div className="modal-account-row">
                <span className="modal-account-label">Balance:</span>
                <span className="modal-balance-amount">
                  {selectedAccount.currency} {selectedAccount.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="modal-account-row">
                <span className="modal-account-label">Status:</span>
                <span className={`modal-status-badge ${
                  selectedAccount.status === 'active'
                    ? 'modal-status-active'
                    : 'modal-status-inactive'
                }`}>
                  {selectedAccount.status.toUpperCase()}
                </span>
              </div>
              <div className="modal-account-row">
                <span className="modal-account-label">Last Updated:</span>
                <span className="modal-account-value">{selectedAccount.lastUpdated}</span>
              </div>
            </div>
            <div className="modal-buttons">
              <button
                onClick={closeModals}
                className="modal-btn-cancel"
              >
                Close
              </button>
              <button className="modal-btn-primary">
                View Transactions
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Transfer Modal */}
      {showTransferModal && selectedAccount && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-header">Transfer from {selectedAccount.bankName}</h3>
            <p>Current Balance: ${selectedAccount.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>

            <div className="modal-form-group">
              <label className="modal-form-group-label">To Account</label>
              <select className="modal-select">
                <option>Select recipient account</option>
                {mockAccounts
                  .filter(account => account.id !== selectedAccount.id)
                  .map(account => (
                    <option key={account.id} value={account.id}>
                      {account.bankName} - {account.accountNumber}
                    </option>
                  ))}
              </select>
            </div>

            <div className="modal-form-group">
              <label className="modal-form-group-label">Transfer Amount</label>
              <input
                type="number"
                className="modal-input"
                placeholder="Enter amount"
                min="0.01"
                max={selectedAccount.balance}
                step="0.01"
              />
            </div>

            <div className="modal-form-group">
              <label className="modal-form-group-label">Description (Optional)</label>
              <textarea
                className="modal-textarea"
                placeholder="Transfer description"
                rows={2}
              ></textarea>
            </div>

            <div className="modal-buttons">
              <button
                onClick={closeModals}
                className="modal-btn-cancel"
              >
                Cancel
              </button>
              <button className="modal-btn-success">
                Transfer Money
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
