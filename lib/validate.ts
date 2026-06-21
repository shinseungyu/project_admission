export type LeadFormData = {
  customer_name: string
  customer_birth: string
  mobile1: string
  mobile2: string
  customer_sex: string
  major: string
  region: string
  budget: string
  target_school: string
  consent_privacy: boolean
  consent_third_party: boolean
}

const SPECIAL_CHAR_REG = /[ \{\}\[\]\/.,;:|\)*~`^\-_+┼<>\%\'\"\\\(\=]/i

export function validateLead(data: Partial<LeadFormData>): string | null {
  if (!data.customer_name) return '이름을 입력해 주세요.'
  if (SPECIAL_CHAR_REG.test(data.customer_name)) return '이름에 특수문자는 입력할 수 없습니다.'
  if (data.customer_name.length > 8) return '이름을 다시 입력해 주세요.'

  if (!data.customer_birth) return '생년월일을 입력해 주세요.'
  if (!/^\d{6}$/.test(data.customer_birth)) return '생년월일 6자리 숫자만 입력해 주세요.'
  const month = parseInt(data.customer_birth.slice(2, 4))
  const day = parseInt(data.customer_birth.slice(4, 6))
  if (month < 1 || month > 12) return '생년월일을 다시 확인해 주세요.'
  if (day < 1 || day > 31) return '생년월일을 다시 확인해 주세요.'

  if (!data.customer_sex) return '성별을 선택해 주세요.'
  if (!data.mobile2) return '전화번호를 입력해 주세요.'
  if (!/^\d+$/.test(data.mobile2)) return '전화번호는 숫자만 입력해 주세요.'
  if (data.mobile2.length < 8) return '전화번호 8자리를 입력해 주세요.'

  if (!data.consent_privacy) return '개인정보 수집·이용에 동의해 주세요.'
  if (!data.consent_third_party) return '제3자 제공에 동의해 주세요.'

  return null
}

export function parsePhone(mobile1: string, mobile2: string): { mobile1: string; mobile2: string } | string {
  if (mobile2.length === 8) return { mobile1, mobile2 }
  if (mobile2.length === 11 && /^(010|011|016|017|018|019)/.test(mobile2.slice(0, 3))) {
    return { mobile1: mobile2.slice(0, 3), mobile2: mobile2.slice(3) }
  }
  return '전화번호를 다시 입력해 주세요.'
}
