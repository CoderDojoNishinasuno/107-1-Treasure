radio.setGroup(2)
radio.setTransmitPower(1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    radio.sendNumber(0)
    basic.pause(200)
})
