# Angular2 NYC meetup

Slides: TODO

# See this application running

You can see the app running here:

http://andresdominguez.github.io/ng2nyc-meetup

# Instructions

#### Clone this repo

```shell
$ git clone https://github.com/andresdominguez/ng2nyc-meetup.git
```

#### Get TypeScript 1.5 beta and compile

```shell
$ cd ng2nyc-meetup
$ npm install -g typescript@^1.5.0-beta
$ tsc -w
```

The `-w` flag is for watch. It will compile the typescript files into
JavaScript (es5) files every time you make a change to the source
code.

#### Launch a server

Get `http-server` and launch the server.

```shell
$ npm install -g http-server
$ http-server -c-1
Starting up http-server, serving ./ on: http://0.0.0.0:8080
Hit CTRL-C to stop the server
```

The `-c-1` flag disables caching.

#### Open the app in your browser

Go to http://localhost:8080/
