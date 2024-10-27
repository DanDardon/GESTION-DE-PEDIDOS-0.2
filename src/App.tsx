import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminOrderManagement from './pages/admin/OrderManagement';
import ClientOrderTracking from './pages/client/OrderTracking';
import RoleSelection from './pages/RoleSelection';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<RoleSelection />} />
            <Route path="/admin" element={<AdminOrderManagement rolId="1" />} />
            <Route path="/admin/orders/:orderId" element={<AdminOrderManagement rolId="1" />} />
            <Route path="/track/:orderId" element={<ClientOrderTracking />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;