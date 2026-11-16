import { useState, useCallback, useRef, useEffect } from 'react';

function fallbackCopy(text: string): boolean {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus({ preventScroll: true });
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
}

export function useClipboard(timeoutMs: number = 2000) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const markCopied = useCallback(
    (id?: string) => {
      if (!id) return;
      setCopiedId(id);
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => {
        setCopiedId((prev) => (prev === id ? null : prev));
      }, timeoutMs);
    },
    [timeoutMs]
  );

  const copy = useCallback(
    async (text: string, id?: string): Promise<boolean> => {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(text);
          markCopied(id);
          return true;
        } catch {
          // Fall through to execCommand fallback
        }
      }

      const success = fallbackCopy(text);
      if (success) {
        markCopied(id);
      }
      return success;
    },
    [markCopied]
  );

  return { copiedId, copy };
}
