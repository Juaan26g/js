let objeto = {

    vocal1: 'á',
    vocal2: 'é',
    vocal3: 'í',
    vocal4: 'ó',
    vocal5: 'ú'
}


for (let x of Object.values(objeto)) {


}

console.log(x + ' - % ' + x.codePointAt(0).toString(16).toUpperCase())
