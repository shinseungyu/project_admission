export const REGIONS = [
  '서울', '경기', '인천', '부산', '대구', '광주', '대전', '울산',
  '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주',
]

export const MAJOR_REGIONS = ['서울', '경기']

export const MAJORS = [
  { id: 'hair',   name: '헤어',   label: '헤어디자인',        avg: 280 },
  { id: 'makeup', name: '메이크업', label: '메이크업아티스트',  avg: 250 },
  { id: 'nail',   name: '네일',   label: '네일아트',           avg: 180 },
  { id: 'skin',   name: '피부',   label: '피부미용',           avg: 320 },
] as const

export type MajorId = typeof MAJORS[number]['id']

export const GRADES = ['고1', '고2', '고3', '재수생', '일반고 졸', '검정고시']

export const TARGET_SCHOOLS = [
  '서경대', '수원여대', '혜전대', '동아방송예술대', '경인여대',
  '부천대', '강원도립대', '대전과학기술대', '한국관광대', '연성대',
  '경북전문대', '대구미래대', '조선미용고등학교', '기타',
]

export const BUDGETS = [
  '200만원 이하', '200~300만원', '300~400만원', '400~500만원', '500만원 이상',
]

export type Academy = {
  id: string
  name: string
  region: string
  majors: string[]
  priceMin: number
  priceMax: number
  rating: number
  tags: string[]
  isPartner: boolean
}

export const ACADEMIES: Academy[] = [
  { id: 'a1', name: '서울미용예술학원', region: '서울', majors: ['hair', 'makeup', 'skin'], priceMin: 250, priceMax: 380, rating: 4.8, tags: ['국비가능', '취업연계', '소수정예'], isPartner: true },
  { id: 'a2', name: '강남입시미용학원', region: '서울', majors: ['makeup', 'hair'], priceMin: 300, priceMax: 420, rating: 4.7, tags: ['서경대전문', '실기집중'], isPartner: true },
  { id: 'a3', name: '경기미용아카데미', region: '경기', majors: ['hair', 'nail', 'skin'], priceMin: 200, priceMax: 320, rating: 4.6, tags: ['국비가능', '야간반'], isPartner: true },
  { id: 'a4', name: '인천미용입시학원', region: '인천', majors: ['hair', 'makeup'], priceMin: 220, priceMax: 350, rating: 4.5, tags: ['주말반', '1:1관리'], isPartner: false },
  { id: 'a5', name: '부산뷰티아카데미', region: '부산', majors: ['makeup', 'skin', 'nail'], priceMin: 230, priceMax: 360, rating: 4.7, tags: ['취업연계', '자격증'], isPartner: true },
  { id: 'a6', name: '대구미용예술학원', region: '대구', majors: ['hair', 'makeup'], priceMin: 210, priceMax: 330, rating: 4.4, tags: ['국비가능', '야간반'], isPartner: false },
  { id: 'a7', name: '광주미용입시학원', region: '광주', majors: ['hair', 'skin'], priceMin: 200, priceMax: 300, rating: 4.5, tags: ['소수정예', '주말반'], isPartner: true },
]

export const REVIEWS = [
  { name: '김**', school: '서경대 헤어디자인과', grade: '고3', text: '다른 학원 2곳 비교해서 결정했는데 학원비도 합리적이고 입시 결과까지 딱 맞았어요!', rating: 5 },
  { name: '이**', school: '수원여대 메이크업아티스트과', grade: '재수생', text: '비교 사이트 덕분에 지역별 학원비 차이를 한눈에 볼 수 있었고 결국 합격했습니다.', rating: 5 },
  { name: '박**', school: '혜전대 피부미용과', grade: '고2', text: '미리 견적 받아보고 부모님께 보여드렸더니 바로 OK 사인 받았어요. 너무 편했습니다.', rating: 5 },
  { name: '최**', school: '동아방송예술대 뷰티아트학과', grade: '일반고 졸', text: '국비지원 여부도 같이 알려줘서 최종적으로 실제 부담금이 얼마인지 알 수 있었어요.', rating: 4 },
  { name: '정**', school: '경인여대 헤어디자인과', grade: '고3', text: '입시 준비 언제 시작해야 하는지 모르던 중에 가이드 보고 고2 때부터 준비했어요.', rating: 5 },
]
