import fGreetNames from "./greetNames";

describe( 'Greet User Names', function () {
    it( 'should be called', function(){
        expect( fGreetNames('Elizabeth')).toBeCalled() ;
    }); 

    it( 'should return greetings with Hello', function(){
        expect( fGreetNames('')).toBe('Hello there!') ;
    }); 

    it( 'should return greetings with Hello', function(){
        expect( fGreetNames('JOSE')).toBe('HELLO JOSE!') ;
    }); 

    it( 'should return greetings with Hello', function(){
        expect( fGreetNames(['Jose', 'Pep'])).toBe('Hello, Jose, Pep') ;
    }); 

    it( 'should return greetings with Hello', function(){
        expect( fGreetNames(['Alex','Arsene','Jose','Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane') ;
    }); 
});

/*
describe.each([
    {name: 'Elizabeth', expected: 'Hello, Elizabeth!'},
    {name: '', expected: 'Hello there!'},
    {name: 'JOSE', expected: 'HELLO JOSE!'},
    {name: ['Jose', 'Pep'], expected: 'Hello, Jose, Pep'},
    {name: ['Alex','Arsene','Jose','Zidane'], expected: 'Hello, Alex, Arsene, Jose, Zidane'}
  ]) ('$name', ({name, expected}) => {

    it( 'should return Hello' , () => {
        expect(fGreetNames(name)).toBe(expected);
    });

} ); */