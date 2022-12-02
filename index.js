import { getResistorOhms } from './resistor.js';
import { getColorValue } from './resistor.js';

const click0Click = document.querySelector('[color0Click]');
const click1Click = document.querySelector('[color1Click]');
const click2Click = document.querySelector('[color2Click]');
const click3Click = document.querySelector('[color3Click]');

/**
 * 
 * @param {Event} event - The event of clicking on a color
 * @param {id} bandNumber - The id of the element we want to edit
 * 
 * This function takes in the event of clicking on a color as well
 * as the band number we clicked on (i.e. Bands 1-4 [b0, b1, b2, b3]
 * in their respective order as seen on the HTML page). We grab the
 * color value of the color we clicked on, then we use the color value
 * as a parameter for the getColorValue function in order to get the
 * color's respective integer. We also use this color value to construct
 * the class name we need to use to replace the old class name with such
 * that the color changes accordingly to our selection. Finally, we grab
 * all the color values, put them into an object, and use that object as a
 * parameter for the getResistorOhms function. The returned value of this
 * function will be used to replace the old resistor value string.
 */
function bandChange(event, bandNumber) {
    let colorVal = null;
    let band = "band ";
    if (event.target.matches("div")){
        colorVal = event.target.innerHTML;
        band += colorVal;
        document.getElementById(bandNumber).className = band;
    }

    var b0 = document.getElementById("b0").className.split(" ");
    var b1 = document.getElementById("b1").className.split(" ");
    var b2 = document.getElementById("b2").className.split(" ");
    var b3 = document.getElementById("b3").className.split(" ");

    const bandObject = {color1: b0[b0.length - 1], color2: b1[b1.length - 1], multiplier: b2[b2.length - 1], tolerance: b3[b3.length - 1]};
    let resistorValueString = getResistorOhms(bandObject);
    document.getElementById("answerString").textContent = resistorValueString;
    console.log(resistorValueString);
}

click0Click.addEventListener('click', e=>{
    bandChange(e, "b0");
});

click1Click.addEventListener('click', e=>{
    bandChange(e, "b1");
});

click2Click.addEventListener('click', e=>{
    bandChange(e, "b2");
});

click3Click.addEventListener('click', e=>{
    bandChange(e, "b3");
});