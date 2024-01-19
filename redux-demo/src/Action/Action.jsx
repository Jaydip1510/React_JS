// export const add = () => {
//     return {
//         type:'Increment'
//     }
// }

// export const sub = () => {
//     return {
//         type:'Decrement'
//     }
// }
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});