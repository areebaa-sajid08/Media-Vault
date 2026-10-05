// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from 'react-toastify';

// const initialState = {
//     items: JSON.parse(localStorage.getItem('collection')) || []
// }
// const collectionSlice = createSlice({
//     name: 'collection',
//     initialState,
//     reducers: {
//         addCollection: (state, action) => {
//             const exist = state.items.find(
//                 item => item.id === action.payload.id
//             )
//             if (!exist) {
//                 state.items.push(action.payload)
//                 localStorage.setItem('collection', JSON.stringify(state.items))
//             }
//         },

//         removeCollection: (state, action) => {
//             state.items = state.items.filter(
//                 item => item.id !== action.payload
//             )
//             localStorage.setItem('collection', JSON.stringify(state.items))
//         },
//         clearCollection: (state, action) => {
//             state.items = []
//             localStorage.removeItem('collection')
//         },
//         addToast: () => {
//             toast.success('ADDED TO COLLECTION!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: false,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//                 transition: Bounce,
//             });
//         },
//         removeToast: () => {
//             toast.error('REMOVE FROM COLLECTION!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: false,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//                 transition: Bounce,
//             });
//         }
//     }
// })

// export const { addCollection, removeCollection, clearCollection, addToast, removeToast } = collectionSlice.actions
// export default collectionSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem('collection')) || [],
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const exist = state.items.find(item => item.id === action.payload.id);
      if (!exist) {
        state.items.push(action.payload);
        localStorage.setItem('collection', JSON.stringify(state.items));
      }
    },

    removeCollection: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('collection', JSON.stringify(state.items));
    },

    clearCollection: (state) => {
      state.items = [];
      localStorage.setItem('collection', JSON.stringify([]));
    },
  },
});

export const { addCollection, removeCollection, clearCollection } = collectionSlice.actions;
export default collectionSlice.reducer;