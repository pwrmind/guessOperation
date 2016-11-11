function guessOperation(inputValue, outputValue) {
    var _multiplication = 0; // a×b
    var _division = 0; // a÷b
    var _addition = 0; // a+b
    var _subtraction = 0; // a−b
    var _resultValue = [];
    var _resultValueToString = ["Addition", "Subtraction", "Multiplication", "Division"];

    var _inputValue = inputValue || [];
    var _outputValue = outputValue || [];

    var _resultBlock = document.querySelector("#result");
    
    for(var i = 0; i < _outputValue.length; i++) {
        for(var j = 0; j < _inputValue.length; j++) {
            for(var k = 0; k < _inputValue.length; k++) {
                if(j === k)
                    continue;
                if(_inputValue[i][j] + _inputValue[i][k] === _outputValue[i]) {
                    _addition++;
                }
                if(_inputValue[i][j] - _inputValue[i][k] === _outputValue[i]) {
                    _subtraction++;
                }
                if(_inputValue[i][j] * _inputValue[i][k] === _outputValue[i]) {
                    _multiplication++;
                }
                if(_inputValue[i][j] / _inputValue[i][k] === _outputValue[i]) {
                    _division++;
                }
            }
        }
    }

    _resultValue = [_addition, _subtraction, _multiplication, _division];

    switch(_resultValue.indexOf(Math.max.apply(null, _resultValue))) {
        case 0:
            return function(x, y) {
                return x + y;
            };
        case 1:
            return function(x, y) {
                return x - y;
            };
        case 2:
            return function(x, y) {
                return x * y;
            };
        case 3:
            return function(x, y) {
                return x / y;
            };
        default:
            return 0;
    }
}
