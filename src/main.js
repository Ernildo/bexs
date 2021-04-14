



// const Interface = require('./Interface')
// const CSV = require('./CSV')

// try {
//    const nameFile = process.argv[2]

//    const csv = CSV(nameFile)

//    const interface = Interface()

//    interface.on('get', ({ origin, destination }) => {
//       return csv.search(origin, destination)
//    });

//    interface.on('push', (infos) => {
//       return csv.insert(infos)
//    })

// } catch(e) {
//    console.log('Algum erro interno')
//    console.error(e)
// }