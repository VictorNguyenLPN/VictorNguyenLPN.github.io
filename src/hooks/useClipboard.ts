import { useState, useCallback } from 'react';

export function useClipboard(timeoutMs: number = 2000) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = useCallback(
    (text: string, id?: string): boolean => {
      // 1. Immediately provide visual UI feedback
      if (id) {
        setCopiedId(id);
        setTimeout(() => {
          setCopiedId((prev) => (prev === id ? null : prev));
        }, timeoutMs);
      }

      // 2. Perform copy
      let success = false;
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '-9999px';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch (err) {
        console.warn('execCommand copy failed, trying navigator.clipboard:', err);
      }

      if (!success && navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).catch(() => {});
        success = true;
      }

      return success;
    },
    [timeoutMs]
  );

  return { copiedId, copy };
}
