# FoodTuck Restaurant - Full Stack Next.js Application 🍕

A complete full-stack restaurant website built with **Next.js 14**, **Redux Toolkit**, and **TypeScript**. Features a dynamic product catalog, shopping cart, and checkout system with API-driven backend.

## 🚀 Features

### Frontend
- ✅ **Next.js 14 App Router** - Modern React framework with server/client components
- ✅ **Redux Toolkit** - State management for cart and products
- ✅ **TypeScript** - Type-safe code throughout
- ✅ **Tailwind CSS** - Responsive, mobile-first styling
- ✅ **Material-UI Icons** - Professional icon set
- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized

### Backend (API Routes)
- ✅ **Product API** (`/api/foods`) - Fetch menu items
- ✅ **Cart API** (`/api/cart`) - Add, remove, and manage cart items
- ✅ **Checkout API** (`/api/checkout`) - Process orders
- ✅ **Chefs API** (`/api/chefs`) - Team information
- ✅ **Blogs API** (`/api/blogs`) - Blog posts

### Key Functionality
✅ Browse products from backend API  
✅ Add items to cart with Redux integration  
✅ Real-time cart counter in navbar  
✅ Cart page with quantity management  
✅ Full checkout flow with validation  
✅ Order processing and confirmation  
✅ Category filtering on shop page  
✅ Blog and chef sections  

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit **http://localhost:3000**

### 3. Build for Production
```bash
npm run build
npm start
```

## 📡 API Endpoints

### GET `/api/foods`
Returns all menu items with categories

**Response:**
```json
{
  "data": [
    {
      "id": "f1",
      "name": "Classic Margherita Pizza",
      "price": 12.99,
      "image": "/food10.png",
      "description": "Wood-fired pizza with fresh ingredients",
      "category": "pizza"
    }
  ]
}
```

### POST `/api/cart`
Add item to cart

**Body:**
```json
{
  "id": "f1",
  "name": "Pizza",
  "price": 12.99,
  "image": "/food10.png",
  "quantity": 1
}
```

### DELETE `/api/cart?id=f1`
Remove specific item or `?id=all` to clear cart

### POST `/api/checkout`
Process order

**Body:**
```json
{
  "items": [...],
  "customerName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "address": "123 Main St",
  "city": "New York",
  "zipCode": "10001"
}
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/              # Backend API routes
│   │   ├── foods/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── chefs/
│   │   └── blogs/
│   ├── cart/            # Cart page
│   ├── CheckOut/        # Checkout flow
│   ├── menu/            # Menu page
│   ├── shop/            # Shop page with filters
│   ├── components/      # Reusable UI components
│   └── ReduxProvider.tsx
├── store/
│   ├── store.ts         # Redux configuration
│   ├── cartSlice.ts     # Cart state + async thunks
│   └── productsSlice.ts # Products state
├── data/
│   ├── foods.json       # Product database
│   ├── chefs.json       # Chef profiles
│   └── blogs.json       # Blog content
└── types/
    └── shims.d.ts       # TypeScript declarations
```

## 🎯 Key Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, featured items |
| Menu | `/menu` | Full menu with API products |
| Shop | `/shop` | Filterable product catalog |
| Cart | `/cart` | Shopping cart management |
| Checkout | `/CheckOut` | Order placement form |
| Blog | `/blog` | Blog posts |
| Chefs | `/chef` | Team profiles |
| About | `/about` | Restaurant story |
| FAQ | `/faq` | Common questions |

## 🔧 Tech Stack

- **Framework**: Next.js 14.2
- **Language**: TypeScript 5
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS 3
- **UI**: Material-UI Icons, Lucide React
- **Fonts**: Next.js Google Fonts (Inter, Great Vibes)

## 📝 Usage Examples

### Adding Products to Cart

```typescript
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

const dispatch = useDispatch();

dispatch(addToCart({
  id: product.id,
  name: product.name,
  price: product.price,
  image: product.image,
  quantity: 1
}));
```

### Accessing Cart State

```typescript
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const { items, total, status } = useSelector((state: RootState) => state.cart);
```

## 🎨 Customization

### Add New Products
Edit `src/data/foods.json`:
```json
{
  "id": "f11",
  "name": "New Dish",
  "price": 15.99,
  "image": "/new-dish.png",
  "description": "Your description",
  "category": "main"
}
```

### Modify Styles
- Tailwind config: `tailwind.config.ts`
- Global styles: `src/app/globals.css`

## 🐛 Troubleshooting

**Port in use?**  
Next.js auto-selects port 3001. Or run: `npm run dev -- -p 3001`

**Redux errors?**  
Ensure `ReduxProvider` (client component) wraps app in `layout.tsx`

**API not loading?**  
Verify dev server is running and check browser console for errors

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Manual Deployment
Build the project and deploy the `.next` folder to any Node.js hosting.

## 📜 Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm start        # Run production server
npm run lint     # Run linter
```

## 🔄 Future Enhancements

- [ ] User authentication & profiles
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Payment gateway (Stripe)
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Product reviews & ratings
- [ ] Advanced search & filters
- [ ] Order history tracking
- [ ] Wishlist functionality

## 📞 Support

For issues or questions, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit Guide](https://redux-toolkit.js.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Built with ❤️ using Next.js 14, Redux Toolkit, and TypeScript** 
