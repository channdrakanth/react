import {setFilterText} from './Filter';

test('Should Genarate filter Genarator', () =>{
    const testObj = {text: 'MyTest'};
    const obj = setFilterText(testObj);
    expect(obj).toEqual({
        type: 'SET_FILTER_TEXT',
        text: testObj
    });
});