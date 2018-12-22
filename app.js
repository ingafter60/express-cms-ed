// Load modules
const express = require('express'),
app  	= express(),
port 	= 3000

// Run server
app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
