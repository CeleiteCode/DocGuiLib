// This is all testing code if it isn't obvious enough

import HandleGui from "./core/Gui"
import ButtonElement from "./elements/Button"
import BoxElement from "./elements/Box"
import TextInputElement from "./elements/TextInput"
import ColorPickerElement from "./elements/ColorPicker"
import SliderElement from "./elements/Slider"
import SelectionElement from "./elements/Selection"
import SwitchComponent from "./elements/Switch"

const gui = new HandleGui().setCommand("testdoc")
const btn1 = new ButtonElement("test", false, 1, 5, 80, 8)
    .onMouseClickEvent(() => ChatLib.chat("test 1"))

const btn2 = new ButtonElement("test 2", true, 1, 15, 80, 8)
    .onMouseClickEvent(() => ChatLib.chat("test 2"), true)

const textInput = new TextInputElement("test 3", 1, 25, 80).onKeyTypeEvent((inputText) => {
    ChatLib.chat(inputText)
})

const pickColor = new ColorPickerElement("Hex color", 1, 35, 80, 8)

const slider = new SliderElement([0, 10, 0], 1, 50, 80, 8).onMouseDragEvent((x, y, button, component) => {
    ChatLib.chat(`slider test`)
})

// This is an example with the slider's built-in event being cancelled
const slider2 = new SliderElement([0, 10, 2], 1, 80, 100)
    .onMouseDragEvent((x, y, button, component) => {
        // you can make your custom animation for it here if you want to
        component.setX((x).pixel())
    }, true)
    .onMouseClickEvent(() => { // we also need to cancel the click event since this is for the on click custom event feature
        ChatLib.chat("something")
    }, true)

const selection = new SelectionElement(["a", "test", "same"], 1, 58, 80, 5)

const switchcomp = new SwitchComponent(false, "test 4", 1, 65, 80, 8)
    .onMouseClickEvent((comp) => ChatLib.chat(`component clicked ${comp}`))
    .onMouseEnterEvent((comp) => ChatLib.chat(`A: ${comp}`))
    .onMouseLeaveEvent((comp) => ChatLib.chat(`B: ${comp}`))

const element = new BoxElement()

element
    .setPosition(10, 10)
    .setText("testing block")
    .addButton([btn1, btn2, textInput, pickColor, slider, selection, switchcomp])

gui.draw(element)

/**
TODO:
change the [Button] and [Box] classes to either their own thing
or make them be able to set manual positions and stuff so others can use it
instead of the current system where it auto aligns with itself
\n
also add default initial values in the params of the components
so that the user can have a starting point in case they use it for config
\n
maybe make the user be able to click the color picker box to select
common colors from and whenever they want more custom ones just use the hex
\n
also make all components be able to have their own coloring on everything
text scale too in case this is needed
*/