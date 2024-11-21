import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

// APIハンドラ
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { yourname, email, title, content } = req.body;

    // 必須項目のチェック
    if (!yourname || !email || !content) {
      return res.status(400).json({ message: "必須項目が不足しています。" });
    }

    // titleが任意項目であることを考慮
    const checkTitle = title || "タイトルなし"; // 値がない場合はデフォルト値を設定

    try {
      console.log("受け取ったデータ:", {
        yourname,
        email,
        title: checkTitle,
        content,
      });

      // 成功レスポンス
      return res.status(200).json({ message: "お問い合わせ内容を受け付けました。" });
    } catch (error) {
      console.error("サーバーエラー:", error);
      return res.status(500).json({ message: "サーバーエラーが発生しました。" });
    }
  } else {
    // 他のHTTPメソッドは許可しない
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: "メソッドが許可されていません。" });
  }
}