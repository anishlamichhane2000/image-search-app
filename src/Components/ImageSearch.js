/* eslint-disable react-hooks/exhaustive-deps */
// ImageSearch.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Searchbar';
import ImageList from './ImageList';
import './style.css'

const API_KEY = 'quRCBVlM6ujQQ5W--ijSJQxTQz6-57QXYVyoW1lbxnU'; // Replace with your actual Unsplash API key
const API_URL = 'https://api.unsplash.com/search/photos';

const ImageSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const perPage = 50; // Set the number of images per page

  const fetchImages = async () => {
    if (!query) return;

    try {
      const response = await axios.get(API_URL, {
        params: {
          client_id: API_KEY,
          query: query,
          per_page: perPage,
          page: page,
        },
      });

      const newImages = response.data.results;
      const totalPages = response.data.total_pages;

      setImages(newImages);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query, page, fetchImages]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
       <div className="image-search-container">
        <h1 className="image-search-title">Unsplash Image Search</h1>
      </div>
      <SearchBar onSubmit={handleSearch} />
      <ImageList images={images} />
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-btn ${page === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSearch;
