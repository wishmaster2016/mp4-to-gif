# Backend - MP4 to GIF Conversion Service

This backend service provides an API to convert MP4 files to GIF format using [Node.js](https://nodejs.org/) and TypeScript. This project leverages `fluent-ffmpeg` for handling video file conversions.

## Prerequisites

- Node.js version 20.0.0 or higher
- [FFmpeg](https://ffmpeg.org/) installed and available in your system's PATH, as required by `fluent-ffmpeg`.

## Getting Started

To set up and run the project locally, follow these steps:

### 1. Install Dependencies

Run `npm install` to install the required dependencies as specified in `package.json`.

### 2. Development Server

To start the development server, use the command:

```bash
npm run dev
```

This will start the server with `ts-node` on the default port (e.g., `http://localhost:3000`).

### 3. Production Build

To create a production build, run:

```bash
npm run build
```

This command will transpile TypeScript files into JavaScript, placing the output in the `dist/` directory.

### 4. Start Production Server

After building, start the server in production mode using:

```bash
npm start
```

This will run the `dist/app.js` file using Node.js.
