/**
 * Function to generate a month name from a month number.
 *
 * @param {number} monthNumber - The month number to convert to a name.
 * @returns {string} The name of the month corresponding to the given month number, or "Invalid month number" if the month number is out of range.
 */
export const getMonthName = (monthNumber) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[monthNumber] || "Invalid month number";
};

/**
 * Function to generate monthly product statistics.
 *
 * @param {Array<Object>} products - An array of product objects, each with a 'createdAt' property containing a Date object representing the creation date of the product.
 * @returns {Array<number>} An array of 12 numbers representing the monthly counts of products created.
 */
export const generateMonthlyProductsStats = (products) => {
  const monthlyTrashCounts = Array(12).fill(0);
  products.forEach(product => {
    const month = new Date(product.createdAt).getMonth();
    monthlyTrashCounts[month]++;
  });
  return monthlyTrashCounts;
};

/**
 * Function to filter reports per month.
 *
 * @param {Array<Object>} products - An array of product objects, each with a 'createdAt' property containing a Date object representing the creation date of the product.
 * @param {number} month - The month number to filter reports for.
 * @returns {Object} An object containing the following properties:
 * - filteredProducts: The number of products created in the specified month.
 * - filteredSoldTrash: The number of products sold in the specified month.
 * - productInKigali: The number of products created in the specified month in Kigali City.
 * - productInNorth: The number of products created in the specified month in the North province.
 * - productInSouth: The number of products created in the specified month in the South province.
 * - productInWest: The number of products created in the specified month in the West province.
 * - productInEast: The number of products created in the specified month in the East province.
 */
export const filterReportsPerMonth = (products, month) => {
  console.log(month);
  let filteredProducts = [];
  let filteredSoldTrash = [];
  let productInKigali = [];
  let productInNorth = [];
  let productInSouth = [];
  let productInWest = [];
  let productInEast = [];

  // Filtering by report period
  filteredProducts = products.filter((product) => {
    var date = new Date(product.createdAt);
    return date.getMonth() === new Date().getMonth();
  });
  filteredSoldTrash = products.filter((product) => {
    var date = new Date(product.createdAt);
    return date.getMonth() === new Date().getMonth() && product.paid === true;
  });

  // Filter by Province
  productInKigali = filteredProducts.filter((product) => { 
    var date = new Date(product.createdAt);
    return date.getMonth() === new Date().getMonth() && product.province === 'Kigali City'; 
  });
  productInNorth = filteredProducts.filter((product) => { 
    var date = new Date(product.createdAt);
    return date.getMonth() === new Date().getMonth() && product.province === 'North'; 
  });
  productInSouth = filteredProducts.filter((product) => { 
    var date = new Date(product.createdAt);
    return date.getMonth() === new Date().getMonth() && product.province === 'South'; 
  });
  productInWest = filteredProducts.filter((product) => { 
    var date = new Date(product.createdAt);
    return date.getMonth() === new Date().getMonth() && product.province === 'West'; 
  });
  productInEast = filteredProducts.filter((product) => { 
    var date = new Date(product.createdAt);
    return date.getMonth() === new Date().getMonth() && product.province === 'East'; 
  });

  return { 
    filteredProducts: filteredSoldTrash.length, 
    filteredSoldTrash: filteredSoldTrash.length, 
    productInKigali: productInKigali.length, 
    productInNorth: productInNorth.length, 
    productInSouth: productInSouth.length, 
    productInWest: productInWest.length, 
    productInEast: productInEast.length
  };
};

/**
 * Function to filter reports per year.
 *
 * @param {Array<Object>} products - An array of product objects, each with a 'createdAt' property containing a Date object representing the creation date of the product.
 * @param {number} year - The year to filter reports for.
 * @returns {Object} An object containing the following properties:
 * - filteredProducts: The number of products created in the specified year.
 * - filteredSoldTrash: The number of products sold in the specified year.
 * - productInKigali: The number of products created in the specified year in Kigali City.
 * - productInNorth: The number of products created in the specified year in the North province.
 * - productInSouth: The number of products created in the specified year in the South province.
 * - productInWest: The number of products created in the specified year in the West province.
 * - productInEast: The number of products created in the specified year in the East province.
 */
export const filterReportsPerYear = (products, year) => {
  let filteredProducts = [];
  let filteredSoldTrash = [];
  let productInKigali = [];
  let productInNorth = [];
  let productInSouth = [];
  let productInWest = [];
  let productInEast = [];

  // Filter by year
  filteredProducts = products.filter((product) => {
    var date = new Date(product.createdAt);
    return date.getFullYear() === year;
  });
  filteredSoldTrash = products.filter((product) => {
    var date = new Date(product.createdAt);
    return date.getFullYear() === year && product.paid;
  });

  // Filter by Province
  productInKigali = filteredProducts.filter((product) => { 
    var date = new Date(product.createdAt);
    return date.getFullYear() === year && product.province === 'Kigali City'; 
  });
  productInNorth = filteredProducts.filter((product) => { 
    var date = new Date(product.createdAt);
    return date.getFullYear() === year && product.province === 'North'; 
  });
  productInSouth = filteredProducts.filter((product) => { 
    var date = new Date(product.createdAt);
    return date.getFullYear() === year && product.province === 'South'; 
  });
  productInWest = filteredProducts.filter((product) => {
    var date = new Date(product.createdAt);
    return date.getFullYear() === year && product.province === 'West'; 
  });
  productInEast = filteredProducts.filter((product) => {
    var date = new Date(product.createdAt);
    return date.getFullYear() === year && product.province === 'East'; 
  });

  return { 
    filteredProducts: filteredProducts.length, 
    filteredSoldTrash: filteredSoldTrash.length, 
    productInKigali: productInKigali.length, 
    productInNorth: productInNorth.length, 
    productInSouth: productInSouth.length, 
    productInWest: productInWest.length, 
    productInEast: productInEast.length
  };
};