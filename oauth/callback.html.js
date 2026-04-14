// 文件：/pages/oauth/callback.html.js

export async function get({ url }) {
  // 获取第三方返回的 code 和 state
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  // 在这里写你的登录逻辑
  console.log("OAuth 回调成功 code:", code);

  // 成功后跳转到首页或后台
  return {
    status: 302,
    headers: {
      Location: "/",
    },
  };
}
