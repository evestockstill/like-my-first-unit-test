import isEven from '../is-even.js';
const test = QUnit.test;

// test('time to test!', function(assert) {
//  //Arrange
//  // Set up your parameters and expectations

//  //Act 
//  // Call the function you're testing and set the result to a const

//  //Assert
//  // What should the result be?
//     assert.equal(true, false);
// });
test('return true if number is 8', function(assert) {
    const number = 8;
    const expected = true;
 //Arrange
 // Set up your parameters and expectations
    const result = isEven(number);
 //Act 
 // Call the function you're testing and set the result to a const

 //Assert  (actual, expected)
 // What should the result be?
    assert.equal(result, expected);
});
test('return false if number is 3', function(assert) {
    const number = 3;
    const expected = false;
 //Arrange
 // Set up your parameters and expectations
    const result = isEven(number);
 //Act 
 // Call the function you're testing and set the result to a const

 //Assert  (actual, expected)
 // What should the result be?
    assert.equal(result, expected);
});