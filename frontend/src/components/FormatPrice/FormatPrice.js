import React from "react";

const FormatPrice = ({ price }) => {
    // Format price to Vietnamese Dong (VND)
    const formattedPrice = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  
    return formattedPrice;
  }
  
export default FormatPrice;