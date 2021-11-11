input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(255)
    basic.showIcon(IconNames.No)
})
basic.showString("Voting Machine")
radio.setGroup(4)
radio.setTransmitSerialNumber(true)
basic.forever(function () {
	
})
