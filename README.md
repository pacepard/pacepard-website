
<img src="/blocks/pacepard.svg" alt="Pacepard Logo" width="400">

## Pacepard Application (website)

### AI-powered developer reward and engagement platform.

> Pacepard is an AI-Powered developer reward and engagement software. Pacepard helps API and DevTools Companies grow loyal developers through usage tracking and rewards. Boost API adoption with gamification, smart rewards, and developer insights.

By using Pacepard, developers, companies, and EdTech providers can collaborate, track talent progress, and host challenges while leveraging AI-powered engagement analytics.

## Introduction

API companies want developers to use their APIs regularly, but keeping them engaged is a struggle. They spend tons of money on marketing, events, and sponsorships, yet most developers try an API once and never come back.  

On the other hand, developers—whether beginners or experienced—need different things to stay motivated. Some want easier ways to learn, while others look for meaningful rewards or ways to build their reputation.  

That’s where **Pacepard** comes in.  

Pacepard is an AI-powered platform that helps API and DevTools companies **track developer engagement, reward usage, and build long-term loyalty**. Instead of just hoping developers stick around, companies can now see exactly how their APIs are being used, identify top contributors, and automatically offer rewards that keep developers coming back.  

For developers, Pacepard makes API adoption more rewarding—literally. Whether it’s earning points, unlocking premium features, or gaining credibility with verified achievements, using APIs now comes with real benefits.  

The bottom line? API adoption shouldn’t be a guessing game. **Pacepard turns developer engagement into a smart, trackable, and rewarding experience.**


## Core Features

### Usage Analytics

- **Real-time API adoption monitoring** — track developer engagement across projects.  
- **Predictive churn insights** — identify inactive users before they drop off.  
- **Power user identification** — spot top contributors & automate personalized incentives.  
- **Behavior-driven recommendations** — understand what features developers use most & optimize accordingly.  

### Rewards & Loyalty Engine

- **Dynamic API rewards** — API credits, discounts, premium access, and cash bonuses.  
- **Points-based, tiered, & subscription rewards** — continuous engagement earns exclusive perks.  
- **Risk-free API testing with sandbox environments** — encourages more experimentation.  
- **Project-powered certifications & badges** — help developers build credibility while using APIs.  

### Gamification & Engagement

- **Gamified achievements** — badges, leaderboards, and milestone-based rewards.  
- **Leaderboard-based incentives** — recognition for top API users & contributors.  
- **Hackathons & coding challenges** — structured competitions that reward API adoption.  
- **Developer quests & milestone-based learning** — progress through levels based on API usage.  
- **Community challenges** — peer-driven incentives for API adoption & collaboration.  

### Loyalty Campaigns

- **Automated engagement campaigns** — target developers with personalized outreach.  
- **Referral & advocacy programs** — reward developers for bringing in new users.  
- **Loyalty emails & notifications** — keep developers engaged with updates & reward reminders.  
- **API usage-based perks** — automatically unlock benefits as developers increase API calls.  


## Technologies

- **TypeScript**: For robust type checking and cleaner codebase.
- **React (Frontend)**: Modern frontend framework for a responsive and interactive user interface.
- **Hosting**: The site is hosted on **AWS S3** with **CloudFront** for global content delivery.  
- **Domain**: Managed via **Namecheap**.  
- **SSL Security**: Provided by **AWS Certificate Manager (ACM)** for secure connections.  


## Project Setup & Maintenance Guide

## Prerequisites  
Ensure you have the following installed:  
- **Node.js** (Recommended: `LTS` version)  
- **npm** or **yarn**  

## Getting Started  

### 1. Clone the Repository  
```sh
git clone https://github.com/thebuildershq/pacepard-website.git
cd pacepard-website
```

### 2. Install Dependencies  
Using npm:  
```sh
npm install
```
Or using yarn:  
```sh
yarn install
```

### 3. Set Up Environment Variables  
Duplicate `.env.example` and rename it to `.env`, then update the values accordingly.  

### 4. Start the Development Server  
```sh
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser.  

### 5. Run Tests  
```sh
npm test
```
Runs tests in interactive watch mode.  

### 6. Build for Production  
```sh
npm run build
```
Compiles the app into optimized production-ready files inside the `build/` folder.  

 
## Contributing  
1. Create a new branch for your feature or bug fix:  
   ```sh
   git checkout -b feature/your-feature-name
   ```
2. Make your changes and commit:  
   ```sh
   git commit -m "feature: add new feature"
   ```
   Or using yarn:  
    ```sh
    git commit -m "enhancement: add ehancement"
    ```
3. Push to your branch and open a PR to **staging**