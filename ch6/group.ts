export {};

class Group {
    members: any[];
    constructor() {
        this.members = [];
    }
    add(member: any) {
        if (this.has(member)) { return; }
        this.members.push(member);
    }
    delete(member: any) {  // delete(member: any) {
        this.members = this.members.filter(m => m !== member);
    }
    has(member: any) {
        return this.members.includes(member);
    }
    static from(...members: any[]) {
        let group = new Group();
        members.forEach(member => group.add(member));
        return group;
    }
    *[Symbol.iterator]() : IterableIterator<any> {
        let index: number = 0;
        while (index < this.members.length) {
            yield this.members[index];
            index++;
        }
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