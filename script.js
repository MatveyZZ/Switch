function myfunon() { 
    // Функция, которая вызывается при нажатии кнопки "ON"
    document.getElementById("bulb").src = "bulb-on.png"; 
    // Находит элемент с id "bulb" и изменяет его атрибут src на "bulb-on.png" (включенная лампочка)
}

function myfunoff() { 
    // Функция, которая вызывается при нажатии кнопки "OFF"
    document.getElementById("bulb").src = "bulb-off.png"; 
    // Находит элемент с id "bulb" и изменяет его атрибут src на "bulb-off.png" (выключенная лампочка)
}