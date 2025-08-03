# RizqTek - Ethical Tech Agency

A production-ready full-stack web application for RizqTek, an Islamic-inspired tech agency specializing in ethical technology solutions.

## 🌟 Features

### Frontend
- **Modern React Application** with TypeScript and Tailwind CSS
- **Responsive Design** optimized for all devices
- **Smooth Animations** using Framer Motion
- **Interactive Components** with hover states and micro-interactions
- **Floating Chat Button** for instant customer engagement
- **Newsletter Subscription** with real-time feedback
- **Contact Forms** with validation and submission handling
- **Production Readiness Check** at `/production-check`

### Backend
- **Supabase Backend** with PostgreSQL database
- **Row Level Security (RLS)** for data protection
- **Secure Authentication** with password hashing
- **Auto Admin Creation** from environment variables
- **Real-time Data** with Supabase subscriptions

### Admin Panel
- **Secure Login** with database-stored credentials
- **Dashboard Overview** with key metrics
- **Client Management** with full CRUD operations
- **Project Management** with file uploads
- **Invoice Management** with payment tracking
- **Contact & Newsletter Management**

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Supabase account and project
- Environment variables configured

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rizqtek-agency
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   # Supabase Configuration
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Admin Credentials (Auto-injected on server start)
   VITE_ADMIN_EMAIL=admin@rizqtek.com
   VITE_ADMIN_PASSWORD=RizqTek2025!SecurePassword
   VITE_ADMIN_NAME=RizqTek Administrator
   
   # Optional: Payment Integration
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```

4. **Supabase Setup**
   - Create a new Supabase project
   - Run the database migrations in the `supabase/migrations` folder
   - Configure Row Level Security (RLS) policies
   - Get your project URL and anon key

### Running the Application

**Development Mode:**
```bash
npm run dev
```

This will start the frontend at http://localhost:5173

**Production Check:**
Visit http://localhost:5173/production-check to verify all systems are ready for production.

## 📁 Project Structure

```
rizqtek-agency/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── services/          # Supabase service layer
│   ├── utils/             # Utility functions
│   ├── lib/               # Supabase client configuration
│   └── ...
├── supabase/              # Database migrations and functions
│   └── migrations/        # SQL migration files
├── .env                  # Environment variables
└── ...
```

## 🔧 Database Functions

### Admin Functions
- `create_or_update_admin()` - Auto-creates/updates admin from environment variables
- `verify_admin_credentials()` - Secure admin authentication
- `get_admin_by_email()` - Retrieve admin information

### Client Functions
- `create_client_with_password()` - Create client with hashed password
- `verify_client_credentials()` - Client authentication
- `reset_client_password()` - Password reset functionality

## 🛡️ Security Features

- **Row Level Security (RLS)** on all tables
- **Password Hashing** using PostgreSQL's crypt() function
- **Environment-based Admin Creation** for secure deployment
- **Secure Database Functions** with proper error handling
- **Input Validation** and sanitization throughout
- **Production Readiness Checks** for deployment verification

## 🎨 Design Features

- **Islamic-Inspired Design** with green and blue color palette
- **Professional Typography** with proper hierarchy
- **Responsive Grid System** for all screen sizes
- **Smooth Animations** and micro-interactions
- **Accessibility Features** with proper ARIA labels
- **Modern UI Components** with consistent styling
- **Production-Ready Interface** with error boundaries

## 🚀 Production Deployment

### Automated Admin Setup
The application automatically creates/updates admin credentials from environment variables on every startup:

```env
VITE_ADMIN_EMAIL=admin@yourdomain.com
VITE_ADMIN_PASSWORD=YourSecurePassword123!
VITE_ADMIN_NAME=Your Admin Name
```

### Production Checklist
1. ✅ **Environment Variables**: All required variables configured
2. ✅ **Supabase Setup**: Database migrations applied
3. ✅ **Admin Credentials**: Secure admin account configured
4. ✅ **RLS Policies**: Row Level Security enabled
5. ✅ **Error Handling**: Comprehensive error management
6. ✅ **Security**: Password hashing and secure authentication

### Deployment Steps
```bash
# Build for production
npm run build

# Deploy the 'dist' folder to your hosting platform
```

### Verification
Visit `/production-check` to verify all systems are ready for production deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with Islamic values and principles in mind
- Designed for ethical technology solutions
- Inspired by the concept of halal rizq and barakah in business
- Production-ready architecture with Supabase backend

---

**RizqTek** - Sustaining Futures with Ethical Tech 🌟