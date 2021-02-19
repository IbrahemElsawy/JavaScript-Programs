var bits = ['0', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '0'];

var i;

var afterStuffing = "";

var afterStuffingArr = [];

var count = 0;

for (i = 0; i < bits.length; i++) {

    if (bits[i] == '1') {

        count++;

        if (count == 6) {

            afterStuffingArr.push('0');

            count = 0;

        }

    }
    else {

        count = 0;

    }

    afterStuffingArr.push(bits[i]);

}

afterFraming = '0 1 1 1 1 1 1 0 ' + afterStuffingArr.join(' ') + ' 0 1 1 1 1 1 0';

console.log ('Before Stuffing: '+ bits.join(' ') + ' -- ' + bits.length + ' characters');
console.log ('After Stuffing: ' + afterStuffingArr.join(' ') + ' -- ' + afterStuffingArr.length + ' characters');
console.log ('After framing:' + afterFraming);
