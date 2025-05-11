const { useState } = React;

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">Aarush Grow</h1>
      <div className="flex space-x-4">
        <a href="#products" className="text-gray-600 hover:text-gray-900 transition">Products</a>
        <a href="#compare" className="text-gray-600 hover:text-gray-900 transition">Compare</a>
        <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition">Reviews</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white pt-16">
    <div className="text-center max-w-3xl mx-auto px-4">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 animate-fade-in">Grow Sustainably with Aarush</h2>
      <p className="text-xl text-gray-600 mb-8 animate-slide-up">All-natural, organic coconut coir soil solutions for a greener tomorrow.</p>
      <a href="#products" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition transform hover:scale-105">Shop Now</a>
    </div>
  </section>
);

const ProductCard = ({ name, price, description, image, addToCart }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 animate-fade-in">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-xl font-semibold text-green-600 mt-4">${price.toFixed(2)}</p>
      <button
        onClick={() => addToCart({ name, price })}
        className="mt-4 w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
      >
        Add to Bag
      </button>
    </div>
  </div>
);

const Products = ({ addToCart }) => {
  const products = [
    {
      name: "Aarush Grow Plus",
      price: 2.00,
      description: "The best all-rounder, made from cured coconut coir. Sustainable, organic, and perfect for everyday gardening.",
      image: "https://via.placeholder.com/400x300?text=Grow+Plus",
    },
    {
      name: "Aarush Grow Ultra",
      price: 5.00,
      description: "6x the power, 3x the feeding time, and non-hydrophobic due to advanced curing. Ultimate organic performance.",
      image: "https://via.placeholder.com/400x300?text=Grow+Ultra",
    },
    {
      name: "Grow Plus Kit",
      price: 4.00,
      description: "Includes Aarush Grow Plus, a moringa seed, hydrogen peroxide vial, and detailed instruction card.",
      image: "https://via.placeholder.com/400x300?text=Plus+Kit",
    },
    {
      name: "Grow Ultra Kit",
      price: 7.00,
      description: "Features Aarush Grow Ultra, a moringa seed, hydrogen peroxide vial, and detailed instruction card.",
      image: "https://via.placeholder.com/400x300?text=Ultra+Kit",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Comparison = () => (
  <section id="compare" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Compare Our Soils</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-100">
              <th className="p-4 text-lg font-semibold text-gray-900">Feature</th>
              <th className="p-4 text-lg font-semibold text-gray-900">Grow Plus</th>
              <th className="p-4 text-lg font-semibold text-gray-900">Grow Ultra</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4 text-gray-600">Price</td>
              <td className="p-4 text-gray-900">$2.00</td>
              <td className="p-4 text-gray-900">$5.00</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 text-gray-600">Material</td>
              <td className="p-4 text-gray-900">Cured Coconut Coir</td>
              <td className="p-4 text-gray-900">Advanced Cured Coconut Coir</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 text-gray-600">Power</td>
              <td className="p-4 text-gray-900">Standard</td>
              <td className="p-4 text-gray-900">6x Standard</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 text-gray-600">Feeding Time</td>
              <td className="p-4 text-gray-900">Standard</td>
              <td className="p-4 text-gray-900">3x Standard</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 text-gray-600">Hydrophobic</td>
              <td className="p-4 text-gray-900">Low</td>
              <td className="p-4 text-gray-900">None</td>
            </tr>
            <tr>
              <td className="p-4 text-gray-600">Sustainability</td>
              <td className="p-4 text-gray-900">Organic, Peat-Free</td>
              <td className="p-4 text-gray-900">Organic, Peat-Free</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { name: "Emma S.", text: "Aarush Grow Plus transformed my garden! It's so easy to use and eco-friendly." },
    { name: "Liam T.", text: "The Ultra is a game-changer. My plants have never looked healthier!" },
    { name: "Sophia R.", text: "Love the sustainability focus. The kits are perfect for beginners." },
    { name: "Noah K.", text: "Incredible results with Grow Ultra. Worth every penny!" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 animate-slide-up">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.text}</p>
              <p className="text-gray-900 font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Cart = ({ cart, updateQuantity, removeFromCart, setShowPayment }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl z-50 p-6 transform transition-transform translate-x-0">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Bag</h3>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your bag is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <div>
                <p className="text-gray-900 font-semibold">{item.name}</p>
                <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  -
                </button>
                <button
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <p className="text-xl font-semibold text-gray-900 mt-6">Total: ${total.toFixed(2)}</p>
          <button
            onClick={() => setShowPayment(true)}
            className="w-full bg-green-600 text-white py-3 rounded-full mt-4 hover:bg-green-700 transition"
          >
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

const PaymentForm = ({ setShowPayment }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for trying our demo! This is a fake payment system for demonstration purposes only.");
    setShowPayment(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment (Demo)</h3>
        <p className="text-red-600 mb-4">This is a fake payment system for demonstration only.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Card Number</label>
            <input
              type="text"
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
              className="w-full p-3 border rounded-lg"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-600 mb-2">Expiry</label>
              <input
                type="text"
                value={formData.expiry}
                onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                className="w-full p-3 border rounded-lg"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-600 mb-2">CVV</label>
              <input
                type="text"
                value={formData.cvv}
                onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                className="w-full p-3 border rounded-lg"
                placeholder="123"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Name on Card</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border rounded-lg"
              placeholder="John Doe"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition"
          >
            Complete Payment
          </button>
          <button
            onClick={() => setShowPayment(false)}
            className="w-full text-gray-600 py-3 mt-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setShowCart(true);
  };

  const updateQuantity = (index, quantity) => {
    if (quantity <= 0) {
      removeFromCart(index);
      return;
    }
    setCart((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-in-out;
        }
      `}</style>
      <Navbar />
      <Hero />
      <Products addToCart={addToCart} />
      <Comparison />
      <Testimonials />
      {showCart && (
        <Cart
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          setShowPayment={setShowPayment}
        />
      )}
      {showPayment && <PaymentForm setShowPayment={setShowPayment} />}
      <button
        onClick={() => setShowCart(!showCart)}
        className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        Bag ({cart.reduce((sum, item) => sum + item.quantity, 0)})
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
