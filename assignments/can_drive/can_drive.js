function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here

    if(hasDrivingLiscence==true && isTired==false && isSober==true){
        return "You can drive";
    }
    if(hasDrivingLiscence===true){
         if(isTired==true || isSober==false){
            return "You shouldn't drive";
         }
    }else{
        return "You cannot drive";
    }
}

module.exports = CanDrive;
