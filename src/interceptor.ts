import { StorageKeys } from "@/utils/const";

export function createInterceptors() {
  uni.addInterceptor("request", {
    invoke(args: UniNamespace.RequestOptions) {
      if (args.url[0] === "/") {
        const isProductionEnv = uni.getStorageSync("isProductionEnv");
        args.url = import.meta.env.VITE_BASIC_URL + args.url;
        args.header = {
          Authorization: uni.getStorageSync(StorageKeys.AccessToken),
          "X-Xh-Env": isProductionEnv ? "" : import.meta.env.VITE_XH_ENV
        };
      }
    },
    fail() {
      uni.showToast({
        title: "网络异常",
        icon: "error"
      });
    }
  });
}
