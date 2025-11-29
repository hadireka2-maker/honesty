export interface Project {
  id: string;
  title: string;
  couple: string;
  category: 'Wedding' | 'Engagement' | 'Couple Session' | 'Family';
  coverImage: string;
  date: string;
  location: string;
  images: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export type LinkBioTheme = 'classic' | 'dark' | 'soft' | 'glass' | 'sunset' | 'ocean' | 'forest' | 'rose' | 'midnight';

export interface LinkBioItem {
  id: string;
  label: string;
  url: string;
  active: boolean;
}

export interface LinkBioProfile {
  name: string;
  bio: string;
  avatar: string;
  theme: LinkBioTheme;
}

export interface PricelistImage {
  id: string;
  url: string;
  title: string;
  active: boolean;
}

export const PORTFOLIO_DATA: Project[] = [
  {
    id: '1',
    title: 'Eternal Vows in Bali',
    couple: 'Aubry - Rendi',
    category: 'Couple Session',
    coverImage: '/rsc/images/Photo-108-500551e8.jpg',
    date: 'October 2024',
    location: 'Bali, Indonesia',
    images: [
      '/rsc/images/portofolio/Photo-6-e9d62701.jpeg',
      '/rsc/images/portofolio/Photo-8-48136111.jpeg',
      '/rsc/images/portofolio/Photo-14-9614eccb.jpeg',
      '/rsc/images/portofolio/Photo-14a-c5662828.jpeg',
      '/rsc/images/portofolio/Photo-25-5d646732.jpeg',
      '/rsc/images/portofolio/Photo-30-fca12122.jpeg',
      '/rsc/images/portofolio/Photo-33-d5984f56.jpeg',
      '/rsc/images/portofolio/Photo-36-86ea8bb5.jpeg',
      '/rsc/images/portofolio/Photo-44-3fb5d61e.jpeg',
      '/rsc/images/portofolio/Photo-46-cd0254ed.jpeg',
      '/rsc/images/portofolio/Photo-49-3b1f126f.jpeg',
      '/rsc/images/portofolio/Photo-50-c9a8909c.jpeg',
      '/rsc/images/portofolio/Photo-52-44ddd9a5.jpeg',
      '/rsc/images/portofolio/Photo-61-b66a5b56.jpeg',
      '/rsc/images/portofolio/Photo-69-dcdf96bf.jpeg',
      '/rsc/images/portofolio/Photo-71-2e68144c.jpeg',
      '/rsc/images/portofolio/Photo-74-1936c15b.jpeg',
      '/rsc/images/portofolio/Photo-79-829b0f76.jpeg',
      '/rsc/images/portofolio/Photo-82-94438862.jpeg',
      '/rsc/images/portofolio/Photo-83-467710de.jpeg',
      '/rsc/images/portofolio/Photo-85-d4160679.jpeg',
      '/rsc/images/portofolio/Photo-97-ff87c787.jpeg',
      '/rsc/images/portofolio/Photo-99-54e20fab.jpeg',
      '/rsc/images/portofolio/Photo-100-1669828b.jpeg',
      '/rsc/images/portofolio/Photo-109-50ec5edb.jpeg',
      '/rsc/images/portofolio/Photo-114-00b1059f.jpeg',
      '/rsc/images/portofolio/Photo-116-508003a8.jpeg',
      '/rsc/images/portofolio/Photo-117-286306b5.jpeg',
      '/rsc/images/portofolio/Photo-119-2a128f7c.jpeg',
      '/rsc/images/portofolio/Photo-124-ddf54a91.jpeg',
      '/rsc/images/portofolio/Photo-126-8bd7c96c.jpeg',
      '/rsc/images/portofolio/Photo-128-859555c3.jpeg',
      '/rsc/images/portofolio/Photo-131-ca9f9808.jpeg',
      '/rsc/images/portofolio/Photo-136-0a9789ec.jpeg',
      '/rsc/images/portofolio/Photo-139-78631f0c.jpeg',
      '/rsc/images/portofolio/Photo-144-7f42d1db.jpeg',
      '/rsc/images/portofolio/Photo-148-f5165635.jpeg',
      '/rsc/images/portofolio/Photo-155-67d8ca60.jpeg',
      '/rsc/images/portofolio/Photo-159-903f0f8d.jpeg',
      '/rsc/images/portofolio/Photo-164-905352fe.jpeg',
      '/rsc/images/portofolio/Photo-164-a40eb1ed.jpeg',
      '/rsc/images/portofolio/Photo-168-bbc29300.jpeg',
      '/rsc/images/portofolio/Photo-169-5fad96e7.jpeg',
      '/rsc/images/portofolio/Photo-172-522cd60c.jpeg',
      '/rsc/images/portofolio/Photo-188-a2e1503e.jpeg',
      '/rsc/images/portofolio/Photo-190-5056d2cd.jpeg',
      '/rsc/images/portofolio/Photo-195-fe2b8b1d.jpeg',
      '/rsc/images/portofolio/Photo-198-0c9c09ee.jpeg',
      '/rsc/images/portofolio/Photo-200-1a448efa.jpeg',
      '/rsc/images/portofolio/Photo-203-eda34b17.jpeg',
      '/rsc/images/portofolio/Photo-207-5d9f44c4.jpeg',
      '/rsc/images/portofolio/Photo-210-b9f04123.jpeg',
      '/rsc/images/portofolio/Photo-211-18350733.jpeg',
      '/rsc/images/portofolio/Photo-216-f2189e7b.jpeg',
      '/rsc/images/portofolio/Photo-218-00af1c88.jpeg',
      '/rsc/images/portofolio/Photo-221-f8d44d34.jpeg',
      '/rsc/images/portofolio/Photo-223-0a63cfc7.jpeg',
      '/rsc/images/portofolio/Photo-225-0d420110.jpeg',
      '/rsc/images/portofolio/Photo-228-ac874700.jpeg',
      '/rsc/images/portofolio/Photo-234-1b3879d7.jpeg',
      '/rsc/images/portofolio/Photo-250-4cbd4db5.jpeg',
      '/rsc/images/portofolio/Photo-254-87b4792d.jpeg',
      '/rsc/images/portofolio/Photo-256-26713f3d.jpeg',
      '/rsc/images/portofolio/Photo-262-d196fad0.jpeg',
      '/rsc/images/portofolio/Photo-269-931d77f0.jpeg',
      '/rsc/images/portofolio/Photo-274-8b876c4b.jpeg',
      '/rsc/images/portofolio/Photo-281-7930eeb8.jpeg',
      '/rsc/images/portofolio/Photo-285-795cb3cb.jpeg',
      '/rsc/images/portofolio/Photo-286-8beb3138.jpeg',
      '/rsc/images/portofolio/Photo-289-d2397be7.jpeg',
      '/rsc/images/portofolio/Photo-294-62057434.jpeg',
      '/rsc/images/portofolio/Photo-296-a872d170.jpeg',
      '/rsc/images/portofolio/Photo-309-8da18c21.jpeg',
      '/rsc/images/portofolio/Photo-311-112d8cdb.jpeg',
      '/rsc/images/portofolio/Photo-312-e730ca59.jpeg',
      '/rsc/images/portofolio/Photo-313-46f58c49.jpeg',
      '/rsc/images/portofolio/Photo-317-7bbccaa3.jpeg',
      '/rsc/images/portofolio/Photo-318-cb80c570.jpeg',
      '/rsc/images/portofolio/Photo-321-4536500d.jpeg',
      '/rsc/images/portofolio/Photo-322-60e50d5c.jpeg',
      '/rsc/images/portofolio/Photo-323-966bdd8e.jpeg',
      '/rsc/images/portofolio/Photo-324-c519196d.jpeg',
      '/rsc/images/4509f351aa63776e26b2df74735b1a09-49f724a4-1000.jpg'
    ]
  },
  {
    id: '2',
    title: 'Garden Symphony',
    couple: 'Anya - Arief',
    category: 'Wedding',
    coverImage: '/rsc/images/Photo-121-30af12f8.jpeg',
    date: 'September 2024',
    location: 'Bandung, Indonesia',
    images: [
      '/rsc/images/Photo-121-30af12f8.jpeg',
      '/rsc/images/Photo-195-0fe055f6-1000.jpg',
      '/rsc/images/Photo-262-1b8cce7c.jpeg',
      '/rsc/images/foto-323-9e1e1626.jpg'
    ]
  },
  {
    id: '3',
    title: 'Traditional Elegance',
    couple: 'Nadia - Nain',
    category: 'Wedding',
    coverImage: '/rsc/images/Photo-195-0fe055f6-1000.jpg',
    date: 'August 2024',
    location: 'Jakarta, Indonesia',
    images: [
      '/rsc/images/Photo-195-0fe055f6-1000.jpg',
      '/rsc/images/Photo-262-1b8cce7c.jpeg',
      '/rsc/images/foto-323-9e1e1626.jpg'
    ]
  },
  {
    id: '4',
    title: 'Urban Love Story',
    couple: 'Shasa - Gio',
    category: 'Couple Session',
    coverImage: '/rsc/images/Photo-262-1b8cce7c.jpeg',
    date: 'July 2024',
    location: 'Singapore',
    images: [
      '/rsc/images/Photo-262-1b8cce7c.jpeg',
      '/rsc/images/foto-323-9e1e1626.jpg'
    ]
  },
  {
    id: '5',
    title: 'Minimalist Studio',
    couple: 'Rhesma - Aldo',
    category: 'Engagement',
    coverImage: '/rsc/images/foto-323-9e1e1626.jpg',
    date: 'June 2024',
    location: 'Studio 54',
    images: [
      '/rsc/images/foto-323-9e1e1626.jpg',
      '/rsc/images/Foto-95_copy-c2243c57.jpg'
    ]
  },
  {
    id: '6',
    title: 'Golden Hour',
    couple: 'Bella - Lukas',
    category: 'Couple Session',
    coverImage: '/rsc/images/Foto-95_copy-c2243c57.jpg',
    date: 'May 2024',
    location: 'Bromo',
    images: [
      '/rsc/images/Foto-95_copy-c2243c57.jpg',
      '/rsc/images/Photo-108-500551e8.jpg'
    ]
  }
];