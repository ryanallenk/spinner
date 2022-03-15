let spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', "\n"]
let index = 0;

const spinner = () => {
  if (index < spinnerArray.length) {
    process.stdout.write(spinnerArray[index]);
    index ++;  
    setTimeout(spinner, 200);
  }
};
