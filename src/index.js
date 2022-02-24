module.exports = function check(str, bracketsConfig) {
    if (str.length%2!==0) 
	{
      		return false;
    }
    let a = str.length/2;
    while (a)  {
        for (let i of bracketsConfig) str = str.replace(i.join(''), '');
        a--;
    	}
  		  return !str;
	}
