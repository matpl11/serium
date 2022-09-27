// Generator numeracji blankietów ścisłego zarachowania
// (C) 2022 matpl11. Kod dostępny na licencji GNU GPL v3

import ejs from 'ejs'

const iterateTemplate = async (start: number, quantity: number, digits: number, serie: string) => {
    let resp: string = '', realNum: string = ''
    for (var i = start; i < (start + quantity); i++) {
        realNum = i.toString()
        for (var j = digits - realNum.length; j > 0; j--) {
            realNum = '0' + realNum
        }
        resp += await ejs.renderFile('views/templates/blankiet.ejs', { serie: serie, num: realNum })
    }

    return resp
}

export { iterateTemplate }