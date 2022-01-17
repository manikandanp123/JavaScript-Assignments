// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    mass=parseInt(mass);
    height=parseInt(height);

    if(mass>0 && height>0){
        return parseInt(mass/(height*height))
    }else {
        return "INVALID INPUT"
    }
}

module.exports = BMICalculator;
