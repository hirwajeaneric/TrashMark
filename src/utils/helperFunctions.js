export const getMonthName = (monthNumber) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[monthNumber] || "Invalid month number";
}

// Function to generate monthly product statistics
export const generateMonthlyProductsStats = (products) => {
  const monthlyTrashCounts = Array(12).fill(0);
  products.forEach(product => {
    const month = new Date(product.createdAt).getMonth();
    monthlyTrashCounts[month]++;
  });
  return monthlyTrashCounts;
}