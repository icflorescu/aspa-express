# ASPA-Express

ASPA-Express is a simple, lightweight, **dependency-free** Connect module for using web assets packaged by ASPA ( [github](https://github.com/icflorescu/aspa) | [npm](https://npmjs.org/package/aspa) ) with [Express](http://expressjs.com/).  
Because ASPA is a stand-alone command-line utility used during development / before deployment, you **don't need** to add dependencies like Stylus, CoffeeScript, CSSO, Uglify-js (etc.) to your web application projects.

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

## License

(The MIT License)

Copyright (c) 2013 Ionut-Cristian Florescu &lt;ionut.florescu@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
