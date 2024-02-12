import React, { useEffect, useState } from 'react';
import CardOne from '../../components/CardOne';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditNews = () => {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const [news, setNews] = useState([]);
  //   console.log('News', news);

  const fetchNews = async () => {
    const res = await axios.get(`${apiUrl}/api/news/get-news`);
    if (res.data) {
      setNews(res.data.news);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <>
        <div className="">
          {news.length === 0 && (
            <h1 className="text-2xl w-full font-bold text-center">
              No News to preview
            </h1>
          )}

          <div className="flex justify-between">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
              News
            </h4>
            <button
              className="mb-6 text-base font-semibold bg-meta-5 text-white px-4 py-2 rounded-sm dark:text-white"
              onClick={() => navigate(`${'/create/create-news'}`)}
            >
              Create News
            </button>
          </div>

          {news.map((items, i) => (
            <CardOne fetchNews={fetchNews} key={i} item={items} type="news" />
          ))}
        </div>
      </>
    </div>
  );
};

export default EditNews;
