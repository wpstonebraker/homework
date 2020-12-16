function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
      var x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }
  
  function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
      const x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }
  
  function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
      var x = 'in block';  // x is a constant
      console.log(x);
    }
    console.log(x);
  }
  
  function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
      let x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }
  
  function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
      let x = 'in block';  
      console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
  }

  function madLib(verb, adj, noun) {
      console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`);
  }

  madLib('make', 'best', 'guac');

  function isSubstring(words, word) {
    return words.includes(word);
  }

  console.log(isSubstring("time to program", "time"));

  