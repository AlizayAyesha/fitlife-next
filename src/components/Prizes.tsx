'use client'

import React from 'react';

interface PrizeWinner {
  name: string;
  category: string;
  points: number;
  medal: string;
  medalIcon: string;
  medalColor: string;
  reward: string;
}

const Prizes: React.FC = () => {
  const prizeWinners: PrizeWinner[] = [
    {
      name: "Alex Johnson",
      category: "Fat Burner",
      points: 2500,
      medal: "Gold",
      medalIcon: "🥇",
      medalColor: "#FFD700",
      reward: "$500 Fitness Voucher"
    },
    {
      name: "Sarah Wilson",
      category: "Muscle Gainer",
      points: 2300,
      medal: "Silver",
      medalIcon: "🥈",
      medalColor: "#C0C0C0",
      reward: "$300 Protein Supplement Package"
    },
    {
      name: "Mike Chen",
      category: "Fat Burner",
      points: 2100,
      medal: "Bronze",
      medalIcon: "🥉",
      medalColor: "#CD7F32",
      reward: "$150 Workout Equipment"
    }
  ];

  return (
    <section className="prizes section">
      <div className="container">
        <div className="prizes-header">
          <h2 className="prizes-title">🏆 Prize Winners</h2>
          <p className="prizes-subtitle">
            Celebrate our top fitness achievers this month! Winners receive amazing prizes and recognition
            for their dedication to health and fitness goals.
          </p>
        </div>

        <div className="prizes-grid">
          {prizeWinners.map((winner, index) => (
            <div
              key={index}
              className={`prize-card prize-card-${index + 1}`}
              style={{ '--medal-color': winner.medalColor } as React.CSSProperties}
            >
              <div className="prize-medal">
                <span className="prize-medal-icon">{winner.medalIcon}</span>
                <span className="prize-medal-text">{winner.medal}</span>
              </div>

              <div className="prize-content">
                <div className="prize-avatar">
                  <div className="prize-avatar-circle">
                    {winner.name.charAt(0)}
                  </div>
                </div>

                <h3 className="prize-name">{winner.name}</h3>
                <span className="prize-category">{winner.category}</span>

                <div className="prize-stats">
                  <div className="prize-points">
                    <span className="prize-points-value">{winner.points.toLocaleString()}</span>
                    <span className="prize-points-label">points</span>
                  </div>
                </div>

                <div className="prize-reward">
                  <div className="prize-reward-icon">🎁</div>
                  <span className="prize-reward-text">{winner.reward}</span>
                </div>
              </div>

              <div className="prize-glow"></div>
            </div>
          ))}
        </div>

        <div className="prizes-cta">
          <p className="prizes-cta-text">
            Ready to be our next champion? <a href="/leader-dashboard" className="prizes-link">View Leaderboard</a> and start your journey today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
