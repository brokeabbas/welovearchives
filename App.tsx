// src/App.tsx

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';

import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import BuyProduct from './pages/BuyProduct';
import AllBrands from './pages/AllBrands';
import BrandProductsPage from './pages/BrandProductsPage';
import Pieces from './pages/Pieces';
import Male from './pages/Male';
import Female from './pages/Female';
import Caps from './pages/pieces/Caps';
import Accessories from './pages/pieces/Accessories';
import Upperwear from './pages/pieces/Upperwear';
import Lowerwear from './pages/pieces/Lowerwear';
import Kicks from './pages/pieces/Kicks';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import ArchivesCollection from './pages/ArchivesCollection';
import ForYou from './pages/ForYou';
import Fits from './pages/Fits';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import JoinArchives from './pages/JoinArchives';
import BrandDashboard from './pages/Dashboard';
import OrderConfirmation from './pages/OrderConfirmation';

import ForgotPasswordPage from './pages/forgot-password';
import ResetPasswordPage from './pages/reset-password';

import { CustomerAuthProvider } from './context/CustomerAuthContext';

// NEW: Tawk.to Widget
import TawkToWidget from './TawkToWidget';

const AppWrapper: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();

  const hideNavbar = [
    '/fits',
    '/login',
    '/signup',
    '/join',
    '/dashboard',
    '/forgot-password',
    '/reset-password',
  ].includes(pathname);

  const hideFooter = [
    '/join',
    '/dashboard',
    '/fits',
    '/forgot-password',
    '/reset-password',
  ].includes(pathname);

  return (
    <>
      <ScrollToTop />
      {/* <TawkToWidget /> ← Live chat widget */}
      {!hideNavbar && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllProducts />} />
          <Route path="/buy/:id/:slug" element={<BuyProduct />} />
          <Route path="/buy/:id" element={<BuyProduct />} />
          <Route path="/all-brands" element={<AllBrands />} />
          <Route path="/view-brands/:slug" element={<BrandProductsPage />} />
          <Route path="/pieces" element={<Pieces />} />
          <Route path="/male" element={<Male />} />
          <Route path="/female" element={<Female />} />
          <Route path="/pieces/caps" element={<Caps />} />
          <Route path="/pieces/accessories" element={<Accessories />} />
          <Route path="/pieces/upperwear" element={<Upperwear />} />
          <Route path="/pieces/lowerwear" element={<Lowerwear />} />
          <Route path="/pieces/kicks" element={<Kicks />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collections" element={<ArchivesCollection />} />
          <Route path="/collections/:filter" element={<ArchivesCollection />} />
          <Route path="/foryou" element={<ForYou />} />
          {/* <Route path="/fits" element={<Fits />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/join" element={<JoinArchives />} />
          <Route path="/dashboard" element={<BrandDashboard />} />
        </Routes>
      </main>

      {!hideFooter && <Footer />}
    </>
  );
};

const App: React.FC = () => (
  <Router>
    <CustomerAuthProvider>
      <AppWrapper />
    </CustomerAuthProvider>
  </Router>
);

export default App;
