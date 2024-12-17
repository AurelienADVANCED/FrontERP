// OrdersList.tsx
import React, { useEffect, useState } from 'react';
import './OrdersList.css';

interface Order {
  id: number;
  orderDate: string;
  deliveryDate: string;
  status: string;
  quantity: number;
  price: number;
  customer?: { name: string };
  product?: { name: string };
}

const OrdersList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/orders')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data: Order[]) => {
        setOrders(data);
      })
      .catch(error => {
        console.error('Il y a eu un problème avec votre requête fetch:', error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des Commandes</h2>
      <table border={1} className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date de Commande</th>
            <th>Date de Livraison</th>
            <th>Status</th>
            <th>Quantité</th>
            <th>Prix</th>
            <th>Client</th>
            <th>Produit</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.orderDate}</td>
              <td>{order.deliveryDate}</td>
              <td>{order.status}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>{order.customer ? order.customer.name : 'N/A'}</td>
              <td>{order.product ? order.product.name : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
