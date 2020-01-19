let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');

const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        return this;
    },
    next(id) {
        if (this[id] === undefined) {
            this[id] = 0;
        }
        if (this[id] <= this.data.length) {
            return {
                value: this.data[this[id]++],
                done: false,
            }
        } else {
            this[id] = 0;
            return {
                done: true,
            }
        }
    },
};

const changeStyle = id => event => {
    event.target.style.color = colors.next(id).value;
};


text1.addEventListener('click', changeStyle(Symbol()));
text2.addEventListener('click', changeStyle(Symbol()));
text3.addEventListener('click', changeStyle(Symbol()));


//////////////////////////////////////////////////////////////////////

const data = [4, 56, 33, 42, 15];

function bubbleSort () {
    for (let i = 0; i < data.length - 1; i++) {
        let f = 0;
            for (let i = 0; i < data.length - 1; i++ ) {
                if (data[i] > data[i + 1]) {
                    let arr = data[i];
                    data[i] = data[i + 1];
                    data[i + 1] = arr;
                    f++;
                }
            }
                if(f === 0) break;
            }
        return data;
    };

console.log(data);
console.log(bubbleSort());