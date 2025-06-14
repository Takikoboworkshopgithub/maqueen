let main_buttons_number = 0
let UD = 0
let LR = 0
let Velocity = 0
radio.onReceivedNumber(function (receivedNumber) {
    main_buttons_number = receivedNumber
    if (main_buttons_number == 4) {
        music.setBuiltInSpeakerEnabled(true)
        music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
        music.setBuiltInSpeakerEnabled(false)
    } else {
        if (main_buttons_number == 8) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        } else {
            if (main_buttons_number == 2) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 10)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 10)
            } else {
                if (main_buttons_number == 6) {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
                }
            }
        }
    }
})
radio.onReceivedValue(function (name, value) {
    if (Math.abs(value) < 2) {
        UD = 0
        LR = 0
    } else {
        if (name == "UD") {
            UD = value
        }
        if (name == "LR") {
            LR = value
        }
    }
})
basic.forever(function () {
    Velocity = Math.sqrt(UD * UD + LR * LR) / 2.4
})
basic.forever(function () {
    radio.setGroup(1)
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (0 < UD) {
        if (0 <= LR) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, UD + LR)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, UD)
        }
        if (LR < 0) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, UD + 0)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, UD - LR)
        }
    }
})
basic.forever(function () {
    if (UD < 0) {
        if (0 <= LR) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, -1 * UD + LR)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, -1 * UD - 0)
        }
        if (LR < 0) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, -1 * UD + 0)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, -1 * UD - LR)
        }
    }
})
basic.forever(function () {
	
})
