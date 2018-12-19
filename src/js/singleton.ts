class Singleton {
    private test = Math.random();

    public getNumber() {
        return this.test;
    }
}
console.log('singleton');

export const singleton = new Singleton();
