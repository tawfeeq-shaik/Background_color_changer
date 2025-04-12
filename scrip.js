function changeColor() {

    const colors = ["#ff9999", "#99ccff", "#99ff99", "#ffff99", "#cc99ff", "#ffcc99","RED" , "GREEN" , "BLACK" , "GREY" , "#946363" , "#a6e38e"];
    
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    
    document.body.style.backgroundColor = randomColor;
}