// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

import DeliveryRoutePlanner from './DeliveryRoutePlanner';

// Визначте список замовлень десь у вашому компоненті
const orders = [
  { id: 1, address: 'вул. Хрещатик, 1' },
  { id: 2, address: 'вул. Петлюри, 5' },
  // ... інші замовлення
];



// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Sample Card">
    <Typography variant="body2">
      <DeliveryRoutePlanner orders={orders} />
    </Typography>
  </MainCard>
);

export default SamplePage;
