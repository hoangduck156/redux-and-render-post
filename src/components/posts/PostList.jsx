

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/postsSlice';
import PostItem from './PostItem';

const ITEMS_PER_PAGE = 10;

const PostList = () => {
  const dispatch = useDispatch();
  const { items: posts, loading, error } = useSelector((state) => state.posts);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const currentPosts = posts.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  if (loading) return <div>Đang tải bài viết...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <div>
      <h2>Danh sách bài viết ({posts.length})</h2>
      {currentPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 24 }}>
        <button onClick={handlePrev} disabled={page === 1}>Trang trước</button>
        <span>Trang {page} / {totalPages}</span>
        <button onClick={handleNext} disabled={page === totalPages}>Trang sau</button>
      </div>
    </div>
  );
};

export default PostList;