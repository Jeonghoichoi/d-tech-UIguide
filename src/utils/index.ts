import moment from "moment";

/**
 * @description 난수 생성
 * @param {Number} min 최소값
 * @param {Number} max 최대값
 * @return number
 */
export function randomNum(min: number, max: number): number {
  const num = Math.floor(Math.random() * (min - max) + max);
  return num;
}

/**
 * @description 3자리수
 * @param {number} num
 * @return string
 */
export const numberFormat = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
};

/**
 * @description 3자리수 사람 수
 * @param {number} num
 * @return string
 */

export const numberFormatPerson = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "명";
};

/**
 * @description classname 리턴
 * @param {object} classes
 * @return string
 */
export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

/**
 * @description body scroll Lock
 * @param {boolean}
 */
export const scrollLock = (isLocked: boolean) => {
  if (isLocked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

/**
 * @description 년월일
 * @param {Date} Date
 * @return string
 */
export const formattinDate = (date: Date): string => {
  return date.getFullYear() + "년 " + (date.getMonth() + 1) + "월 " + date.getDate() + "일";
};

/**
 * @ e
 */

export const maxLengthCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.value.length > e.target.maxLength) {
    e.target.value = e.target.value.slice(0, e.target.maxLength);
  }
};

/**
 * date => YYYY-MM-DD
 * @param {*} date
 * @returns
 */
export function toShortStringTimeFromDate(dateString: string, delimiter = "-") {
  if (!dateString) return moment().format(`YYYY${delimiter}MM${delimiter}DD`);

  return moment(dateString).format(`YYYY${delimiter}MM${delimiter}DD`);
}

/**
 * date => YYYY-MM-DD HH:mm:ss
 * @param {*} date
 * @returns
 */
export function toStringFullTimeFromDate(dateString: string) {
  if (!dateString) return moment(dateString).format("YYYY-MM-DD HH:mm:ss");

  return moment(dateString).format("YYYY-MM-DD HH:mm:ss");
}

/**
 * 천 단위 콤마찍기
 * @param {*} amount, locales, options
 * @returns
 */
export function toCurrencyFormat(amonut: number, locales?: string, options?: any) {
  if (!locales) return amonut.toLocaleString(locales, options);
  return amonut.toLocaleString("ko-KR", options);
}

export function isUrlAddr(url: string) {
  const urlRegex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
  return urlRegex.test(url);
}
