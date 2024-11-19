import { ContentsListType } from '@/data/type';
import { atomFamily } from 'recoil';

// atomFamily の定義
export const AutoFamily = atomFamily<ContentsListType[], string>({
  key: 'contentsListFamily', // ユニークなキー
  default: (pageId) => {
    // ページIDに基づいてデータを取得
    if (!pageId) return []; // デフォルトを空リストに設定
    switch (pageId) {
        
      case 'PRIVACY_POLICY_CONTENTS_LISTS':
        return [
            { "id": 0, "title": "当サイトに掲載されている広告について", "anchorlink": "i-1"},
            { "id": 1, "title": "当サイトが使用しているアクセス解析ツールについて", "anchorlink": "i-2"},
            { "id": 2, "title": "当サイトへのコメントについて", "anchorlink": "i-3"},
            { "id": 3, "title": "責任の有無", "anchorlink": "i-4"}
        ];
      case 'page2':
        return [
          { id: 0, title: 'Page 2 - Title 1', anchorlink: 'p2-1' },
          { id: 1, title: 'Page 2 - Title 2', anchorlink: 'p2-2' },
        ];
      default:
        return []; // デフォルトの空リスト
    }
  },
});
