import { apiSlice } from "@/redux/apiSlice";
const ORDER_URL = "/api/orders";

const getOrderSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserOrderHistory: builder.query({
      query: ({ token, page }) => ({
        url: `${ORDER_URL}/user/histories?page=${page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    // view one order... to be call at the order history page
    getOneUserOrderHistory: builder.query({
      query: ({ orderId, token }) => ({
        url: `${ORDER_URL}/${orderId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    // Check out cart... to be called at the the cart page
    postCartCheckout: builder.query({
      query: ({ payLoad, token }) => ({
        url: `/api/wallet/fund-wallet`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payLoad),
      }),
    }),
  }),
});

export const {
  useGetUserOrderHistoryQuery,
  useGetOneUserOrderHistoryQuery,
  usePostCartCheckoutQuery,
} = getOrderSlice;

// // // // // // // // // // // One order history, it should be in the order history page
// const {data: oneUserOrder, isFetching: isFetchingOneUserOrder, isLoading: isLoadingOneUserOrder} = useGetOneUserOrderHistoryQuery({
//   orderId: "selectedItem.id",
//   token: auth.token
// })
// useEffect(() => {
//   try {
//     if (isFetchingHistory || isLoadingHistorry) return;
//     console.log("from hook the order history", userOrderHistoryData);
//     setUserOrderHistory(userOrderHistoryData);
//   } catch (err) {
//     console.log("user order history erro", err);
//   }
// }, [isLoadingHistorry, isFetchingHistory]);

// body "cartId":"ux91diji2dex209s",
// "payment_method":"card",
// "deliveryInfo":{
//     "name": "Lawal Taiwo",
//     "phone": "09033024943",
//     "address": "Moniya Ibadan"
// }
