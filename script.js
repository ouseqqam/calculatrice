let txt = ''
let num = ''

let cal = []

let i = 0

function getId(id) {

    const screen = document.getElementById('screen')
    if (id === 'ac') {
        cal = []
        txt = ''
        num = ''
        screen.innerHTML = txt
    }
    else if (id >= '0' && id <= '9') {
        if (i == 1) {
            cal = []
            i = 0
            txt = ''
        }
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
            if (sum == 0) {
                cal = []
                i = 0
            }
            i = 1
            
        }
    }
}