const fGreetNames = (paraNames) => {
    //check all possible input names in parameter//
    if (paraNames === '' || paraNames == null || paraNames == 'Null') {
        return console.log( `Hello, there!`);
    }
    
    if (paraNames === paraNames.toUpperCase) return console.log( `HELLO, ${paraNames}!`) ;

    if (typeof (paraNames) == "object" ) {
        let strListNames = 'Hello, ' ;
        for (let i = 0; i < paraNames.length; i++){            
            strListNames += paraNames[i] ;
            if (i != paraNames.length - 1) strListNames += ", " ;
        }
        return console.log(strListNames);
    }
    paraNames = paraNames[0].toUpperCase() + paraNames.substring(1) ;
    return console.log(`Hello, ${paraNames}!`) ;
};