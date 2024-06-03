import JSEncrypt from "jsencrypt";
export function addClassName(...arr: string[]) {
  return arr.join(" ");
}

export function RSA(data: string) {
  // 公钥
  const publicKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuQd3gESx7VdIyRYUWjmjg61VIgUK6F45hClmqUMZ7xNiT5rlLM6e78osMvBF/yP7cVm7pK+NMCDWoVS1/AETpxJYqUlIC77ZAU8/MnP96IupnJL87vqhPcpdv7+VqLM38ls++yuD/F/HSoOQTv/leJh+dgE/4EYAJjOWFAbYfXwIDAQAB`;
  // 产生一个实例
  const en = new JSEncrypt();
  // 设置公钥
  en.setPublicKey(publicKey);
  // 通过公钥 将数据进行加密 并返回  RSA格式
  return en.encrypt(data) as string;
}

export function formatTime(time: number | Date | string, formmat = "YYYY-MM-DD hh:mm:ss") {
  const rules = ["YYYY", "MM", "DD", "hh", "mm", "ss"];
  const date = new Date(time);

  const reg = new RegExp(rules.join("|"), "g");
  return formmat.replace(reg, ($) => {
    switch ($) {
      case "YYYY":
        return date.getFullYear().toString();
      case "MM":
        return (date.getMonth() + 1).toString().padStart(2, "0");
      case "DD":
        return (date.getDate()).toString().padStart(2, "0");
      case "hh":
        return (date.getHours()).toString().padStart(2, "0");
      case "mm":
        return (date.getMinutes()).toString().padStart(2, "0");
      case "ss":
        return (date.getSeconds()).toString().padStart(2, "0");
    }
    return $;
  });
}


