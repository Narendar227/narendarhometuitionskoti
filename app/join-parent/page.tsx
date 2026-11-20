import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { JoinParentForm } from '@/components/site/join-parent-form'

export const metadata: Metadata = {
  title: 'Request a Home Tutor in Koti',
  alternates: { canonical: '/join-parent' },
  description:
    'Enquire about home tuition in Koti, Hyderabad. Tutor availability is confirmed for each address before discussing options.',
}

export default function JoinParentPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Join as Parent"
        title="Find the right home tutor in Koti"
        description="Share your child’s grade and learning needs below. We’ll confirm tutor availability for your preferred location before discussing options."
        breadcrumbItems={[{ label: 'Join as Parent' }]}
      />
      <section className="bg-secondary/40 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <JoinParentForm />
        </div>
      </section>
    </PageShell>
  )
}
