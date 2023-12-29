import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (value) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('isPublished', value);
    formData.append('image', image);


    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/addblog`,formData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div className="container mx-auto mt-8 mb-5">
      <form  className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Write a Blog</h2>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-medium mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded-md p-2"
            rows="5"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-medium mb-2">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <button type="submit" onClick={() => handleSubmit(true)} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Publish
        </button>

        <button type="submit" onClick={() => handleSubmit(false)} className="bg-green-500 m-1 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Save
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
