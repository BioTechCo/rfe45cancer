"use client";

export default function Test() {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = "/posts/example-post";
    
    // console.log(`Navigating to ${href}`);
    
    // Direct browser navigation - most reliable method
    window.location.href = href;
  };
  
  return (
    <div className="p-4">
      <a 
        href="/posts/example-post"
        onClick={handleNavigation}
        className="text-blue-600 underline hover:text-blue-800"
      >
        Go to Example Post
      </a>
      
      {/* Or as a button if preferred */}
      <button 
        onClick={() => window.location.href = "/posts/example-post"}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Navigate to Example Post
      </button>
    </div>
  );
}