const byteSize = (str) => {
  // write your code here
	let a = new Blob([str]);
	 return a.size;
};

// Do not change the code below
// const str = prompt("Enter some string.");
// alert(byteSize(str));
