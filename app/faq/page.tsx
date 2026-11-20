import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Faq } from '@/components/site/faq'

export const metadata: Metadata = {
  title: 'Home Tuition FAQ in Koti',
  alternates: { canonical: '/faq' },
  description:
    'Frequently asked questions about home tuition in Koti, Hyderabad — tutors, subjects, boards, local coverage and enquiries.',
}

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about our home tuition services in Koti, Hyderabad."
        breadcrumbItems={[{ label: 'FAQ' }]}
      />
      <Faq />
    </PageShell>
  )
}
