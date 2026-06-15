import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export function useSiteContent(contentKey: string, defaultValue: string) {
  const [content, setContent] = useState<string>(defaultValue);

  useEffect(() => {
    async function fetchContent() {
      // If Supabase is not configured, silently fall back to default
      if (!import.meta.env.VITE_SUPABASE_URL) {
        return;
      }

      try {
        const { data, error } = await supabase
          .from('site_content')
          .select('content')
          .eq('key', contentKey)
          .single();

        if (!error && data && data.content) {
          setContent(data.content);
        }
      } catch (err) {
        console.error('Failed to fetch site content:', err);
      }
    }

    fetchContent();
  }, [contentKey]); // Deliberately omit defaultValue to avoid infinite loops if passed inline

  return content;
}
