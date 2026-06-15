import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Navigation } from "@/components/Navigation";
import { Save, Loader2, Database, LayoutTemplate, MessageSquare, LockKeyhole, Mail, Phone } from "lucide-react";
import heroBg from "@assets/generated_images/oe-hero-bg.png";

// Admin tabs
type Tab = "content" | "submissions";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("content");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Content Editor State
  const [contentKeys, setContentKeys] = useState<{ key: string, value: string }[]>([]);
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Submissions State
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loadingSubs, setLoadingSubs] = useState(false);

  // Simple hardcoded auth for now (can be upgraded to Supabase Auth later)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "12345") {
      setIsAuthenticated(true);
      fetchContent();
    } else {
      alert("Invalid password");
    }
  };

  const fetchContent = async () => {
    if (!import.meta.env.VITE_SUPABASE_URL) return;
    const { data } = await supabase.from("site_content").select("*");
    if (data) setContentKeys(data);
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
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0a1128] mb-2 drop-shadow-sm">Admin Dashboard</h1>
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Manage your website</p>
          </div>

          <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab("content")}
              className={`px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${activeTab === "content" ? "bg-primary text-white shadow-md" : "text-slate-500 hover:text-[#0a1128] hover:bg-slate-50"}`}
            >
              <LayoutTemplate className="w-4 h-4" /> Content
            </button>
            <button
              onClick={() => setActiveTab("submissions")}
              className={`px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${activeTab === "submissions" ? "bg-primary text-white shadow-md" : "text-slate-500 hover:text-[#0a1128] hover:bg-slate-50"}`}
            >
              <MessageSquare className="w-4 h-4" /> Form Data
            </button>
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

        </div>
      </div>
    </main>
  );
}
