
'use client'

import CalendarComponent from '@/components/calendar-component';
import ProtectedRoute from '@/components/protected-route';

const CalendarPage = () => {
  return (
    <ProtectedRoute>
      <CalendarComponent />
    </ProtectedRoute>
  );
};

export default CalendarPage;