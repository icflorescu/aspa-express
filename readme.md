# ASPA-Express
ASPA-Express is an Express/Connect module for using web assets packaged by [ASPA](https://github.com/icflorescu/aspa).

Make sure to check [ASPA](https://github.com/icflorescu/aspa) for more information on how to generate asset packages.

![ASPA](https://raw.github.com/icflorescu/aspa/master/aspa.png)

## Usage

**Warning: Keep your asset files in a separate folder outside your main web application directory and _don't put anything directly in the public web folder, as it will be overwritten during the build process!_... Read more about it [here](https://github.com/icflorescu/aspa)**

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

III. Then, in your template files (a .jade file here) you can use `getAssetPath()` method (or whatever alias name you've choosen for it):

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


## License

(The MIT License)

Copyright (c) 2013 Ionut-Cristian Florescu &lt;ionut.florescu@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
