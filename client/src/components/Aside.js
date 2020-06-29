import React, { useState, useEffect } from 'react';
import { Container } from 'bloomer';
import { Orders } from '../services'
import { create, update, remove } from '../utils/crud'

function Aside() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchOrders() {
    const res = await Orders.find({
      query: {
        $sort: { created_at: -1 },
        $limit: 50
        }
      }
    );
    const data = !!res.data.length ? res.data : [];
    setOrders(data)
  }

  Orders
    .on('created', order => setOrders(create(order, orders)))
    .on('updated', order => setOrders(update(order, orders)))
    .on('removed', order => setOrders(remove(order, orders)))

  return (
    <aside className="aside has-background-info has-text-light">
      <Container>
        <p>
          Lista de orders:
        </p>
        <ul>
          {!!orders.length && orders.map(order => <li key={order._id}>{order.name} - {order._id}</li>)}
        </ul>
      </Container>
    </aside>
  );
}

export default Aside;
