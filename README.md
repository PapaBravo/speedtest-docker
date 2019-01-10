# Speedtest Container

This container provides an API test the local internet speed.

## Run
Check out this repository and run the following commands in the folder.

### Local

Have a current NodeJS version (>8) installed. Check out this repository and run the following commands in the folder

```sh
npm install
npm start
```

### Docker
Have Docker installed and the deamon running.

```sh
docker build -t <your-name>/speedtest .
docker run -p 3000:3000 -d <your-name>/speedtest
```

### Docker Compose
Have docker-compose installed and the docker deamon running.

```sh
docker-compose up -d
```

### Use

Once the server is up and running, it provides two endpoints. On `localhost:3000` it provides its version and on `localhost:3000/speedtest` it provides a speedtest result as described [here](https://www.npmjs.com/package/speedtest-net#data). 

An example result is

```json
{
    "speeds": {
        "download": 62.063,
        "upload": 6.319,
        "originalDownload": 6835150,
        "originalUpload": 693505
    },
    "client": {
        "ip": "<some-ip4-adress>",
        "lat": 52.4586,
        "lon": 13.6362,
        "isp": "Deutsche Telekom AG",
        "isprating": 3.7,
        "rating": 0,
        "ispdlavg": 0,
        "ispulavg": 0,
        "country": "DE"
    },
    "server": {
        "host": "speed.syseleven.net",
        "lat": 52.5167,
        "lon": 13.3833,
        "location": "Berlin",
        "country": "Germany",
        "cc": "DE",
        "sponsor": "SysEleven GmbH",
        "distance": 18.3,
        "distanceMi": 11.37,
        "ping": 45.2,
        "id": "6417"
    }
}
```