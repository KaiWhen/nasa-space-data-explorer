# NASA Space Data Explorer

A web app where you can explore some of NASA's data from their API: https://api.nasa.gov/

Developed with React, Express.js, Node.js.

Currently you can look at photos taken by NASA's Mars Rovers and InSight's Mars Weather Data.

### Visit the web app [here](https://nasa-space-data-explorer.vercel.app/)

### Endpoints used
- APOD (Astronomy Picture of the Day)
- Mars Rover Photos
- InSight: Mars Weather Service API

### Things to note
- Spirit and Opportunities' photos are unavailable/don't exist anymore.
- NASA discontinued the InSight Weather Service API in 2020.


## Installing and running locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### Build and install
- Clone the repo
```
git clone https://github.com/KaiWhen/nasa-space-data-explorer.git
cd nasa-space-data-explorer/
```

- Run the `build:all` command
```bash
npm run build:all
```

### Running in Dev Environment

#### 1. Set up environment variables
- Copy `.env.example` to `.env`
- Get your NASA API key from https://api.nasa.gov/
- Fill in the values:

```
PORT=3000
NASA_KEY=your_nasa_api_key_here
VITE_API_BASE_URL=http://localhost:3000
```

#### 2. Start the development servers (requires 2 terminals):

#### Terminal 1
```bash
npm run dev
```

#### Terminal 2
```bash
cd frontend/
npm run dev
```

#### 3. Open your browser to the localhost URL shown in Terminal 2's output


## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Express.js, Node.js
- **Deployment:** Vercel
