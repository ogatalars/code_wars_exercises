// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends) {
  //your code here

  let listaAmigos = [];
  for (let i = 0; i < friends.length; i++) {
    if (
      friends[i].length <= 4 &&
      typeof friends[i] !== Number &&
      isNaN(friends[i]) !== false
    ) {
      listaAmigos.push(friends[i]);
    }
    console.log(listaAmigos);
  }
  return listaAmigos;
}
console.log(friend(["Ryan", "Kieran", "Mark", 1, "1"]));
