# Pages Directory

Folder ini berisi semua halaman (pages) yang terpisah untuk Honesty Pictures Studio.

## Struktur File

### Public Pages
- **HomePage.tsx** - Halaman utama dengan hero slider (`/`)
- **PortfolioPage.tsx** - Halaman portfolio dengan grid projects (`/portfolio`)
- **ProjectDetail.tsx** - Detail project dengan gallery (`/project/:id`)
- **AboutPage.tsx** - Halaman about us (`/about`)
- **ContactPage.tsx** - Halaman contact dengan form (`/contact`)
- **LinkTreePage.tsx** - Halaman link bio style linktree (`/links`)

### Admin Pages
- **AdminLogin.tsx** - Halaman login admin (`/admin/login`)
- **AdminDashboard.tsx** - Dashboard utama admin (`/admin/dashboard`)
- **AdminLinksManager.tsx** - Halaman manage link bio (`/admin/links`)
- **AdminProjectForm.tsx** - Form tambah/edit project (`/admin/projects/new` dan `/admin/projects/edit/:id`)

## Routing

Semua routing sudah dikonfigurasi di `App.tsx`:

### Public Routes
```tsx
<Route path="/" element={<HomePage />} />
<Route path="/portfolio" element={<PortfolioPage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="/project/:id" element={<ProjectDetail />} />
<Route path="/links" element={<LinkTreePage />} />
```

### Admin Routes
```tsx
<Route path="/admin" element={<AdminLogin />} />
<Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={<AdminDashboard />} />
<Route path="/admin/links" element={<AdminLinksManager />} />
<Route path="/admin/projects/new" element={<AdminProjectForm />} />
<Route path="/admin/projects/edit/:id" element={<AdminProjectForm />} />
```

## Penggunaan

Setiap halaman menggunakan `usePortfolio()` hook yang di-export dari `App.tsx` untuk mengakses state dan fungsi global.

### Contoh:
```tsx
import { usePortfolio } from '../App';

const MyPage = () => {
  const { projects, linkBioProfile, isAuthenticated } = usePortfolio();
  // ...
}
```

## Authentication

Semua halaman admin (kecuali login) dilindungi dengan check authentication:

```tsx
useEffect(() => {
  if (!isAuthenticated) navigate('/admin/login');
}, [isAuthenticated, navigate]);
```

Password default: `admin123`

## Fitur Halaman

### HomePage
- Hero slider dengan 3 gambar
- Section intro
- Grid 6 project terbaru
- CTA section
- Instagram follow section

### PortfolioPage
- Header slider dengan 6 gambar
- Filter kategori (All, Wedding, Couple, Engagement)
- Grid semua projects

### ProjectDetail
- Hero dengan cover image
- Gallery images dengan lazy loading
- Navigation ke portfolio dan contact

### LinkTreePage
- 4 tema: Classic, Dark, Soft, Glass
- Profile dengan avatar
- List links yang active
- Responsive design
