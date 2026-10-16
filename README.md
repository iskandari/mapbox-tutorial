# Mapbox tutorial

Four small maps to get you started on Windows.

## 1. Get ready

- [Create a Mapbox account](https://account.mapbox.com/auth/signup/). After signing in, open [Access tokens](https://account.mapbox.com/access-tokens/) and copy your **default public token** (it starts with `pk.`).
- [Install Python for Windows](https://www.python.org/downloads/windows/) using the **Python install manager**.
- On this GitHub page, click **Code → Download ZIP**. Right-click the downloaded ZIP, choose **Extract All**, and open the extracted folder containing this README.

## 2. Start the server

In that folder, click File Explorer’s address bar, type `cmd`, and press **Enter**.

Paste this command and press **Enter**:

```bat
py -m http.server 8000 --bind 127.0.0.1
```

Leave that window open. Open **http://127.0.0.1:8000** in Edge or Chrome.

Paste your Mapbox public token into the box and click **Save token**. Then choose an example.

## 3. Try the maps

| Example | Try this |
| --- | --- |
| 1. Basic map | Drag to move; scroll to zoom. |
| 2. Markers | Find the two colored pins. |
| 3. Popup | Click the pin to read its message. |
| 4. Line | Follow the blue line across the map. |

To experiment, right-click an example’s `.html` file and open it with **Notepad**. Change a color, the `zoom` number, or the popup message. Save, then refresh your browser. Coordinates are always **[longitude, latitude]**.

When finished, press **Ctrl+C** in the command window to stop the server.

## If something goes wrong

- **`py` is not recognized:** finish installing Python, then close and reopen the command window.
- **The browser cannot connect:** keep the server window open and use the exact address above.
- **The map is blank:** check your internet connection and public token. Try the [original Mapbox map](https://docs.mapbox.com/mapbox-gl-js/example/simple-map/); if that is also blank, update Edge or Chrome and enable graphics acceleration in its settings.
- **Port 8000 is in use:** replace `8000` with `8001` in both the command and browser address.

Your token is saved only in this browser’s local storage; use a public `pk.` token, never a secret token.

## Where the examples come from

These are simplified adaptations of Mapbox’s [basic map](https://docs.mapbox.com/mapbox-gl-js/example/simple-map/), [markers](https://docs.mapbox.com/mapbox-gl-js/example/add-a-marker/), [marker popup](https://docs.mapbox.com/mapbox-gl-js/example/set-popup/), and [GeoJSON line](https://docs.mapbox.com/mapbox-gl-js/example/geojson-line/) examples. They use Mapbox GL JS 3.33.0 from Mapbox’s CDN. No extra Python packages or build tools are needed.

On a Mac, use `python3` instead of `py` in the server command.
