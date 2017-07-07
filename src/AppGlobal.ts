import {User} from "./Entity/User";
/**
 * AppGlobal 全局定义 单例模式
 */
export class AppGlobal {
  private static instance: AppGlobal = new AppGlobal();

  server: string = "http://192.168.1.134:8888";


  apiUrl: string = "/";


  /**当前用户信息 */
  user: User = new User();

  constructor() {
    if (AppGlobal.instance) {
      throw new Error("错误: 请使用AppGlobal.getInstance() 代替使用new.");
    }
    AppGlobal.instance = this;
  }

  /**
   * 获取当前实例
   *
   * @static
   * @returns {AppGlobal}
   */
  public static getInstance(): AppGlobal {
    if (AppGlobal.instance.user.id == null || AppGlobal.instance.user.id == undefined) {
      AppGlobal.instance.user.id = localStorage.getItem("id");
      AppGlobal.instance.user.username = localStorage.getItem("username");
      AppGlobal.instance.user.password = localStorage.getItem("password");
      AppGlobal.instance.user.realname = localStorage.getItem("realname");
      AppGlobal.instance.user.role = localStorage.getItem("role");
    }
    return AppGlobal.instance;
  }


  /**
   *生成当前时间戳加随机数
   * @param bit 随机数位数
   * @returns {string}
   * @constructor
   */
  public PrimaryKey(bit: number) {
    return new Date().getTime() + this.random(bit);
  }

  /**
   *生成随机数
   * @param bit 随机数位数
   * @returns {string}
   */
  public random(bit: number) {
    let Num = "";
    for (let i = 0; i < bit; i++) {
      Num += Math.floor(Math.random() * 10);
    }
    return Num
  }

  /**
   * 获取当前时间的月份及年份  2017-04
   * @returns {string}
   */
  public getNowTimeByMonth() {
    let now = new Date();
    let month: number = now.getMonth() + 1;
    let nowDate = now.getFullYear() + '-';
    if (month < 10)
      nowDate += "0" + month;
    else
      nowDate += month;
    return nowDate;
  }

  /**
   * 获取日期  2017-04-01
   * @returns {string}
   */
  public getDate() {
    let now = new Date();
    let month: number = now.getMonth() + 1;
    let nowDate = now.getFullYear() + '-';
    let day = now.getDay();
    if (month < 10)
      nowDate += "0" + month;
    else
      nowDate += month;
    if (day < 10)
      nowDate += "-0" + day;
    else
      nowDate += "-" + day;
    return nowDate;
  }
}
