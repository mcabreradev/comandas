
export const create = (data, arr) => {
 return [data, ...arr];
};

export const update = (data, arr) => {
  return arr.map((item) => item._id === data._id ? { ...item, ...data}  : item);
 };

export const remove = (data, arr) => {
  return arr.filter( item => item._id !== data._id );
 };
