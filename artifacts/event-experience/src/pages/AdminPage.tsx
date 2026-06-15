import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Navigation } from "@/components/Navigation";
import { Save, Loader2, Database, LayoutTemplate, MessageSquare, LockKeyhole, Mail, Phone, Image as ImageIcon, FileText, Plus, Trash2, Upload } from "lucide-react";
import heroBg from "@assets/generated_images/oe-hero-bg.png";

// Admin tabs
type Tab = "content" | "submissions" | "portfolio" | "blogs";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("content");
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("admin_auth") === "true";
  });
  const [password, setPassword] = useState("");

  // Content Editor State
  const [contentKeys, setContentKeys] = useState<{ key: string, value: string }[]>([]);
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Submissions State
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loadingSubs, setLoadingSubs] = useState(false);

  // Portfolio CMS State
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const [newPortfolio, setNewPortfolio] = useState({ url: "", type: "image", title: "" });

  // Blogs CMS State
  const [blogsList, setBlogsList] = useState<any[]>([]);
  const [newBlog, setNewBlog] = useState({ title: "", image: "", date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), excerpt: "", content: "" });

  const [isUploading, setIsUploading] = useState(false);

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error } = await supabase.storage.from('media').upload(filePath, file);
    if (error) {
      alert("Error uploading file. Make sure you created a 'media' public bucket in Supabase Storage! " + error.message);
      setIsUploading(false);
      return null;
    }

    const { data } = supabase.storage.from('media').getPublicUrl(filePath);
    setIsUploading(false);
    return data.publicUrl;
  };

  // Simple hardcoded auth for now (can be upgraded to Supabase Auth later)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "12345") {
      setIsAuthenticated(true);
      localStorage.setItem("admin_auth", "true");
      fetchContent();
    } else {
      alert("Invalid password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("admin_auth");
    setPassword("");
  };

  const fetchContent = async () => {
    if (!import.meta.env.VITE_SUPABASE_URL) return;
    const { data } = await supabase.from("site_content").select("*");
    if (data) {
      setContentKeys(data);
      try {
        const portRow = data.find(d => d.key === "portfolio_items");
        if (portRow && portRow.content) setPortfolioItems(JSON.parse(portRow.content));
        
        const blogRow = data.find(d => d.key === "blogs_list");
        if (blogRow && blogRow.content) setBlogsList(JSON.parse(blogRow.content));
      } catch (e) {
        console.error("Error parsing JSON content", e);
      }
    }
  };

  const savePortfolio = async (items: any[]) => {
    await handleSaveContent("portfolio_items", JSON.stringify(items));
    setPortfolioItems(items);
  };

  const saveBlogs = async (items: any[]) => {
    await handleSaveContent("blogs_list", JSON.stringify(items));
    setBlogsList(items);
  };

  const fetchSubmissions = async () => {
    setLoadingSubs(true);
    if (import.meta.env.VITE_SUPABASE_URL) {
      const { data, error } = await supabase.from("contacts").select("*").order("created_at", { ascending: false });
      if (error) {
        alert("Error fetching data: " + error.message);
      }
      if (data) setSubmissions(data);
    }
    setLoadingSubs(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (activeTab === "content") fetchContent();
      if (activeTab === "submissions") fetchSubmissions();
    }
  }, [activeTab, isAuthenticated]);

  const handleSaveContent = async (key: string, value: string) => {
    setIsSaving(true);
    const { error } = await supabase
      .from("site_content")
      .upsert({ key, content: value }, { onConflict: "key" });

    if (error) alert("Error saving content: " + error.message);
    else {
      alert("Saved successfully!");
      fetchContent();
    }
    setIsSaving(false);
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#f8f9fa]">
        {/* Background Image with Light Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}
        >
          <div className="absolute inset-0 bg-[#f8f9fa]/80 backdrop-blur-md" />
        </div>

        {/* Floating Orbs for effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 bg-white/70 backdrop-blur-xl border border-white p-10 rounded-[2.5rem] w-full max-w-md shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <LockKeyhole className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-serif text-4xl text-[#0a1128] mb-3 italic font-bold">Admin Portal</h1>
            <p className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Restricted Access</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div className="relative">
              <input
                type="password"
                placeholder="Enter Master Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-white border border-slate-200 text-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-400 shadow-sm"
              />
            </div>
            <button type="submit" className="w-full premium-button bg-primary text-white font-bold rounded-2xl py-4 shadow-[0_4px_15px_rgba(200,100,20,0.3)] hover:shadow-[0_4px_20px_rgba(200,100,20,0.4)] transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-sm mt-2">
              <LockKeyhole className="w-4 h-4" /> Secure Login
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-36 md:pt-48 pb-12 px-4 md:px-12 relative bg-[#f8f9fa]">
      {/* Background Image with Light Overlay for Dashboard */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)'
        }}
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-xl" />
      </div>
      <Navigation />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div className="flex flex-col">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0a1128] mb-2 drop-shadow-sm">Admin Dashboard</h1>
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Manage your website</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-end md:items-center">
            <button 
              onClick={handleLogout}
              className="text-sm font-bold text-slate-500 hover:text-red-500 transition-colors"
            >
              Logout
            </button>
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab("content")}
              className={`px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${activeTab === "content" ? "bg-primary text-white shadow-md" : "text-slate-500 hover:text-[#0a1128] hover:bg-slate-50"}`}
            >
              <LayoutTemplate className="w-4 h-4" /> Content
            </button>
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${activeTab === "portfolio" ? "bg-primary text-white shadow-md" : "text-slate-500 hover:text-[#0a1128] hover:bg-slate-50"}`}
            >
              Our Works
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${activeTab === "blogs" ? "bg-primary text-white shadow-md" : "text-slate-500 hover:text-[#0a1128] hover:bg-slate-50"}`}
            >
              Blogs
            </button>
            <button
              onClick={() => setActiveTab("submissions")}
              className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${activeTab === "submissions" ? "bg-primary text-white shadow-md" : "text-slate-500 hover:text-[#0a1128] hover:bg-slate-50"}`}
            >
              <MessageSquare className="w-4 h-4" /> Form Data
            </button>
          </div>
        </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] min-h-[500px]">

          {/* Content Editor Tab */}
          {activeTab === "content" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-[#0a1128] font-bold text-xl mb-4">Add New Dynamic Content</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    placeholder="Content Key (e.g. hero_title)"
                    value={newKey} onChange={e => setNewKey(e.target.value)}
                    className="flex-1 bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                  <input
                    placeholder="Content Value"
                    value={newValue} onChange={e => setNewValue(e.target.value)}
                    className="flex-[2] bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                  <button
                    onClick={() => { handleSaveContent(newKey, newValue); setNewKey(""); setNewValue(""); }}
                    className="bg-primary text-white px-6 rounded-xl font-bold hover:bg-primary/90 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Save className="w-4 h-4" /> Add
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[#0a1128] font-bold text-xl mb-4">Existing Dynamic Content</h3>
                {contentKeys.length === 0 ? (
                  <p className="text-slate-500 text-center py-8">No dynamic content found in Supabase.</p>
                ) : (
                  contentKeys.map((item) => (
                    <div key={item.key} className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm items-start md:items-center">
                      <div className="text-primary font-mono text-sm font-semibold w-full md:w-1/4 break-words bg-primary/5 px-3 py-2 rounded-lg border border-primary/10">
                        {item.key}
                      </div>
                      <textarea
                        defaultValue={item.value}
                        onChange={(e) => {
                          const newArr = [...contentKeys];
                          const idx = newArr.findIndex(x => x.key === item.key);
                          newArr[idx].value = e.target.value;
                          setContentKeys(newArr);
                        }}
                        className="flex-1 bg-slate-50 border border-slate-200 text-slate-800 rounded-lg px-4 py-3 min-h-[60px] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none w-full"
                      />
                      <button
                        onClick={() => handleSaveContent(item.key, item.value)}
                        disabled={isSaving}
                        className="bg-slate-100 hover:bg-primary hover:text-white text-slate-600 px-6 py-3 rounded-lg font-bold transition w-full md:w-auto shadow-sm"
                      >
                        Update
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Form Submissions Tab */}
          {activeTab === "submissions" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-[#0a1128] font-bold text-xl mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" /> Contact Inquiries
              </h3>

              {loadingSubs ? (
                <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 text-primary animate-spin" /></div>
              ) : submissions.length === 0 ? (
                <div className="bg-slate-50 rounded-2xl p-12 text-center border border-slate-100">
                  <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500 font-medium">No form submissions found yet.</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {submissions.map((sub: any) => (
                    <div key={sub.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 hover:border-primary/30 transition-colors shadow-sm">
                      <div className="w-full md:w-1/3 space-y-2">
                        <div className="text-[#0a1128] font-bold text-lg">{sub["first name"]} {sub["last name"]}</div>
                        <div className="text-slate-600 text-sm flex items-center gap-2">
                          <Mail className="w-3 h-3 text-primary/70" /> {sub.email}
                        </div>
                        <div className="text-slate-600 text-sm flex items-center gap-2">
                          <Phone className="w-3 h-3 text-primary/70" /> {sub.mobile}
                        </div>
                        <div className="text-slate-400 font-medium text-xs mt-2 bg-slate-100 inline-block px-2 py-1 rounded">
                          {new Date(sub.created_at).toLocaleString()}
                        </div>
                      </div>
                      <div className="w-full md:w-2/3 bg-slate-50 rounded-xl p-5 text-slate-700 whitespace-pre-wrap text-sm border border-slate-100">
                        {sub.message}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Portfolio CMS Tab */}
          {activeTab === "portfolio" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-[#0a1128] font-bold text-xl mb-4 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-primary" /> Add New Portfolio Item
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      placeholder="Title (e.g. Royal Wedding 2026)"
                      value={newPortfolio.title} onChange={e => setNewPortfolio({...newPortfolio, title: e.target.value})}
                      className="flex-1 bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                    <select
                      value={newPortfolio.type}
                      onChange={e => setNewPortfolio({...newPortfolio, type: e.target.value})}
                      className="bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    >
                      <option value="image">Image</option>
                      <option value="video">Video (MP4/URL)</option>
                    </select>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-2 flex-[3]">
                      <input
                        placeholder="Image or Video URL (Paste link OR upload below)"
                        value={newPortfolio.url} onChange={e => setNewPortfolio({...newPortfolio, url: e.target.value})}
                        className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      />
                      <div className="relative">
                        <input 
                          type="file" 
                          accept={newPortfolio.type === "video" ? "video/*" : "image/*"}
                          onChange={async (e) => {
                            if (e.target.files && e.target.files[0]) {
                              const url = await uploadFile(e.target.files[0]);
                              if (url) setNewPortfolio({...newPortfolio, url});
                            }
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                          disabled={isUploading}
                        />
                        <div className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 rounded-xl px-4 py-3 flex items-center justify-center gap-2 transition-colors text-sm font-semibold">
                          {isUploading ? <Loader2 className="w-4 h-4 animate-spin"/> : <Upload className="w-4 h-4" />}
                          {isUploading ? "Uploading..." : "Upload File from Computer"}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => { 
                        if(!newPortfolio.url) return;
                        const newItem = { id: Date.now().toString(), ...newPortfolio };
                        savePortfolio([newItem, ...portfolioItems]);
                        setNewPortfolio({ url: "", type: "image", title: "" });
                      }}
                      className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
                    >
                      <Plus className="w-4 h-4" /> Add Item
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[#0a1128] font-bold text-xl mb-4">Existing Portfolio Items</h3>
                {portfolioItems.length === 0 ? (
                  <p className="text-slate-500 text-center py-8">No portfolio items yet.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {portfolioItems.map((item) => (
                      <div key={item.id} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden group relative">
                        {item.type === "video" ? (
                          <video src={item.url} className="w-full h-40 object-cover" />
                        ) : (
                          <img src={item.url} className="w-full h-40 object-cover" />
                        )}
                        <div className="p-3">
                          <p className="font-bold text-sm text-[#0a1128] truncate">{item.title || "Untitled"}</p>
                          <p className="text-xs text-slate-500 capitalize">{item.type}</p>
                        </div>
                        <button
                          onClick={() => savePortfolio(portfolioItems.filter(i => i.id !== item.id))}
                          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Blogs CMS Tab */}
          {activeTab === "blogs" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-[#0a1128] font-bold text-xl mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" /> Add New Blog Post
                </h3>
                <div className="flex flex-col gap-4">
                  <input
                    placeholder="Blog Title"
                    value={newBlog.title} onChange={e => setNewBlog({...newBlog, title: e.target.value})}
                    className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:border-primary focus:outline-none"
                  />
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="flex flex-col gap-2 flex-[2]">
                      <input
                        placeholder="Cover Image URL (Paste link OR upload below)"
                        value={newBlog.image} onChange={e => setNewBlog({...newBlog, image: e.target.value})}
                        className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:border-primary focus:outline-none"
                      />
                      <div className="relative">
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={async (e) => {
                            if (e.target.files && e.target.files[0]) {
                              const url = await uploadFile(e.target.files[0]);
                              if (url) setNewBlog({...newBlog, image: url});
                            }
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                          disabled={isUploading}
                        />
                        <div className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 rounded-xl px-4 py-3 flex items-center justify-center gap-2 transition-colors text-sm font-semibold">
                          {isUploading ? <Loader2 className="w-4 h-4 animate-spin"/> : <Upload className="w-4 h-4" />}
                          {isUploading ? "Uploading..." : "Upload Cover Image"}
                        </div>
                      </div>
                    </div>
                    <input
                      placeholder="Date (e.g. October 15, 2026)"
                      value={newBlog.date} onChange={e => setNewBlog({...newBlog, date: e.target.value})}
                      className="flex-1 bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <textarea
                    placeholder="Short Excerpt (shows on blogs list page)"
                    value={newBlog.excerpt} onChange={e => setNewBlog({...newBlog, excerpt: e.target.value})}
                    className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-3 min-h-[80px] focus:border-primary focus:outline-none"
                  />
                  <textarea
                    placeholder="Full Blog Content (Supports HTML or plain text)"
                    value={newBlog.content} onChange={e => setNewBlog({...newBlog, content: e.target.value})}
                    className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-3 min-h-[200px] focus:border-primary focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      if(!newBlog.title) return;
                      const newItem = { id: Date.now().toString(), ...newBlog };
                      saveBlogs([newItem, ...blogsList]);
                      setNewBlog({ title: "", image: "", date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), excerpt: "", content: "" });
                    }}
                    className="bg-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-primary/90 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Plus className="w-5 h-5" /> Publish Blog Post
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[#0a1128] font-bold text-xl mb-4">Manage Blogs</h3>
                {blogsList.length === 0 ? (
                  <p className="text-slate-500 text-center py-8">No blogs created yet.</p>
                ) : (
                  <div className="grid gap-4">
                    {blogsList.map((blog) => (
                      <div key={blog.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center shadow-sm relative pr-12">
                        {blog.image && (
                          <div className="w-full md:w-32 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-100">
                            <img src={blog.image} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex-1 w-full space-y-2">
                          <h4 className="font-bold text-lg text-[#0a1128]">{blog.title}</h4>
                          <p className="text-sm text-slate-500">{blog.date}</p>
                          <p className="text-sm text-slate-600 line-clamp-2">{blog.excerpt}</p>
                        </div>
                        <button
                          onClick={() => saveBlogs(blogsList.filter(b => b.id !== blog.id))}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white p-3 rounded-xl transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
