let txt = ''
let num = ''

let cal = []

function getId(id) {

    const screen = document.getElementById('screen')
    if (id === 'ac') {
        cal = []
        txt = ''
        num = ''
        screen.innerHTML = txt
    }
    else if (id >= '0' && id <= '9') {
        num += id
        txt += id
        screen.innerHTML = txt
    }
    else {
        if (id !== '=') {
            txt += id
            cal.push(num)
            cal.push(id)
            num = ''
            screen.innerHTML = txt
        }
        else {
            cal.push(num)
            let sum = Number(cal[0])
            for (let i = 1; i < cal.length; i++) {
                if (cal[i] === '+')
                    sum += Number(cal[i + 1])
                else if (cal[i] === '-')
                    sum -= Number(cal[i + 1])
                else if (cal[i] === '*')
                    sum *= Number(cal[i + 1])
                else if (cal[i] === '/')
                    sum /= Number(cal[i + 1])
            }
            screen.innerHTML = sum
            num = ''
            txt = sum
        }
    }
}