'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Added "All" category to show all books initially
const categories = ['All', 'Anxiety', 'Depression', 'Mindfulness', 'Trauma&Healing'];

type Book = {
  title: string;
  author: string;
  image: string;
  categories: string[];
};

const books: Book[] = [
  {
    title: 'Mental health is for everyone',
    author: 'Global Wellness',
    image: '/images/mentalhealthisforeveryone.jpg',
    categories: ['Anxiety'],
  },
  {
    title: 'National Institute of Mental Health Depression',
    author: 'National Institute of Mental Health',
    image: '/images/nationalinstitude.jpg',
    categories: ['Depression'],
  },
  {
    title: 'Psychiatry for Medical Students and Residents',
    author: 'Dr. Kim Lee',
    image: '/images/psychiatry.jpg',
    categories: ['Trauma&Healing'],
  },
  {
    title: 'Depression, Risk Preferences and Risk-Taking Behavior',
    author: 'SOEPpapers',
    image: '/images/depressionrisk.jpeg',
    categories: ['Depression'],
  },
  {
    title: 'Gender different in different gender',
    author: 'J. Park',
    image: '/images/gender.png',
    categories: ['Mindfulness'],
  },
  {
    title: 'Clinical descriptions and diagnostic requirements for ICD-11 mental',
    author: 'WHO Experts',
    image: '/images/worldhealth.jpeg',
    categories: ['Trauma&Healing'],
  },
];

export default function BooksWellnessPage() {
  const [activeCategory, setActiveCategory] = useState('All'); // Start with 'All' selected
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Filter books by category or show all if 'All' is selected, plus search filtering
  const filteredBooks = books.filter(
    (book) =>
      (activeCategory === 'All' || book.categories.includes(activeCategory)) &&
      (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button
          className="font-semibold text-sm text-black"
          onClick={() => router.back()}
          aria-label="Go back"
        >
          &larr; Back
        </button>
        <div className="flex space-x-6 font-semibold text-sm">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-1">Books for Mental Well-Being</h1>
      <p className="text-gray-600 mb-6">Curated reads to inspire healing, mindfulness, and self-growth.</p>

      {/* Search */}
      <div className="mb-6">
        <Input
          placeholder="Search by author or title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-xl"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded border text-sm font-medium transition ${
              activeCategory === cat
                ? 'bg-blue-100 border-blue-300'
                : 'border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.title} className="text-center">
              <Image
                src={book.image}
                alt={book.title}
                width={200}
                height={280}
                className="w-[200px] h-[280px] object-cover rounded-lg mb-2 mx-auto"
            />

              <h3 className="font-semibold text-base">{book.title}</h3>
              <Link
                href={`/author/${book.author.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-600 text-sm hover:underline"
              >
                {book.author}
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No books found.</p>
        )}
      </div>

      {/* Pagination (non-functional placeholder) */}
      <div className="flex justify-center">
        <Button className="bg-blue-100 text-black hover:bg-blue-200">Next Page &gt;&gt;</Button>
      </div>
    </div>
  );
}
