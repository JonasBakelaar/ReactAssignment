export const handleConversion = (target) => {
    if(target.id === "meters") {
      // Convert current feet value to meters value specified, set both values
      return target.value * 3.37;
    } else {
      // Convert current feet value to meters value specified, set both values
      return target.value / 3.37;
    }
  }