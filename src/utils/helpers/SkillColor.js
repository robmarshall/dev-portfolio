import Color from 'color'
import colorContrast from 'color-contrast'

export function GetAccessibleBackColor(backColour) {
    let color = Color(backColour)

    let textColour = color.isLight() ? '#000' : '#fff'

    while (colorContrast(color.hex(), textColour) < 7) {
        if (textColour === '#000') {
            color = Color(color.lighten(0.1))
        } else {
            color = Color(color.darken(0.1))
        }
    }

    return color.hex()
}

export function GetCorrectTextColour(backColour) {
    let color = Color(backColour)
    return color.isLight() ? '#000' : '#fff'
}
