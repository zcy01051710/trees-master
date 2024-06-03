/**
 * 返回消费类型 具体方式
 *
 * @param 1-17
 * @return
 */

export function getConsumptionFormatText(type: number): string {
  switch (type) {
    case 1:
      return "签到";
    case 2:
      return "病友圈首评";
    case 3:
      return "首发病例";
    case 4:
      return "完善档案";
    case 5:
      return "健康评测";
    case 6:
      return "悬赏消费";
    case 7:
      return "悬赏奖励";
    case 8:
      return "邀请奖励";
    case 9:
      return "问诊消费";
    case 10:
      return "问诊收入";
    case 11:
      return "观看资讯";
    case 12:
      return "送礼物";
    case 13:
      return "绑定身份证";
    case 14:
      return "绑定银行卡";
    case 15:
      return "充值";
    case 16:
      return "提现";
    case 17:
      return "购买健康视频";
    default:
      return "暂不存在的消费方式";
  }
}

/**
 * 返回提现状态
 *
 *
 *
 */
export function withdrawalStatusFormatText(status: number): string {
  switch (status) {
    case 1:
      return "转帐中";
    case 2:
      return "已提现";
  }
  return "暂无该状态";
}
