# AstroHub

A web app for exploring astronomy content — real-time space news, ISS tracker, planetary data, and NASA APOD (Astronomy Picture of the Day).

## Features

- NASA APOD daily image feed
- ISS real-time location tracker
- Planet fact cards (solar system data)
- Space news aggregator (SpaceFlightNewsAPI)
- Dark mode UI

## Setup

```bash
git clone https://github.com/NadirAliOfficial/AstroHub
cd AstroHub
# Add your NASA API key in config.js
open index.html
```

## APIs Used

- [NASA APOD](https://api.nasa.gov/)
- [Open Notify ISS](http://open-notify.org/)
- [SpaceFlightNews API](https://spaceflightnewsapi.net/)

## Description

AstroHub is a client‑side JavaScript application that fetches and displays astronomy‑related data directly in the browser. It shows the NASA Astronomy Picture of the Day, the current position of the International Space Station, and provides quick access to space news and planetary facts.

## Requirements

- A modern web browser with JavaScript support.
- Internet connection to reach the external APIs.

## Installation

The project is a static web app; after cloning, simply open `index.html` in a browser. No additional build steps or package installations are required.

## Usage

Run the application by opening `index.html` (e.g., double‑click the file or use `open index.html` on macOS). The page will automatically load the APOD image and ISS location, updating the ISS data every 5 seconds.

## Project Structure

```
.gitignore
CONTRIBUTING.md
README.md
SECURITY.md
app.js        # Main JavaScript file that loads APOD and ISS data
index.html    # HTML entry point for the web app
```
