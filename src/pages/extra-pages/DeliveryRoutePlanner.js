import React, { useState } from 'react';

const DeliveryRoutePlanner = ({ orders }) => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [routes, setRoutes] = useState([]);

  const toggleOrderSelection = (orderId) => {
    setSelectedOrders(
      selectedOrders.includes(orderId)
        ? selectedOrders.filter(id => id !== orderId)
        : [...selectedOrders, orderId]
    );
  };

  const createRoute = () => {
    if (selectedOrders.length > 0) {
      setRoutes([...routes, selectedOrders]);
      setSelectedOrders([]); // Clear selection after creating a route
    } else {
      alert('Please select orders to create a route.');
    }
  };

  return (
    <div>
      <h2>Plan Delivery Routes</h2>
      <div>
        {orders.map(order => (
          <div key={order.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedOrders.includes(order.id)}
                onChange={() => toggleOrderSelection(order.id)}
              />
              {order.address}
            </label>
          </div>
        ))}
      </div>
      <button onClick={createRoute}>Create Route</button>
      <div>
        <h3>Planned Routes</h3>
        {routes.map((route, index) => (
          <div key={index}>
            <h4>Route {index + 1}</h4>
            {route.map(orderId => {
              const order = orders.find(o => o.id === orderId);
              return <div key={orderId}>{order.address}</div>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryRoutePlanner;
