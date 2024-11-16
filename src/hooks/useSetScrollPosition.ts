import { useEffect } from 'react';

const useScrollPosition = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { pathname } = window.location;

      // スクロール位置を保存する関数
      const saveScrollPosition = () => {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        sessionStorage.setItem(
          `scrollPos:${pathname}`,
          JSON.stringify({ x: scrollX, y: scrollY })
        );
      };

      // ページ遷移後にスクロール位置を復元する関数
      const restoreScrollPosition = () => {
        const scrollPos = sessionStorage.getItem(`scrollPos:${pathname}`);

        if (scrollPos) {
          const { x, y } = JSON.parse(scrollPos);

          // ページが完全にロードされてからスクロール位置を設定
          setTimeout(() => {
            window.scrollTo(x, y);
          }, 100); // 遅延を100msに設定
        } else {
          window.scrollTo(0, 0); // 初回訪問時はスクロール位置を0,0に設定
        }
      };

      // ページが完全にロードされた後にスクロール位置を復元
      window.onload = restoreScrollPosition;

      // 初回マウント時にスクロール位置を復元
      restoreScrollPosition();

      // スクロール時にスクロール位置を保存
      window.addEventListener('scroll', saveScrollPosition);

      // popstateイベントでスクロール位置を復元（ブラウザバックなど）
      window.addEventListener('popstate', restoreScrollPosition);

      // ページ遷移前にスクロール位置を保存
      window.addEventListener('beforeunload', saveScrollPosition);

      // クリーンアップ
      return () => {
        window.removeEventListener('scroll', saveScrollPosition);
        window.removeEventListener('popstate', restoreScrollPosition);
        window.removeEventListener('beforeunload', saveScrollPosition);
        window.onload = null; // イベントリスナーのクリーンアップ
      };
    }
  }, []); // 最初のマウント時のみ実行
};

export default useScrollPosition;