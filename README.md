# Webpack 4 issue

    npm i
    npm start

Check console and there are two instances:

    singleton
    entryA.ts:4 entryA
    entryA.ts:5 singletonA 0.5400492986287448
    singleton.ts:12 singleton
    entryB.ts:4 entryB
    entryB.ts:5 singletonB 0.692984791940229

# Try to enable

    // optimization: {
	// 	runtimeChunk: 'single'
	// },

in webpack.config.js and try to run `npm start`, application is not running.



## Another problem is that I want to create library on `window` using this:

    library: 'app',
    libraryTarget: 'window'

but if I write in console: `window.app` there is only entry `testA`
