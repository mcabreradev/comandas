const { Service } = require('feathers-nedb');

exports.Orders = class Orders extends Service {

  // async create(data, params) {
  //   const {name } = data;

  //   return super.create({
  //     name,
  //     created_at: new Date()
  //   }, params);
  // }

  async update(id, data, params) {
    const order = await super.get(id);

    return super.update(id, {
      ...order,
      ...data
    }, params);
  }
};
