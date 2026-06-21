import { NextRequest, NextResponse } from 'next/server'

const SPECIAL_CHAR_REG = /[ \{\}\[\]\/.,;:|\)*~`^\-_+┼<>\%\'\"\\\(\=]/i

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { customer_name, mobile2, consent_privacy, consent_third_party } = body

    // 기본 검증
    if (!customer_name || SPECIAL_CHAR_REG.test(customer_name)) {
      return NextResponse.json({ error: '이름이 유효하지 않습니다.' }, { status: 400 })
    }
    if (!mobile2 || !/^\d{8,11}$/.test(mobile2)) {
      return NextResponse.json({ error: '전화번호가 유효하지 않습니다.' }, { status: 400 })
    }
    if (!consent_privacy || !consent_third_party) {
      return NextResponse.json({ error: '필수 동의 항목에 동의해 주세요.' }, { status: 400 })
    }

    // 외부 DB API로 전달 (구글시트 또는 자체 DB)
    const dbUrl = process.env.NEXT_PUBLIC_DB_SUBMIT_URL
    const apiKey = process.env.NEXT_PUBLIC_DB_API_KEY
    if (dbUrl && apiKey) {
      await fetch(`${dbUrl}?api_key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...body, category: '미용입시', created_at: new Date().toISOString() }),
      })
    }

    return NextResponse.json({ success: true, message: '신청이 완료되었습니다.' })
  } catch {
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 })
  }
}
