'use client'

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AccountPage() {
  const [profileSettings, setProfileSettings] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    notifications: false,
    profilePic: null as string | null
  });

  const handleSettingsChange = (field: string, value: any) => {
    setProfileSettings(prev => ({ ...prev, [field]: value }));
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

  const handleSave = () => {
    alert('Settings saved!');
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <h1 className="h1 section-title text-center">Account Settings</h1>

            <div className="account-settings">
              <div className="settings-form">
                <div className="form-row">
                  <div className="form-group" style={{ textAlign: 'center' }}>
                    <label>Profile Picture</label>
                    <div style={{ marginTop: '10px' }}>
                      <img
                        src={profileSettings.profilePic || 'https://via.placeholder.com/100'}
                        alt="Profile"
                        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }}
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={profileSettings.name}
                      onChange={(e) => handleSettingsChange('name', e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={profileSettings.email}
                      onChange={(e) => handleSettingsChange('email', e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={profileSettings.phone}
                      onChange={(e) => handleSettingsChange('phone', e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <input
                        type="checkbox"
                        checked={profileSettings.notifications}
                        onChange={(e) => handleSettingsChange('notifications', e.target.checked)}
                      />
                      Enable Notifications
                    </label>
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <button className="btn btn-primary" onClick={handleSave}>
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .account-settings {
          max-width: 800px;
          margin: 0 auto;
        }

        .settings-form {
          background: white;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
          color: var(--rich-black-fogra-29-1);
        }

        .input-field {
          width: 100%;
          padding: 12px;
          border: 1px solid var(--light-gray);
          border-radius: 6px;
          font-size: 16px;
        }

        .input-field:focus {
          outline: none;
          border-color: var(--coquelicot);
        }
      `}</style>
    </>
  );
}
