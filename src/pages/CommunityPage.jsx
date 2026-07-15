import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { createPost, getPosts, createComment, getComments } from '../api/community';
import './CommunityPage.css';

function CommunityPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('group');
  const fileInputRef = useRef(null);

  const [selectedPost, setSelectedPost] = useState(null);
  const [commentInput, setCommentInput] = useState('');
  const [postComments, setPostComments] = useState({});
  const [titleInput, setTitleInput] = useState('');
  const [inputText, setInputText] = useState('');
  const [attachedFile, setAttachedFile] = useState(null);
  const [groupPosts, setGroupPosts] = useState([]);

  useEffect(() => {
    if (location.state?.fromNavbar) {
      setActiveTab('group');
      setSelectedPost(null);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setGroupPosts(data);
      } catch (err) {
        console.error('게시글 목록 조회 실패:', err);
      }
    };
    fetchPosts();
  }, []);

  const mockNews = [
    {
      id: 1,
      title: "KISA, 최신 스미싱 트렌드 발표... '택배 조회 배송 오류' 가장 많아",
      source: '보안뉴스',
      time: '3시간 전',
      desc: '한국인터넷진흥원(KISA)은 최근 지인을 사칭한 택배 배송조회 우회 유도 문자가 급증함에 따라 출처가 불분명한 도메인 접근 자제를 당부했다.',
    },
    {
      id: 2,
      title: 'LLM AI를 활용한 신종 피싱 메일 차단 기술 고도화 트렌드',
      source: 'IT Daily',
      time: '1일 전',
      desc: '인공지능 모델 우합 탐지 기법을 도입하여 대규모 언어 패턴 및 발신자 신뢰도를 실시간 스캐닝하는 차세대 보안 솔루션이 도입된다.',
    },
  ];

  const mockReports = [
    { id: 1, title: '[주의] 검찰청 사칭 계정 휴면 해제 유도 문자', date: '2026-06-30', author: 'user***', type: 'basic', text: '검찰청 사칭 계정 휴면 해제 유도 문자 내용 전문 정보입니다.' },
    { id: 2, title: 'XX은행 긴급 재난지원금 신청 유도 피싱 메일 공유합니다', date: '2026-06-29', author: '안전제일', type: 'summary', text: '지원금 신청 링크를 클릭하게 만드는 위험 메일 본문입니다.' },
  ];

  const myReports = [
    { id: 1, title: '010-XXXX-XXXX 번호로 온 해외 결제 문자 의심 제보', status: '위험(분석완료)', date: '2026-06-28', type: 'summary', text: '해외결제 문자 사칭 사기 기록 데이터 내용' },
  ];

  const handlePostSubmit = async () => {
    if (!titleInput.trim() || !inputText.trim()) {
      alert('제목과 내용을 모두 입력해주세요!');
      return;
    }
    try {
      const newPost = await createPost(titleInput, inputText, attachedFile);
      setGroupPosts([newPost, ...groupPosts]);
      setTitleInput('');
      setInputText('');
      setAttachedFile(null);
    } catch (err) {
      alert(err.message);
    }
  };

  const handlePostClick = async (post) => {
    setSelectedPost(post);
    try {
      const comments = await getComments(post.id);
      setPostComments((prev) => ({ ...prev, [post.id]: comments }));
    } catch (err) {
      console.error('댓글 조회 실패:', err);
    }
  };

  const handleCommentSubmit = async (postId) => {
    if (!commentInput.trim()) {
      alert('댓글 내용을 입력해주세요!');
      return;
    }
    try {
      const newComment = await createComment(postId, commentInput);
      setPostComments({
        ...postComments,
        [postId]: [...(postComments[postId] || []), newComment],
      });
      setCommentInput('');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleReportClick = (item) => {
    if (item.type === 'basic') {
      navigate('/analysis/result', { state: { text: item.text } });
    } else {
      navigate('/analysis/summary', { state: { text: item.text } });
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'group':
        if (selectedPost) {
          const currentComments = postComments[selectedPost.id] || [];
          return (
            <div className="community-page__detail">
              <div className="community-page__back-link" onClick={() => setSelectedPost(null)}>
                ← 피드 목록으로 돌아가기
              </div>

              <div className="community-page__detail-card">
                <div className="community-page__post-meta">
                  <span className="community-page__post-author">{selectedPost.title}</span>
                </div>
                <div className="community-page__post-content community-page__post-content--detail">
                  {selectedPost.content}
                </div>
                {selectedPost.attachment && (
                  <div className="community-page__attachment">
                    📎 첨부파일 있음
                  </div>
                )}
              </div>

              <div className="community-page__comment-board">
                <div className="community-page__comment-title">댓글 작성</div>
                <div className="community-page__comment-form">
                  <input
                    type="text"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="이 게시글에 댓글을 공유해 주세요..."
                    className="community-page__comment-input"
                  />
                  <button className="community-page__comment-submit" onClick={() => handleCommentSubmit(selectedPost.id)}>
                    등록
                  </button>
                </div>

                <div className="community-page__comment-list">
                  {currentComments.map((comment) => (
                    <div key={comment.id} className="community-page__comment">
                      <div className="community-page__comment-text">{comment.content}</div>
                    </div>
                  ))}
                  {currentComments.length === 0 && (
                    <div className="community-page__comment-empty">첫 번째 댓글을 남겨보세요!</div>
                  )}
                </div>
              </div>
            </div>
          );
        }

        return (
          <div className="community-page__feed">
            <div className="community-page__composer">
              <input
                type="text"
                placeholder="제목을 입력하세요."
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                className="community-page__composer-input"
                style={{ marginBottom: '8px', fontWeight: 'bold' }}
              />
              <input
                type="text"
                placeholder="무슨 일이 일어나고 있나요? 이곳에 공유해 주세요."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="community-page__composer-input"
              />
              {attachedFile && (
                <div style={{ fontSize: '13px', color: '#555', marginTop: '4px' }}>
                  📎 {attachedFile.name}
                  <span
                    style={{ marginLeft: '8px', color: '#e00', cursor: 'pointer' }}
                    onClick={() => setAttachedFile(null)}
                  >
                    취소
                  </span>
                </div>
              )}
              <div className="community-page__composer-actions">
                <button className="community-page__attach-btn" onClick={() => fileInputRef.current.click()}>
                  파일 첨부
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setAttachedFile(e.target.files[0]);
                    }
                  }}
                />
                <button className="community-page__post-btn" onClick={handlePostSubmit}>
                  게시하기
                </button>
              </div>
            </div>

            <div className="community-page__post-list">
              {groupPosts.map((post) => (
                <div key={post.id} className="community-page__post" onClick={() => handlePostClick(post)}>
                  <div className="community-page__post-meta">
                    <span className="community-page__post-author">{post.title}</span>
                  </div>

                  <div className="community-page__post-content">
                    {post.content}
                  </div>
                  {post.attachment && (
                    <div className="community-page__attachment">📎 첨부파일 있음</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="community-page__list-panel">
            <h3 className="community-page__list-heading">다른 이용자들의 제보 내역</h3>
            {mockReports.map((item) => (
              <div key={item.id} className="community-page__report-row" onClick={() => handleReportClick(item)}>
                <span className="community-page__report-title">{item.title}</span>
                <span className="community-page__report-meta">{item.author} | {item.date}</span>
              </div>
            ))}
          </div>
        );

      case 'news':
        return (
          <div className="community-page__list-panel">
            <h3 className="community-page__list-heading">보안 및 피싱 최신 뉴스</h3>
            {mockNews.map((item) => (
              <div key={item.id} className="community-page__news-card">
                <div className="community-page__news-meta">
                  <span className="community-page__news-source">{item.source}</span>
                  <span className="community-page__news-time">{item.time}</span>
                </div>
                <h4 className="community-page__news-title">{item.title}</h4>
                <p className="community-page__news-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        );

      case 'my':
        return (
          <div className="community-page__list-panel">
            <h3 className="community-page__list-heading">MY - 내가 제보한 내역 관리</h3>
            {myReports.map((item) => (
              <div key={item.id} className="community-page__my-row" onClick={() => handleReportClick(item)}>
                <div>
                  <div className="community-page__my-title">{item.title}</div>
                  <div className="community-page__my-date">제보일: {item.date}</div>
                </div>
                <span className="community-page__my-status">{item.status}</span>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const tabs = [
    { id: 'group', label: '그룹 활동' },
    { id: 'reports', label: '제보 내역' },
    { id: 'news', label: '뉴스창' },
    { id: 'my', label: 'MY' },
  ];

  const SITE_PAGES = [
    { label: '홈', path: '/' },
    { label: '분석하기 (텍스트 입력)', path: '/analysis/input' },
    { label: '피싱 이력 조회', path: '/lookup' },
    { label: '커뮤니티', path: '/community', state: { fromNavbar: true } },
    { label: '제보하기', path: '/report' },
    { label: '로그인', path: '/login' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const filteredPages = searchQuery.trim()
    ? SITE_PAGES.filter(
        (p) => p.label.includes(searchQuery.trim()) || p.path.includes(searchQuery.trim())
      )
    : [];

  const handleSearchNavigate = (page) => {
    navigate(page.path, page.state ? { state: page.state } : undefined);
    setSearchQuery('');
  };

  return (
    <div className="page-viewport page-viewport--white-bg">
      <div className="community-page">
        <Navbar />
        <div className="community-page__layout">
          <div className="community-page__main">
            <div className="community-page__title">피싱 경험 공유방</div>

            <div className="community-page__tabs">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={'community-page__tab' + (activeTab === tab.id ? ' community-page__tab--active' : '')}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSelectedPost(null);
                  }}
                >
                  {tab.label}
                </div>
              ))}
              <div className="community-page__tabs-divider" />
            </div>

            <div className="community-page__tab-content">{renderTabContent()}</div>
          </div>

          <div className="community-page__sidebar">
            <div className="community-page__sidebar-search">
              <span className="community-page__sidebar-icon">🔍</span>
              <input
                type="text"
                className="community-page__sidebar-search-input"
                placeholder="이동할 페이지를 검색하세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && filteredPages.length > 0) {
                    handleSearchNavigate(filteredPages[0]);
                  }
                }}
              />
            </div>

            {searchQuery.trim() && (
              <div className="community-page__sidebar-search-results">
                {filteredPages.length > 0 ? (
                  filteredPages.map((page) => (
                    <div
                      key={page.path}
                      className="community-page__sidebar-search-result"
                      onClick={() => handleSearchNavigate(page)}
                    >
                      {page.label}
                    </div>
                  ))
                ) : (
                  <div className="community-page__sidebar-search-empty">일치하는 페이지가 없습니다</div>
                )}
              </div>
            )}

            <div className="community-page__sidebar-divider" />

            <div className="community-page__sidebar-links">
              <div className="community-page__sidebar-link" onClick={() => navigate('/')}>
                홈
              </div>
              <div className="community-page__sidebar-link" onClick={() => navigate('/report')}>
                피싱경험 제보창
              </div>
              <div
                className="community-page__sidebar-link"
                onClick={() => {
                  setActiveTab('news');
                  setSelectedPost(null);
                }}
              >
                뉴스
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;