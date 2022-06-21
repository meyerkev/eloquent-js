class Group {
    constructor() {
        this.members = [];
    }
    add(member) {
        if (this.has(member)) {
            return;
        }
        this.members.push(member);
    }
    delete(member) {
        this.members = this.members.filter(m => m !== member);
    }
    has(member) {
        return this.members.includes(member);
    }
    static from(...members) {
        let group = new Group();
        members.forEach(member => group.add(member));
        return group;
    }
    *[Symbol.iterator]() {
        let index = 0;
        while (index < this.members.length) {
            yield this.members[index];
            index++;
        }
    }
}
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.index = -1; // Notice the ++ in next()
    }
    next() {
        let member = this.group.members[++this.index];
        return { value: member, done: member === undefined };
    }
}
function main() {
    let group = new Group();
    group.add('a');
    group.add('b');
    group.add('c');
    for (let member of group) {
        console.log(member);
    }
    console.log(group.has('a'));
    console.log(group.has('d'));
    console.log(group.has('b'));
    group.delete('b');
    console.log(group.has('b'));
    let group2 = Group.from('x', 'y', 'z');
    console.log(group2.has('x'));
    console.log(group2.has('y'));
    console.log(group2.has('z'));
}
main();
export {};
