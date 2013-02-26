var fs = require('fs'),
	production = process.env.NODE_ENV === 'production',
	map;

if (production) {
	map = JSON.parse(fs.readFileSync('aspa.json', 'utf8'));
}

/**
 * Utility method to get asset path.
 */
exports.getAssetPath = function(asset) {
	if (production) {
		asset = map[asset];
	}
	return asset;
};

/**
 * Connect middleware to adjust response headers for GZIPed assets.
 */
exports.adjustResponseHeaders = function(req, res, next) {
	if (req.path.slice(-3) === '.gz') {
		res.set('Content-Encoding', 'gzip');
		if (req.path.slice(-7, -3) === '.css') {
			res.set('Content-Type', 'text/css');
		} else if (req.path.slice(-6, -3) === '.js') {
			res.set('Content-Type', 'application/javascript');
		}
	}
	return next();
};
