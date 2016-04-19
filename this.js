var Gant = {
    printFirstName: function(){
        console.log("They call me Gant");
        console.log(this === Gant);
    
    }
};
Gant.printFirstName();

//Default calling context is worldwide
function imthebest(){
    console.log("\ni am the best");
    console.log(this === global);
}
imthebest();