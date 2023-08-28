import axios from "axios";

export const daMua = async(userId, product_Id) => {
  try{
    const userID = userId;
    const productId = product_Id;
    const completeOrders = await axios.get(`${process.env.REACT_APP_API_URL}order/find/${userID}`, {
      params: {
        status: "completed", // Replace "completed" with the desired status
      },
    });
    const completeCarts = await axios.get(`${process.env.REACT_APP_API_URL}cart/find/${userID}`, {
      params: {
        status: "completed", // Replace "completed" with the desired status
      },
    })
    if (completeCarts|| completeOrders) {
      const cartsWithDesiredProduct = [];

      completeCarts.data.forEach((cart) => {
        const matchingProduct = cart.products.find((product) => product.productId === productId);
        if (matchingProduct) {
          cartsWithDesiredProduct.push(cart);
        }
      });
          for (let i = 0; i < cartsWithDesiredProduct.length; i++) {
          const id = cartsWithDesiredProduct[i]._id;
          if (completeOrders.data.find((item) => item.cartId === id)) {
            return true;
          }
        }
        return false;
    }

    // const hasProduct = completeCarts.data.find((item) => {
    //   return item.products.some((product) => product.productId === productId);
    // });
    // if (completeCarts|| completeOrders) {
    //     const A1 = completeCarts.data;
    //     const A2 = completeOrders.data;
    //     for (let i = 0; i < A1.length; i++) {
    //       const id = A1[i]._id;
    //       if (A2.find((item) => item.cartId === id)) {
    //         return true;
    //       }
    //     }
    //     return false;
    // }
  }catch(err){
    throw new Error('Failed to fetch commet');
  }
    
  }