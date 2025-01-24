// map =is apply a caclulation on each element
// reduce - turn a sequance into a final calculation
//find - search for an element in a sequence
//filter - filter out selected elements from a sequence
//

class Thing {
    doit() {
        //does the stuff
    }
}

let that = new Thing();
that.doit();

let x = [ 1, 2, 3, 4];
y = x.map((i) => i + 10);
console.log(x)
console.log(y)

 z = x.reduce ((acc, i) => acc *= i);
 console.log(z)
  
 v = x.find((i) => i ==4)
 console.log(v);

  w = x.filter((i) => i % 2 == 1);

  console.log(w);

//adder(x);