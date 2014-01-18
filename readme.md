# ASPA-Express
[![NPM version](https://badge.fury.io/js/aspa-express.png)](http://badge.fury.io/js/aspa-express)

ASPA-Express is a simple, lightweight, **dependency-free** Connect module for using web assets packaged by ASPA ( [github](https://github.com/icflorescu/aspa) | [npm](https://npmjs.org/package/aspa) ) with [Express](http://expressjs.com/).

## End of Life Notice - January 2014
If you like using ASPA and ASPA-Express, please consider switching to [ASPAX](https://github.com/icflorescu/aspax) for cleaner YML syntax, a smart plugin system to handle various source file types, and automatic watching of included files (i.e. Stylus `@import`s). Have a look at [aspax.github.io](aspax.github.io) for more information.

ASPA and ASPA-Express will remain in the npm repository, but they will no longer be maintained/updated.

---

Because ASPA is a stand-alone command-line utility used during development / before deployment, you **don't need** to add dependencies like Stylus, CoffeeScript, CSSO, Uglify-js (etc.) to your web application projects.

Another benefit of using ASPA-Express is that, while you could certainly use [the default compress middleware](http://www.senchalabs.org/connect/compress.html) to serve compressed assets at runtime, it's usually better not to burden the application server with this task and have your assets compressed **before deployment**.
Virtually all current browsers know how to handle gzipped assets, provided they are served with the appropriate content headers.

The combination of ASPA + ASPA-Express enables you to do just that - **optimize your client-side code deployment size, while maintaining a small-footprint server application size**.

Make sure to check [the docs here](https://github.com/icflorescu/aspa) for more information on how to generate the asset packages.

![ASPA](https://raw.github.com/icflorescu/aspa/master/aspa.png)

## Usage

I. Add dependency in `package.json`:

	...
	"dependencies": {
		...
		"aspa-express": "*",
		...
	}
	...

II. In `app.js`:

	...
	// Require the module
	var aspa = require('aspa-express');
	...
	// Add getAssetPath() method to app.locals, so you can use it in template files.
	// I'm choosing to alias getAssetPath() to asset() here,
	//   but you can use anything that makes sense to you.
	app.locals.asset = aspa.getAssetPath;
	...
	app.configure('production', function() {
		// Add header-adjusting middleware in production mode.
		app.use(aspa.adjustResponseHeaders());
	});
	...

III. Then, in your template files (a .jade in my example here) you can use `getAssetPath()` method (or whatever fancy alias name you've choosen for it) to refer the assets:

	doctype 5
	html
	  head
	    title The Next Facebook
	    link(rel="shortcut icon", href="favicon.ico")
	    link(rel="stylesheet", href=asset('css/main.css'))
	  body
	    block content
	    script(src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
	    script(src=asset('js/main.js'))

**Warning:
Don't forget to keep your asset files in a separate folder outside your main web application and _don't put anything directly in the public web folder, as it will be overwritten during the build process!_...
Read more about how the asset packager works [here](https://github.com/icflorescu/aspa).**

## Contributing

If you find a bug or have an idea about a new feature, please don't be shy, just issue a pull request.

## Endorsing the author

If you find this module useful, please endorse me on Coderwall using the link below! Thanks :-)

[![endorse](https://api.coderwall.com/icflorescu/endorsecount.png)](https://coderwall.com/icflorescu)

## License

(The MIT License)

Copyright (c) 2013 Ionut-Cristian Florescu &lt;ionut.florescu@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
