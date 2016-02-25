## Pre requisites ##

You will need `node` and `npm`

https://nodejs.org/

Once you have got them, run

```npm install```

In this directory

## Running Tests ##
### In node ###
```npm test```

#### Debugging ####
To run tests with a debugger, run the following then go to http://localhost:8282/debug?port=5858 in Chrome:

```npm install -g jasmine-node-debug```
```jasmine-node-debug```

Execution will initially be paused to allow you to add breakpoints.

### In the browser ###

```npm install -g webpack```

Then run:

```npm run-script webpack-test```

and open `_SpecRunner.html`

Every time you make a change you will have to run:

```npm run-script webpack-test```

And then refresh `_SpectRunner.html` in your browser window

#### Debugging #####
As you would in the browser normally, except all your output will be concatenated into a single file `bundle.js`

Happy developing!