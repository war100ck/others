const path = require('path')
const fs = require('fs')

		let result = []
		let basePath = require.resolve('tera-data')
		if (path.basename(basePath) === 'package.json') {
			basePath = path.dirname(basePath)
		}
		let defPath = path.join(basePath, 'protocol')
		let defFiles = fs.readdirSync(defPath)
		for (let file of defFiles) {
			let name = file.match(/[a-zA-Z_]+/g)
			
			if (!result.includes(name[0])) {
				result.push(name[0])
			} else {
				console.log(name[0])
			}
			
			// let fullpath = path.join(defPath, file)

			// let parsedName = path.basename(file).match(/^(\w+)\.(\d+)\.def$/)
			// console.log(parsedName)
			// if (!parsedName) continue
			// if ( !name.includes(parsedName) ) continue
			// let name = parsedName[1]
			// result.push(name)
		}
		
// console.log(result)
	