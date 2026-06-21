"use client"

export default function PartnerForm() {
  return (
    <form className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm space-y-5"
      onSubmit={e => e.preventDefault()}>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="academy_name" className="block text-sm font-bold text-gray-700 mb-2">학원명 *</label>
          <input id="academy_name" type="text" required placeholder="OO미용입시학원"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand" />
        </div>
        <div>
          <label htmlFor="contact_name" className="block text-sm font-bold text-gray-700 mb-2">담당자명 *</label>
          <input id="contact_name" type="text" required placeholder="홍길동"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand" />
        </div>
        <div>
          <label htmlFor="contact_phone" className="block text-sm font-bold text-gray-700 mb-2">연락처 *</label>
          <input id="contact_phone" type="tel" required placeholder="010-0000-0000"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand" />
        </div>
        <div>
          <label htmlFor="region" className="block text-sm font-bold text-gray-700 mb-2">지역 *</label>
          <input id="region" type="text" required placeholder="서울 강남구"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand" />
        </div>
      </div>
      <div>
        <label htmlFor="memo" className="block text-sm font-bold text-gray-700 mb-2">문의 내용</label>
        <textarea id="memo" rows={4} placeholder="학원 소개 및 문의 사항을 자유롭게 적어주세요."
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand resize-none" />
      </div>
      <button type="submit"
        className="w-full bg-brand text-white font-bold py-4 rounded-xl hover:bg-brand-dark transition-colors">
        제휴 신청하기
      </button>
    </form>
  )
}
