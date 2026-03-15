export enum OrderStatus {
  COMPLETED = 'Completed',
  DELIVERED = 'Delivered',
  PENDING = 'Pending',
  COOKING = 'Cooking',
  ON_THE_WAY = 'On the Way',
  ARRIVED = 'Arrived',
  CANCELED = 'Canceled',
}

export const OrderBadgeStyles = {
  [OrderStatus.COMPLETED]: {
    label: 'Completed',
    labelColor: '#D1D5DB',
    backgroundColor: '#374151'
  },
  [OrderStatus.DELIVERED]: {
    label: 'Delivered',
    labelColor: '#22C55E',
    backgroundColor: '#1C3C28'
  },
  [OrderStatus.PENDING]: {
    label: 'Pending',
    labelColor: '#FBBF24',
    backgroundColor: '#3E2C00'
  },
  [OrderStatus.COOKING]: {
    label: 'Cooking',
    labelColor: '#FB923C',
    backgroundColor: '#431407'
  },
  [OrderStatus.ON_THE_WAY]: {
    label: 'On the Way',
    labelColor: '#60A5FA',
    backgroundColor: '#1E293B'
  },
  [OrderStatus.ARRIVED]: {
    label: 'Arrived',
    labelColor: '#A855F7',
    backgroundColor: '#2E1065'
  },
  [OrderStatus.CANCELED]: {
    label: 'Canceled',
    labelColor: '#F87171',
    backgroundColor: '#450A0A'
  },
};