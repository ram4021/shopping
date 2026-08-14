import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shopping - E-Commerce Platform</title>
        <meta name="description" content="Modern e-commerce platform like Daraz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-blue-600">🛍️ Shopping</h1>
              <div className="space-x-4">
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
                <Link href="/cart" className="text-gray-700 hover:text-blue-600">Cart</Link>
                <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Shopping</h2>
            <p className="text-xl mb-8">Your one-stop online marketplace for everything</p>
            <Link 
              href="/products"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block"
            >
              Start Shopping
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">🚚</div>
              <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Quick and reliable delivery across Nepal</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">💳</div>
              <h4 className="text-xl font-bold mb-2">Secure Payment</h4>
              <p className="text-gray-600">Multiple payment options including Khalti and eSewa</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="text-xl font-bold mb-2">Quality Assured</h4>
              <p className="text-gray-600">All products verified and customer reviews</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-8">Join thousands of happy customers shopping online</p>
            <Link 
              href="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-block"
            >
              Browse Products
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h5 className="font-bold mb-4">About Us</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#" className="hover:text-white">About Shopping</Link></li>
                  <li><Link href="#" className="hover:text-white">Careers</Link></li>
                  <li><Link href="#" className="hover:text-white">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Customer Service</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                  <li><Link href="#" className="hover:text-white">FAQ</Link></li>
                  <li><Link href="#" className="hover:text-white">Shipping Info</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Policies</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
                  <li><Link href="#" className="hover:text-white">Return Policy</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Contact</h5>
                <ul className="space-y-2 text-gray-400">
                  <li>📞 +977-1-4000000</li>
                  <li>📧 support@sahanidigitalcable.com.np</li>
                  <li>📍 Kathmandu, Nepal</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Shopping. All rights reserved. Powered by Sahani Digital Cable</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}