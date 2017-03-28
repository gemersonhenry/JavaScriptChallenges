function main() {
    var s_temp = "7 11".split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = "5 15".split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = "3 2".split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = "-2 2 1".split(' ');
    apple = apple.map(Number);
    orange = "5 -6".split(' ');
    orange = orange.map(Number);

    var FruitOfHome = function (s, t, a, b) {
        var _leftHome = s;
        var _rightHome = t;
        var _appleTree = a;
        var _orangeTree = b;
        var _numOfApple = 0;
        var _numOfOrange = 0;
        var _positionFruit;
        var init = {};

        init.positionTemp = function (fruit, distance) {
            if ( fruit=='apple' ) {
                _positionFruit = _appleTree + distance;
            } else if ( fruit=='orange' ) {
                _positionFruit = _orangeTree + distance;
            }
            
        }
        init.validatePosition = function () {
            return (_positionFruit >=_leftHome && _positionFruit <= _rightHome) ? true : false;
        }
        init.validateHome = function (fruit) {
            if ( init.validatePosition() && fruit=='apple' ) {
                _numOfApple++;
            } else if ( init.validatePosition() && fruit=='orange' ) {
                _numOfOrange++;
            }
        }
        init.getNumOfApple = function () {
            return _numOfApple;
        }
        init.getNumOfOrange = function () {
            return _numOfOrange;
        }

        return init;
    }

    var x = new FruitOfHome(s, t, a, b);
    for (var i = 0; i < apple.length; i++) {
        x.positionTemp('apple', apple[i]);
        x.validateHome('apple');
    }
    for (var i = 0; i < orange.length; i++) {
        x.positionTemp('orange', orange[i]);
        x.validateHome('orange');
    }

    console.log(x.getNumOfApple());
    console.log(x.getNumOfOrange());
}

main();