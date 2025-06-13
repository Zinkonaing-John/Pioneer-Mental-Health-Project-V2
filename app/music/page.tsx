'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const categories = ['All', 'Relaxation', 'Stress Relief', 'Meditation', 'Sleep'];

const albums = [
  {
    title: 'Peaceful Mind',
    artist: 'Serenity Sounds',
    image: '/images/peaceful.jpeg',
    categories: ['Relaxation'],
  },
  {
    title: 'Healing Frequencies',
    artist: 'Calming Tones',
    image: '/images/healing.jpeg',
    categories: ['Meditation'],
  },
  {
    title: 'Quiet Moments',
    artist: 'Harmonic Flow',
    image: '/images/quiet.jpg',
    categories: ['Meditation'],
  },
  {
    title: 'Anxiety music',
    artist: 'Serenity Sounds',
    image: '/images/relife.jpg',
    categories: ['Stress Relief'],
  },
  {
    title: 'Calm music',
    artist: 'Calming Tones',
    image: '/images/deep.jpg',
    categories: ['Relaxation'],
  },
  {
    title: 'Sleep music',
    artist: 'Harmonic Flow',
    image: '/images/ambient.jpeg',
    categories: ['Sleep'],
  },
];

export default function MusicWellnessPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAlbums = albums.filter(
    (album) =>
      (activeCategory === 'All' || album.categories.includes(activeCategory)) &&
      (album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        album.artist.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-6">
      <button className="font-semibold text-sm text-black">&larr; Back</button>
        <div className="flex space-x-6 font-semibold text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
        </div>
      </nav>

      {/* Header */}
      <main>
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Music for Mental Wellness</h1>
        <p className="text-gray-600 mb-6">Discover calming music to relax, uplift, and find balance.</p>

        {/* Search */}
        <div className="mb-6">
          <Input
            placeholder="Search by album or artist"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-xl"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded border text-sm font-medium transition ${
                activeCategory === cat
                  ? 'bg-blue-100 border-blue-300'
                  : 'border-gray-300 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Album Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
          {filteredAlbums.length > 0 ? (
            filteredAlbums.map((album) => (
              <div key={`${album.title}-${album.artist}`} className="text-center">
                <img
                  src={album.image}
                  alt={`Album cover of ${album.title} by ${album.artist}`}
                  className="w-full aspect-square object-cover rounded-lg mb-2"
                />
                <h3 className="font-semibold text-lg">{album.title}</h3>
                <p className="text-gray-600 text-sm">{album.artist}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No albums found.</p>
          )}
        </div>

        {/* Next Page Button (optional) */}
        <div className="flex justify-center">
          <Button className="bg-blue-100 text-black hover:bg-blue-200">Next Page &gt;&gt;</Button>
        </div>
      </main>
    </div>
  );
}
