export type CalendarType = {
  // 다음 달 가는 버튼 아이콘 문자 또는 HTML 태그
  nextLabel: string | React.ReactNode;

   // 다음 년 가는 버튼 아이콘 문자 또는 HTML 태그
  next2Label: string | React.ReactNode;

   // 이전 달 가는 버튼 아이콘 문자 또는 HTML 태그
  prevLabel: string | React.ReactNode;

  // 이전 년 가는 버튼 아이콘 문자 또는 HTML 태그
  prev2Label: string | React.ReactNode;
  
  // Range선택일지 true 이면 시작날과 끝 날 선택가능
  selectRange? : boolean;
}