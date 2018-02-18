function titleCase(str) {
  str = str.toLowerCase(str).split(' ');
  
    var uppStr = str.map(function(item){
    return item[0].toUpperCase() + item.slice(1);
  });
doneStr = uppStr.join(" ");

  return doneStr;
}


titleCase("I'm a little tea pot");
