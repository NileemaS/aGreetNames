var fGreetNames = utils.load('./greetNames.js', 'fGreetNames');

describe( 'Greet User Names', function () {
    it( 'should be called', function(){
        expect( fGreetNames('Elizabeth')).toBeCalled() ;
    }); 
});

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

} );