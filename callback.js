let num = 10;

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
   
   
    if(i == 1 || i == num){
      document.writeln(j+' ')
    }else if(j == num - (i -1) || j == 1 || j == num){
      document.writeln(j+' ')
    }
    // document.writeln("\u00A0");
  }
  document.writeln("<br/>");
}