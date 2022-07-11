"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Node_1 = require("./Node");
var Queue = /** @class */ (function () {
    function Queue() {
        this.length = 0;
    }
    Queue.prototype.add = function (value) {
        this.length++;
        var node = new Node_1.Node(value);
        if (this.head == undefined) {
            this.head = node;
            this.tail = this.head;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    };
    Queue.prototype.foreach = function (cb) {
        if (!this.head)
            return;
        var node = this.head;
        while (node != undefined) {
            cb(node.value);
            node = node.next;
        }
    };
    return Queue;
}());
exports.Queue = Queue;
var nums = new Queue();
for (var i = 100; i < 200; i += 5) {
    nums.add(i);
}
console.log("Foreach:");
nums.foreach(function (e) {
    console.log(e);
});
// let queue = new Queue()
//
// console.log(queue.length);
//
// queue.add("Robert")
// console.log(queue.length);
//
// queue.add("Carlos")
// console.log(queue.length);
//
//
// console.log("Foreach:");
// queue.foreach(e=>{
//   console.log(e);
// })
