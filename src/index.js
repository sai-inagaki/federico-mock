// Cloudflare Workers entry script
// 全リクエストに HTTP Basic 認証をかけ、認証成功後に静的アセットへフォワードする
//
// 環境変数（Cloudflare ダッシュボード → Workers & Pages → 該当 Worker → Settings → Variables で設定）:
//   BASIC_USER : ユーザー名
//   BASIC_PASS : パスワード（Secret として登録推奨）
//
// 静的アセットは wrangler.jsonc の assets.binding (ASSETS) を通じて配信する。

export default {
  async fetch(request, env, ctx) {
    const expectedUser = env.BASIC_USER;
    const expectedPass = env.BASIC_PASS;

    // 環境変数が未設定ならセットアップミスとして 500
    if (!expectedUser || !expectedPass) {
      return new Response(
        "Basic auth is not configured. Set BASIC_USER and BASIC_PASS in Worker variables.",
        { status: 500 }
      );
    }

    const authHeader = request.headers.get("Authorization") || "";

    if (authHeader.startsWith("Basic ")) {
      const encoded = authHeader.slice("Basic ".length).trim();
      let decoded = "";
      try {
        decoded = atob(encoded);
      } catch (_) {
        // Base64 が壊れている場合は認証失敗扱い
      }
      const sepIndex = decoded.indexOf(":");
      if (sepIndex !== -1) {
        const user = decoded.slice(0, sepIndex);
        const pass = decoded.slice(sepIndex + 1);
        if (
          timingSafeEqual(user, expectedUser) &&
          timingSafeEqual(pass, expectedPass)
        ) {
          // 認証成功 → 静的アセットへフォワード
          return env.ASSETS.fetch(request);
        }
      }
    }

    return new Response("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Federico", charset="UTF-8"',
        "Cache-Control": "no-store",
      },
    });
  },
};

// タイミング攻撃対策の定時間比較
function timingSafeEqual(a, b) {
  const enc = new TextEncoder();
  const aBytes = enc.encode(a);
  const bBytes = enc.encode(b);
  if (aBytes.length !== bBytes.length) {
    return false;
  }
  let diff = 0;
  for (let i = 0; i < aBytes.length; i++) {
    diff |= aBytes[i] ^ bBytes[i];
  }
  return diff === 0;
}
