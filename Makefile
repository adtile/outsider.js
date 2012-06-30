all: minify

minify:
	@@uglifyjs outsider.js > outsider.min.js
	@@echo "Minified outsider.js into outsider.min.js"
